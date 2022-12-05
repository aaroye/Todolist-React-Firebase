import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Button, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { SignOut } from "../firebase/utils";
const NavBar = ({
  isLogin,
  isLoading,
}: {
  isLogin: boolean;
  isLoading: boolean;
}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Web
        </Typography>
        <Stack direction="row" spacing={2}>
          {!isLoading && (
            <Button color="inherit" href="/">
              Home
            </Button>
          )}
          {!isLoading && !isLogin && (
            <Button color="inherit" href="/login">
              Login
            </Button>
          )}
          {!isLoading && isLogin && (
            <Button color="inherit" onClick={SignOut}>
              Sign Out
            </Button>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
