import React, { useRef, useState } from "react";
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
    },
  ]);

  const filteredData = data.filter((row) =>
    columnNames.some((column) =>
      row[column]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const isResizing = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

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

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className="overflow-auto bg-[#f2f2f2] px-3 h-[85vh] w-full"
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

        <div className="border-b overflow-auto max-h-[400px] rounded-t-md">
          <div className="min-w-max relative">
            <div className="flex font-bold">
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
              >
                +
                {showDropdown && (
                  <div className="absolute top-[100%] left-[-150px] mt-1 w-48 bg-white border rounded-md shadow-lg z-10">
                    <div className="p-2 font-semibold border-b">
                      Suggested Columns
                    </div>
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
                      ) : (
                        row[name] || "N/A"
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
            </div>

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
                  {name === "Action" && (
                    <div className="flex justify-center">Total</div>
                  )}
                  {name === "Budget" && <div>Total</div>}
                  {name === "Results" && <div>Total</div>}
                  {name === "Reach" && <div>Total</div>}
                  {name === "Amount Spent" && <div>Total</div>}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableForFacebook;

