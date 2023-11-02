import React, { useMemo } from "react";
import { useTable } from "react-table";
import FILESDATA from "../Data/files.json";
import { COLUMN } from "./Columns/T02Columns";
import { Table } from "react-bootstrap";

const T02Basictable = () => {
  const Columns = useMemo(() => COLUMN, []);
  const DATA = useMemo(() => FILESDATA, []);

  const TableInstance = useTable({
    columns: Columns,
    data: DATA,
  });

  const {
    getTableProps,
    footerGroups,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = TableInstance;

  return (
    <div className="my-4">
      <Table striped bordered responsive hover {...getTableProps()}>
        <thead className="table-dark">
          {headerGroups.map((headergroup) => (
            <tr {...headergroup.getHeaderGroupProps()}>
              {headergroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot className="table-dark">
          {footerGroups.map((footergroup) => (
            <tr {...footergroup.getFooterGroupProps()}>
              {footergroup.headers.map((column) => (
                <th {...column.getFooterProps()}>{column.render("Footer")}</th>
              ))}
            </tr>
          ))}
        </tfoot>
      </Table>
    </div>
  );
};

export default T02Basictable;
