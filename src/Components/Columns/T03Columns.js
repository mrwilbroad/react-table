export const COLUMN = [
  {
    Header: "id",
    Footer: "id",
    accessor: "id",
    Cell: ({ value }) => {
      return value.split("-")[0];
    },
  },
  {
    Header: "Information",
    Footer: "Information",
    columns: [
      {
        Header: "File name",
        Footer: "File name",
        accessor: "filename",
      },
    ],
  },
  {
    Header: "Date",
    Footer: "Date",
    columns: [
      {
        Header: "Uploaded At",
        Footer: "Uploaded At",
        accessor: "created_at",
      },
      {
        Header: "Modified At",
        Footer: "Modified At",
        accessor: "updated_at",
      },
    ],
  },
];
