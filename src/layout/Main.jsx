import { Box } from "@mui/material";
import Navigation from "../Components/SingleCard/Singlecard";
import Footer from "../Components/Footer/Footer";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

const appBoxStyle = {
  backgroundColor: "#4a4e69",
  minHeight: "100vh",
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  placeContent: "center",
};

function Main() {
  return (
    <Box className="App" sx={appBoxStyle}>
      <Navigation></Navigation>
      <Grid container>
        <Outlet style={{ marginBottom: 0 }} />
      </Grid>
      <Footer></Footer>
    </Box>
  );
}

export default Main;