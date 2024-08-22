import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockPricing } from "../../data/mockData";
import Header from "../../components/Header";

const Pricing = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "userContentID", headerName: "Content ID" },
    {
      field: "user",
      headerName: "User",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "imageName", headerName: "Image", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    {
      field: "cost",
      headerName: "Price",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="Pricing" subtitle="Active Transactions" />
      <Box
        m="40px 0 0 0"
        height={"75vh"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockPricing} columns={columns} />
      </Box>
    </Box>
  );
};

export default Pricing;
