import React, { useMemo } from "react";
import { useSortBy, useTable , useGlobalFilter} from "react-table";
import FILESDATA from "../Data/files.json";
import { COLUMN } from "./Columns/T03Columns";
import { Table } from "react-bootstrap";
import GlobalFiltering from "./Columns/GlobalFiltering";


const T04Basictable = () => {
  const Columns = useMemo(() => COLUMN, []);
  const DATA = useMemo(() => FILESDATA, []);

  const TableInstance = useTable(
    {
      columns: Columns,
      data: DATA,
    },
    useGlobalFilter,useSortBy
  );

  const {
    getTableProps,
    footerGroups,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter
  } = TableInstance;
  const {globalFilter} = state;

  return (
    <div className="my-4">
      <h5 className="my-2 text-danger">
        <i>Global Filtering </i>
      </h5>

     
    <section>
       <section className="col-lg-5 col-md-5 ms-auto my-2">
       <GlobalFiltering filter={globalFilter} setFilter={setGlobalFilter}/>
       </section>
    <Table striped bordered responsive hover {...getTableProps()}>
        <thead className="table-dark">
          {headerGroups.map((headergroup) => (
            <tr {...headergroup.getHeaderGroupProps()}>
              {headergroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span className="px-1">
                    {column.isSorted
                      ? column.isSortedDesc
                        ? "DESC"
                        : "ASC"
                      : ""}
                  </span>
                </th>
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
    </section>
    </div>
  );
};

export default T04Basictable;
