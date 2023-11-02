import React, { useMemo } from "react";
import {
  useSortBy,
  useTable,
  useGlobalFilter,
  usePagination,
} from "react-table";
import FILESDATA from "../Data/files.json";
import { COLUMN } from "./Columns/T03Columns";
import { Table } from "react-bootstrap";
import GlobalFiltering from "./Columns/GlobalFiltering";
import { Pagination } from "react-bootstrap";

const T05Basictable = () => {
  const Columns = useMemo(() => COLUMN, []);
  const DATA = useMemo(() => FILESDATA, []);

  const TableInstance = useTable(
    {
      columns: Columns,
      data: DATA,
      initialState: { pageIndex: 0, Pagination: 1 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    setPageSize,
  } = TableInstance;
  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div className="my-4">
      <h5 className="my-2 text-danger">
        <i>Pagination Functionality</i>
      </h5>

      <section>
        <section className="d-flex justify-content-end gap-2 ms-auto my-2">
          <section>
            <select
              class="form-select"
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[2, 5, 10].map((p) => (
                <option value={p} key={p}>
                  Show {p}
                </option>
              ))}
            </select>
          </section>
          <GlobalFiltering filter={globalFilter} setFilter={setGlobalFilter} />
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
            {page.map((row) => {
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
        </Table>
        <section className=" vstack text-center">
          <Pagination className="justify-content-end">
            <Pagination.Prev
              disabled={!canPreviousPage}
              as="button"
              onClick={() => previousPage()}
            />
            {pageOptions.map((opt, index) => (
              <React.Fragment key={index}>
                {opt ? (
                  <Pagination.Item as="button" onClick={() => gotoPage(opt)}>
                    {opt + 1}
                  </Pagination.Item>
                ) : (
                  <Pagination.Ellipsis />
                )}
              </React.Fragment>
            ))}
            <Pagination.Next
              disabled={!canNextPage}
              as="button"
              onClick={() => nextPage()}
            />
          </Pagination>

          <section className="text-center">
            <p className="text-end fs-5">
              {" "}
              Page {pageIndex + 1} of <strong>{pageOptions.length}</strong>
            </p>
          </section>
        </section>
      </section>
    </div>
  );
};

export default T05Basictable;
