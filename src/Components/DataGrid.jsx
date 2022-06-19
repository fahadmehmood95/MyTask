import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useMemo } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Items",
    width: 150,
    editable: true,
  },
];

export default function DataGridDemo(props) {
  const { memoizedData } = props;
  const [gridData, setGridData] = React.useState({});

  React.useEffect(() => {
    setGridData(memoizedData);
  }, [memoizedData]);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={gridData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}
