import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Line from "../../page/lineChart/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.5} mt={2}>
      <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth: "400px" }}>
        <Stack
          alignItems={"center"}
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
              fontWeight={"bold"}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342.32
            </Typography>
          </Box>

          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>

        <Line isDashboard={true} />
      </Paper>

      <Box
        sx={{
          flexGrow: 1,
          minWidth: "280px",
          maxHeight: 380,
          overflow: "auto",
        }}
      >
        <Paper>
          <Typography
            variant="h6"
            color={theme.palette.secondary.main}
            p={1.2}
            fontWeight={"bold"}
          >
            Recent Transactions
          </Typography>
        </Paper>

        {Transactions.map((item) => {
          return (
            <>
              <Paper
                sx={{
                  mt: 0.4,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box p={1.2}>
                  <Typography variant="body1">{item.txId}</Typography>
                  <Typography variant="body2">{item.user} </Typography>
                </Box>
                <Typography variant="body1">{item.date} </Typography>

                <Typography
                  borderRadius={1.4}
                  p={1}
                  bgcolor={theme.palette.error.main}
                  color={theme.palette.getContrastText(
                    theme.palette.error.main
                  )}
                  variant="body2"
                >
                  ${item.cost}
                </Typography>
              </Paper>
            </>
          );
        })}
      </Box>
    </Stack>
  );
};

export default Row2;
