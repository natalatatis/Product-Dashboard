import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const products = [
  { id: 1, name: "MoYu RS3M 2020", price: 8.99 },
  {
    id: 2,
    name: "MoYu WeiLong WRM V9 3x3 (20-Magnet Ball-Core + MagLev + UV)",
    price: 47.99,
  },
  {
    id: 3,
    name: "MoYu Super WeiLong 3x3 V2 (20-Magnet Ball-Core + MagLev + UV)",
    price: 81.99,
  },
  { id: 4, name: "GAN15 MagLev UV 3x3", price: 69.99 },
  {
    id: 5,
    name: "GAN14 MagLev Pro Aurora 3x3 (Limited Edition)",
    price: 99.99,
  },
  { id: 6, name: "YuXin Little Magic", price: 5.99 },
  { id: 7, name: "Dayan GuHong Pro M 3x3 55mm (MagLev)", price: 19.99 },
  { id: 8, name: "Ex-Mars Cube 3x3", price: 99.99 },
  { id: 9, name: "Gan Robot", price: 74.99 },
  { id: 10, name: "MoYu 21x21", price: 1499.99 },
];

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Rubik's Cubes
          </Link>
        </Typography>
        <IconButton color="inherit" component={Link} to="/cart">
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
export default function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}
