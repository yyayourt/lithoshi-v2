/* eslint-disable react/prop-types */
// src/components/SortableTable.js
//import React from "react";
import arrowUp from "../assets/Dashboard/token/arrow-up-solid.svg";
import arrowDown from "../assets/Dashboard/token/arrow-down-solid.svg";

const SortableTable = ({ data, columns, onSort, sortConfig, onRowClick }) => {
    const handleSort = (column) => {
        onSort(column);
    };

    return (
        <table className="w-full">
            <thead>
                <tr className="bg-[#151516]">
                    {columns.map((column) => (
                        <th key={column.key} onClick={() => handleSort(column.key)} className="cursor-pointer text-left pl-10 py-2 w-[12%]">
                            {column.label}
                            {sortConfig.key === column.key && (
                                <img
                                    src={sortConfig.direction === "ascending" ? arrowUp : arrowDown}
                                    alt={sortConfig.direction === "ascending" ? "Ascending" : "Descending"}
                                    className="inline-block ml-2 w-3 h-3"
                                />
                            )}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <tr
                            className="border-t border-t-[#151516] cursor-pointer"
                            key={index}
                            onClick={() => onRowClick(item)} // Attach handleRowClick to the row
                        >
                            {columns.map((column) => (
                                <td key={column.key} className="pl-10 py-4">
                                    {column.render ? column.render(item[column.key], item) : item[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={columns.length}>Aucune donnée disponible</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default SortableTable;
