import React, { useRef, useState, useEffect } from "react";
import { Switch } from "antd";

const TableForFacebook = ({ access_token, account_id }) => {
  const allColumns = [
    "Action",
    "Campaign Name",
    "Budget",
    "Delivery",
    "Ad Set Name",
    "Results",
    "Reach",
    "Amount Spent",
    "Cost per Result",
    "Purchases Conversion Value",
    "Date Last Edited",
    "Ad ID",
    "Purchase ROAS",
    "Website Purchase ROAS",
    "Frequency",
    "CPC(all)",
    "Impressions",
    "Unique In-app content views",
    "CPM(cost per 1,000 impression)",
    "Unique CTR(link click through rate)",
    "Quality ranking",
    "Engagement rate ranking",
  ];

  const [columnNames, setColumnNames] = useState(allColumns.slice(0, 9));
  const [columnWidths, setColumnWidths] = useState(
    allColumns.reduce((acc, name) => ({ ...acc, [name]: 150 }), {})
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]); // Store campaign data here
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState("");
  const [editingRowIndex, setEditingRowIndex] = useState(null);

  const isResizing = useRef(null);
  const dropdownRef = useRef(null);
  const plusIconRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://127.0.0.1:8000/facebook/adaccounts/${account_id}/campaigns/`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${access_token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch campaigns");
        }

        const result = await response.json();

        // Format and set the fetched data
        const formattedData = result.data.map((item) => ({
          Action: "Enable/Disable",
          "Campaign Name": item.name || "-",
          Budget: item.daily_budget || "-",
          Delivery: item.status || "-",
          "Ad Set Name": item.ad_set_name || "-",
          Results: item.results || "-",
          Reach: item.reach || "-",
          "Amount Spent": item.amount_spent || "-",
          "Cost per Result": item.cost_per_result || "-",
          "Purchases Conversion Value": item.purchases_conversion_value || "-",
          "Date Last Edited": item.updated_time || "-",
          "Ad ID": item.id || "-",
          "Purchase ROAS": item.purchase_roas || "-",
          "Website Purchase ROAS": item.website_purchase_roas || "-",
          Frequency: item.frequency || "-",
          "CPC(all)": item.cpc || "-",
          Impressions: item.impressions || "-",
          "Unique In-app content views": item.unique_views || "-",
          "CPM(cost per 1,000 impression)": item.cpm || "-",
          "Unique CTR(link click through rate)": item.ctr || "-",
          "Quality ranking": item.quality_ranking || "-",
          "Engagement rate ranking": item.engagement_ranking || "-",
        }));

        setData(formattedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (account_id && access_token) {
      fetchCampaigns();
    }
  }, [account_id, access_token]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        plusIconRef.current &&
        !plusIconRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMouseDown = (column) => {
    isResizing.current = column;
  };

  const handleMouseMove = (e) => {
    if (isResizing.current) {
      setColumnWidths((prevWidths) => ({
        ...prevWidths,
        [isResizing.current]:
          e.clientX -
          document
            .querySelector(`[data-column="${isResizing.current}"]`)
            .getBoundingClientRect().left,
      }));
    }
  };

  const handleMouseUp = () => {
    isResizing.current = null;
  };

  const handleAddColumn = (column) => {
    setColumnNames((prev) => [...prev, column]);
    setShowDropdown(false);
  };

  const getStickyOffset = (index) => {
    return columnNames
      .slice(0, index)
      .reduce((acc, name) => acc + columnWidths[name], 0);
  };

  const handleEditClick = (value, rowIndex) => {
    setIsEditing(true);
    setEditedValue(value);
    setEditingRowIndex(rowIndex);
  };

  const handleSave = () => {
    setData((prevData) =>
      prevData.map((row, index) =>
        index === editingRowIndex ? { ...row, Budget: editedValue } : row
      )
    );
    setIsEditing(false);
    setEditingRowIndex(null);
    setEditedValue("");
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingRowIndex(null);
    setEditedValue("");
  };

  const filteredData = data.filter((row) =>
    columnNames.some((column) =>
      row[column]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  const totals = columnNames.reduce((acc, columnName) => {
    if (["Budget", "Amount Spent"].includes(columnName)) {
      acc[columnName] = filteredData.reduce((sum, row) => {
        const value = parseFloat(row[columnName]);
        return !isNaN(value) ? sum + value : sum;  // Only add valid numbers
      }, 0);
    } else {
      acc[columnName] = "-"; // Other columns will have "-"
    }
    return acc;
  }, {});
  


  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className="overflow-auto bg-[#f2f2f2] px-3 h-[85vh] w-full relative"
    >
      <div className="max-w-7xl mx-auto pb-3">
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow rounded-md p-2 border"
          />
        </div>

        {/* Suggested Columns Dropdown */}
{/* Suggested Columns Dropdown */}
{/* Suggested Columns Dropdown */}
{/* Suggested Columns Dropdown */}
{showDropdown && (
  <div
    ref={dropdownRef}
    className="absolute top-[90px] right-5 mb-3 mt-1 w-48 bg-white border rounded-md shadow-lg z-40"
    style={{ maxHeight: "200px", overflowY: "auto" }} // Add max-height and overflow for scrolling
  >
    <div className="p-2 font-semibold border-b">Suggested Columns</div>
    {allColumns
      .filter((col) => !columnNames.includes(col))
      .map((col) => (
        <div key={col} className="p-2 hover:bg-gray-100 cursor-pointer">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              onChange={(e) => {
                if (e.target.checked) {
                  handleAddColumn(col); // Add the column when checked
                }
              }}
            />
            {col}
          </label>
        </div>
      ))}
  </div>
)}


        <div className="border-b overflow-auto max-h-[400px] rounded-t-md">
          <div className="min-w-max relative">
            <div className="flex relative font-bold">
              {columnNames.map((name, index) => (
                <div
                  key={name}
                  data-column={name}
                  style={{
                    width: columnWidths[name],
                    minWidth: 30,
                    position: index < 2 ? "sticky" : "relative",
                    left: index < 2 ? `${getStickyOffset(index)}px` : "unset",
                    zIndex: index < 2 ? 1 : "unset",
                  }}
                  className="relative bg-white border-r px-2 py-2"
                >
                  <div
                    style={{
                      maxWidth:
                        name === "Campaign Name"
                          ? `${0.8 * columnWidths[name]}px`
                          : "100%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {name}
                  </div>
                  <div
                    onMouseDown={() => handleMouseDown(name)}
                    className="absolute right-0 top-0 bottom-0 w-[5px] cursor-pointer"
                  />
                </div>
              ))}
              <div
                className="relative w-[50px] min-w-[30px] bg-white border-y flex justify-center items-center border-r px-2 py-1 cursor-pointer"
                onClick={() => setShowDropdown((prev) => !prev)}
                ref={plusIconRef}
              >
                +
              </div>
            </div>

            <div>
              {filteredData.map((row, i) => (
                <div key={i} className="flex">
                  {columnNames.map((name, index) => (
                    <div
                      key={name}
                      style={{
                        width: columnWidths[name],
                        minWidth: 30,
                        position: index < 2 ? "sticky" : "relative",
                        left:
                          index < 2 ? `${getStickyOffset(index)}px` : "unset",
                        zIndex: index < 2 ? 1 : "unset",
                      }}
                      className="border-r p-1 bg-white"
                    >
                      {isEditing && editingRowIndex === i && name === "Budget" ? (
                        <div>
                          <input
                            type="text"
                            value={editedValue}
                            onChange={(e) => setEditedValue(e.target.value)}
                            className="border p-1 w-full"
                          />
                          <div className="flex justify-end mt-1">
                            <button
                              onClick={handleSave}
                              className="text-sm px-2 py-1 mr-1 text-white bg-green-500 rounded"
                            >
                              Save
                            </button>
                            <button
                              onClick={handleCancel}
                              className="text-sm px-2 py-1 text-white bg-red-500 rounded"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : name === "Budget" ? (
                        <div
                          onClick={() => handleEditClick(row[name], i)}
                          className="cursor-pointer"
                        >
                          {row[name]}
                        </div>
                      ) : name === "Action" ? (
                        <div className="flex items-center justify-center">
                          <Switch defaultChecked={true} />
                        </div>
                      ) : (
                        <div
                          style={{
                            maxWidth: `${0.8 * columnWidths[name]}px`,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {row[name] || "N/A"}
                        </div>
                      )}
                    </div>
                  ))}
                  <div
                    style={{ width: 50, minWidth: 30 }}
                    className="border-r p-1 bg-white"
                  />
                </div>
              ))}
               {/* Total Row */}
               <div className="flex font-bold bg-gray-100">
                {columnNames.map((name, index) => (
                  <div
                    key={name}
                    style={{
                      width: columnWidths[name],
                      minWidth: 30,
                      position: index < 2 ? "sticky" : "relative",
                      left: index < 2 ? `${getStickyOffset(index)}px` : "unset",
                      zIndex: index < 2 ? 1 : "unset",
                    }}
                    className="border-r p-1 bg-gray-100"
                  >
                    {totals[name]}
                  </div>
                ))}
                <div
                  style={{ width: 50, minWidth: 30 }}
                  className="border-r p-1 bg-gray-100"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TableForFacebook;
