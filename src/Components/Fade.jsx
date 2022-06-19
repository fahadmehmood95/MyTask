import * as React from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Fade from "@mui/material/Fade";
import FormControlLabel from "@mui/material/FormControlLabel";
import DataGridDemo from "./DataGrid";
import { useMemo } from "react";
import { width } from "@mui/system";

const ShowGrid = (memoizedData) => {
  return (
    <Paper sx={{ m: 1, width: 400 }}>
      <DataGridDemo
        spacing={0}
        align="center"
        justify="center"
        direction="column"
        memoizedData={memoizedData}
      ></DataGridDemo>
    </Paper>
  );
};

export default function SimpleFade(props) {
  const [checked, setChecked] = React.useState(false);
  const { data, isLoading } = props;
  const memoizedData = useMemo(() => (data ? data.data : []), [data]);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Fade in={checked} align="center">
          {ShowGrid(memoizedData)}
        </Fade>
      </Box>
    </Box>
  );
}
