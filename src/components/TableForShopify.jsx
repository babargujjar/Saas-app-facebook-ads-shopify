import React, { useEffect, useRef, useState } from "react";
import { Switch } from "antd";

const TableForFacebook = () => {
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
  const [data, setData] = useState([
    {
      Budget: "100",
      Action: true,
      "Campaign Name": "Campaign 1",
      Delivery: "On time",
      "Ad Set Name": "Ad Set A",
      Results: "500",
      Reach: "1000",
      "Amount Spent": "50",
      "Cost per Result": "0.1",
      "Purchases Conversion Value": "200",
      "Date Last Edited": "2023-09-01",
      "Ad ID": "AD123",
      "Purchase ROAS": "2.5",
      "Website Purchase ROAS": "3.0",
      Frequency: "1.5",
      "CPC(all)": "0.2",
      Impressions: "1500",
      "Unique In-app content views": "300",
      "CPM(cost per 1,000 impression)": "15",
      "Unique CTR(link click through rate)": "1.2%",
      "Quality ranking": "Above average",
      "Engagement rate ranking": "High",
    },
    {
      Budget: "100",
      Action: true,
      "Campaign Name": "Campaign 1",
      Delivery: "On time",
      "Ad Set Name": "Ad Set A",
      Results: "500",
      Reach: "1000",
      "Amount Spent": "50",
      "Cost per Result": "0.1",
      "Purchases Conversion Value": "200",
      "Date Last Edited": "2023-09-01",
      "Ad ID": "AD123",
      "Purchase ROAS": "2.5",
      "Website Purchase ROAS": "3.0",
      Frequency: "1.5",
      "CPC(all)": "0.2",
      Impressions: "1500",
      "Unique In-app content views": "300",
      "CPM(cost per 1,000 impression)": "15",
      "Unique CTR(link click through rate)": "1.2%",
      "Quality ranking": "Above average",
      "Engagement rate ranking": "High",
    },
    {
      Budget: "100",
      Action: true,
      "Campaign Name": "Campaign 1",
      Delivery: "On time",
      "Ad Set Name": "Ad Set A",
      Results: "500",
      Reach: "1000",
      "Amount Spent": "50",
      "Cost per Result": "0.1",
      "Purchases Conversion Value": "200",
      "Date Last Edited": "2023-09-01",
      "Ad ID": "AD123",
      "Purchase ROAS": "2.5",
      "Website Purchase ROAS": "3.0",
      Frequency: "1.5",
      "CPC(all)": "0.2",
      Impressions: "1500",
      "Unique In-app content views": "300",
      "CPM(cost per 1,000 impression)": "15",
      "Unique CTR(link click through rate)": "1.2%",
      "Quality ranking": "Above average",
      "Engagement rate ranking": "High",
    },
    {
      Budget: "100",
      Action: true,
      "Campaign Name": "Campaign 1",
      Delivery: "On time",
      "Ad Set Name": "Ad Set A",
      Results: "500",
      Reach: "1000",
      "Amount Spent": "50",
      "Cost per Result": "0.1",
      "Purchases Conversion Value": "200",
      "Date Last Edited": "2023-09-01",
      "Ad ID": "AD123",
      "Purchase ROAS": "2.5",
      "Website Purchase ROAS": "3.0",
      Frequency: "1.5",
      "CPC(all)": "0.2",
      Impressions: "1500",
      "Unique In-app content views": "300",
      "CPM(cost per 1,000 impression)": "15",
      "Unique CTR(link click through rate)": "1.2%",
      "Quality ranking": "Above average",
      "Engagement rate ranking": "High",
    },
    {
      Budget: "100",
      Action: true,
      "Campaign Name": "Campaign 1",
      Delivery: "On time",
      "Ad Set Name": "Ad Set A",
      Results: "500",
      Reach: "1000",
      "Amount Spent": "50",
      "Cost per Result": "0.1",
      "Purchases Conversion Value": "200",
      "Date Last Edited": "2023-09-01",
      "Ad ID": "AD123",
      "Purchase ROAS": "2.5",
      "Website Purchase ROAS": "3.0",
      Frequency: "1.5",
      "CPC(all)": "0.2",
      Impressions: "1500",
      "Unique In-app content views": "300",
      "CPM(cost per 1,000 impression)": "15",
      "Unique CTR(link click through rate)": "1.2%",
      "Quality ranking": "Above average",
      "Engagement rate ranking": "High",
    },
    {
      Budget: "100",
      Action: true,
      "Campaign Name": "Campaign 1",
      Delivery: "On time",
      "Ad Set Name": "Ad Set A",
      Results: "500",
      Reach: "1000",
      "Amount Spent": "50",
      "Cost per Result": "0.1",
      "Purchases Conversion Value": "200",
      "Date Last Edited": "2023-09-01",
      "Ad ID": "AD123",
      "Purchase ROAS": "2.5",
      "Website Purchase ROAS": "3.0",
      Frequency: "1.5",
      "CPC(all)": "0.2",
      Impressions: "1500",
      "Unique In-app content views": "300",
      "CPM(cost per 1,000 impression)": "15",
      "Unique CTR(link click through rate)": "1.2%",
      "Quality ranking": "Above average",
      "Engagement rate ranking": "High",
    },
    {
      Budget: "100",
      Action: true,
      "Campaign Name": "Campaign 1",
      Delivery: "On time",
      "Ad Set Name": "Ad Set A",
      Results: "500",
      Reach: "1000",
      "Amount Spent": "50",
      "Cost per Result": "0.1",
      "Purchases Conversion Value": "200",
      "Date Last Edited": "2023-09-01",
      "Ad ID": "AD123",
      "Purchase ROAS": "2.5",
      "Website Purchase ROAS": "3.0",
      Frequency: "1.5",
      "CPC(all)": "0.2",
      Impressions: "1500",
      "Unique In-app content views": "300",
      "CPM(cost per 1,000 impression)": "15",
      "Unique CTR(link click through rate)": "1.2%",
      "Quality ranking": "Above average",
      "Engagement rate ranking": "High",
    },
    {
      Budget: "100",
      Action: true,
      "Campaign Name": "Campaign 1",
      Delivery: "On time",
      "Ad Set Name": "Ad Set A",
      Results: "500",
      Reach: "1000",
      "Amount Spent": "50",
      "Cost per Result": "0.1",
      "Purchases Conversion Value": "200",
      "Date Last Edited": "2023-09-01",
      "Ad ID": "AD123",
      "Purchase ROAS": "2.5",
      "Website Purchase ROAS": "3.0",
      Frequency: "1.5",
      "CPC(all)": "0.2",
      Impressions: "1500",
      "Unique In-app content views": "300",
      "CPM(cost per 1,000 impression)": "15",
      "Unique CTR(link click through rate)": "1.2%",
      "Quality ranking": "Above average",
      "Engagement rate ranking": "High",
    },
    {
      Budget: "100",
      Action: true,
      "Campaign Name": "Campaign 1",
      Delivery: "On time",
      "Ad Set Name": "Ad Set A",
      Results: "500",
      Reach: "1000",
      "Amount Spent": "50",
      "Cost per Result": "0.1",
      "Purchases Conversion Value": "200",
      "Date Last Edited": "2023-09-01",
      "Ad ID": "AD123",
      "Purchase ROAS": "2.5",
      "Website Purchase ROAS": "3.0",
      Frequency: "1.5",
      "CPC(all)": "0.2",
      Impressions: "1500",
      "Unique In-app content views": "300",
      "CPM(cost per 1,000 impression)": "15",
      "Unique CTR(link click through rate)": "1.2%",
      "Quality ranking": "Above average",
      "Engagement rate ranking": "High",
    },
    {
      Budget: "100",
      Action: true,
      "Campaign Name": "Campaign 1",
      Delivery: "On time",
      "Ad Set Name": "Ad Set A",
      Results: "500",
      Reach: "1000",
      "Amount Spent": "50",
      "Cost per Result": "0.1",
      "Purchases Conversion Value": "200",
      "Date Last Edited": "2023-09-01",
      "Ad ID": "AD123",
      "Purchase ROAS": "2.5",
      "Website Purchase ROAS": "3.0",
      Frequency: "1.5",
      "CPC(all)": "0.2",
      Impressions: "1500",
      "Unique In-app content views": "300",
      "CPM(cost per 1,000 impression)": "15",
      "Unique CTR(link click through rate)": "1.2%",
      "Quality ranking": "Above average",
      "Engagement rate ranking": "High",
    },
    {
      Budget: "100",
      Action: true,
      "Campaign Name": "Campaign 1",
      Delivery: "On time",
      "Ad Set Name": "Ad Set A",
      Results: "500",
      Reach: "1000",
      "Amount Spent": "50",
      "Cost per Result": "0.1",
      "Purchases Conversion Value": "200",
      "Date Last Edited": "2023-09-01",
      "Ad ID": "AD123",
      "Purchase ROAS": "2.5",
      "Website Purchase ROAS": "3.0",
      Frequency: "1.5",
      "CPC(all)": "0.2",
      Impressions: "1500",
      "Unique In-app content views": "300",
      "CPM(cost per 1,000 impression)": "15",
      "Unique CTR(link click through rate)": "1.2%",
      "Quality ranking": "Above average",
      "Engagement rate ranking": "High",
    },
  ]);

  const filteredData = data.filter((row) =>
    columnNames.some((column) =>
      row[column]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState("");
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const isResizing = useRef(null);
  const dropdownRef = useRef(null);
  const plusIconRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

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
        {showDropdown && (
          <div
            ref={dropdownRef}
            className="absolute top-[90px] right-5 mb-3 mt-1 w-48 bg-white border rounded-md shadow-lg z-40"
          >
            <div className="p-2 font-semibold border-b">Suggested Columns</div>
            {allColumns
              .filter((col) => !columnNames.includes(col))
              .map((col) => (
                <div
                  key={col}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleAddColumn(col)}
                >
                  {col}
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
                      {name === "Action" ? (
                        <div className="flex items-center justify-center">
                          <Switch defaultChecked={true} />
                        </div>
                      ) : name === "Campaign Name" ? (
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
                      ) : name === "Budget" &&
                        isEditing &&
                        editingRowIndex === i ? (
                        <div className="flex flex-col">
                          <input
                            type="number"
                            value={editedValue}
                            onChange={(e) => setEditedValue(e.target.value)}
                            className="w-full p-1 border mb-2"
                          />
                          <div className="flex justify-between">
                            <button
                              onClick={handleSave}
                              className="bg-blue-500 text-white p-1 rounded"
                            >
                              Save
                            </button>
                            <button
                              onClick={handleCancel}
                              className="bg-red-500 text-white p-1 rounded"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : name === "Budget" ? (
                        <div
                          className="cursor-pointer"
                          onClick={() => handleEditClick(row[name], i)}
                        >
                          {row[name] || "N/A"}
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
                    style={{
                      width: 50,
                      minWidth: 30,
                    }}
                    className="border-r p-1 bg-white"
                  />
                </div>
              ))}

              <div className="flex border-t sticky bottom-0 bg-white z-20">
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
                    className="border-r p-1 bg-white font-bold"
                  >
                    {["Budget", "Results", "Reach", "Amount Spent"].includes(
                      name
                    ) && <div>Total</div>}
                  </div>
                ))}
                <div
                  style={{ width: 50, minWidth: 30 }}
                  className="border-r p-1 bg-white"
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
