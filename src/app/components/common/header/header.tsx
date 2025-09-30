import React from "react";
import Image from "next/image";

import { Menu } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";

import { CartLogo } from "@/app/assets/images/cart";
import Logo from "@/app/assets/images/header-logo.png";

export const Header = () => {
  return (
    <AppBar position="fixed" elevation={0} sx={{ bgcolor: "white", borderBottom: "1px solid #eee" }}>
      <Toolbar component={Container}>
        <IconButton size="large" edge="start" aria-label="menu">
          <Menu />
        </IconButton>
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <Image src={Logo.src} width={Logo.width} height={Logo.height} alt="مردادینو" />
        </Box>
        <IconButton size="large" aria-label="cart">
          <Badge
            badgeContent={1}
            color="primary"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <CartLogo sx={{ fontSize: 28 }} />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
