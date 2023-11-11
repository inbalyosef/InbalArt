import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PaletteIcon from "@mui/icons-material/Palette";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import { makeStyles } from "@mui/styles";

const tabs = ["gallery", "shoes", "contact", "about"];

const useStyles = makeStyles((theme) => ({
  selectedTab: {
    fontWeight: 800,
    fontSize: 16,
    marginTop: -2
  },
}));

function ResponsiveAppBar() {
  const classes = useStyles();

  const [tabIndex, setTabIndex] = useState(0);
  const navigate = useNavigate();

  const handleChangeIndex = (index) => {
    setTabIndex(index);
  };

  useEffect(() => {
    navigate(tabs[tabIndex]);
  }, [tabIndex, navigate]);

  return (
    <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
      <AppBar
        sx={{ backgroundColor: "#212121", height: 60 }}
        className="muiLabe"
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%"}}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              xs={2}
              container
              direction="row"
              justifyContent="right"
              alignItems="center"
              sx={{ ml: '15%' }}
            >
              <Grid item xs={0.5} alignItems="end" justifyContent="end">
                <PaletteIcon
                  sx={{ display: { xs: "none", md: "flex" }}}
                />
              </Grid>

              <Grid item xs={7}  >
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    ml: 3,    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  INBAL
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} container direction="row">
              <Tabs
                centered
                value={tabIndex}
                onChange={(event, value) => handleChangeIndex(value)}
                indicatorColor="error"
              >
                {tabs.map((tab, i) => (
                  <Tab
                    value={i}
                    key={i}
                    label={
                      <span
                        style={{
                          my: 2,
                          mx: 1.5,
                          color: "white",
                          display: "block",
                        }}
                        className={tabIndex === i ? classes.selectedTab : ""}
                      >
                        {tab}
                      </span>
                    }
                  />
                ))}
              </Tabs>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}
export default ResponsiveAppBar;
