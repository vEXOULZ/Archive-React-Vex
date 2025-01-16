import React from "react";
import { AppBar, Toolbar, Typography, useMediaQuery, Box, Divider } from "@mui/material";
import Logo from "../assets/logo.webp";
import CustomLink from "../utils/CustomLink";
import Drawer from "./drawer";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ReportIcon from "@mui/icons-material/Report";

const socials = [];

export default function Navbar(props) {
  const { channel } = props;
  const isMobile = useMediaQuery("(max-width: 800px)");

  return (
    <Box sx={{ flex: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
            {isMobile && <Drawer socials={socials} />}

            <Box sx={{ mr: 2 }}>
              <a href="/">
                <img alt="" style={{ maxWidth: "45px", height: "auto" }} src={Logo} />
              </a>
            </Box>

            <Typography variant="h6" component="div">
              <CustomLink color="inherit" href="/">
                <Typography color="primary" variant="h6">
                  {channel}
                </Typography>
              </CustomLink>
            </Typography>

            {!isMobile && (
              <>
                <Divider orientation="vertical" flexItem variant="middle" sx={{ ml: 1, mr: 1 }} />

                {socials.map(({ path, icon }) => (
                  <Box key={path} sx={{ mr: 2 }}>
                    <CustomLink href={path} rel="noopener noreferrer" target="_blank">
                      {icon}
                    </CustomLink>
                  </Box>
                ))}
              </>
            )}
          </Box>

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
              <Box sx={{ mr: 2 }}>
                <CustomLink href="http://vods.vexoulz.net/">
                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <OndemandVideoIcon color="primary" sx={{ mr: 0.5 }} />
                    <Typography color="primary" variant="h6">
                      Vods
                    </Typography>
                  </Box>
                </CustomLink>
              </Box>
            </Box>
          )}

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
              <Box sx={{ mr: 2 }}>
                <CustomLink href="http://shop.vexoulz.net/">
                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <ShoppingBagIcon color="primary" sx={{ mr: 0.5 }} />
                    <Typography color="primary" variant="h6">
                      Shop
                    </Typography>
                  </Box>
                </CustomLink>
              </Box>
            </Box>
          )}

          {!isMobile && (
            <Box sx={{ display: "flex", justifyContent: "end", flex: 1 }}>
              <Box sx={{ mr: 2 }}>
                <CustomLink href={`${process.env.REACT_APP_GITHUB}/issues`} rel="noopener noreferrer" target="_blank">
                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <ReportIcon color="primary" sx={{ mr: 0.5 }} />
                    <Typography color="primary" variant="h6">
                      Issues
                    </Typography>
                  </Box>
                </CustomLink>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
