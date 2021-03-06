import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

// styles
import "./NavBar.scss";

function NavBar() {
  let navigate = useNavigate();

  const pages = [
    { title: "Global Overview", link: "/global-overview" },
    { title: "Local Covid Testing", link: "/sri-lanka-covid-testing-info" },
  ];

  function appBarLabel(label: string) {
    return (
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 800,
            letterSpacing: ".15rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          COVID STATS
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page.title}
              onClick={() => {
                handleCloseNavMenu(page.link);
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {page.title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    );
  }

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  const handleCloseNavMenu = (link: string) => {
    navigate(link);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary" enableColorOnDark={false}>
        {appBarLabel("enableColorOnDark")}
      </AppBar>
    </ThemeProvider>
  );
}

export default NavBar;
