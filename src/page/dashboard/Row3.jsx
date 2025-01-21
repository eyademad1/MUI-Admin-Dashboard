import { Paper, useTheme, Typography, Stack } from "@mui/material";
import Pie from "../../page/pieChart/pie";
import Bar from "../../page/barChart/bar";
import Geo from "../../page/geography/geo";

const Row3 = () => {
  const theme = useTheme();

  return (
    <Stack gap={1.5} direction={"row"} mt={2} flexWrap={"wrap"}>
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "28%" }}>
        <Typography
          variant="h6"
          color={theme.palette.secondary.main}
          fontWeight="600px"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Campaign
        </Typography>
        <Pie isDashboard={true} />
        <Typography align="center" variant="h6" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography align="center" variant="body2" px={0.7} pb={3}>
          Include extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <Typography
          variant="h6"
          color={theme.palette.secondary.main}
          fontWeight="600px"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>

        <Bar isDashboard ={true}/>
      </Paper>

      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        
        
        <Geo isDashboard={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;
