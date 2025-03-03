//This will show when we enter the product details
//It'll take the data from products.js
//We'll be able to go back home with an arrow button

import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import products from "../data/products";

export default function ProductDetail() {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  //If the product is not found
  if (!product) {
    return <Typography variant="h4">Product not found</Typography>;
  }

  return (
    <Card sx={{ maxWidth: 500, margin: "auto", mt: 5, padding: 2 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/")}
        sx={{ mb: 2 }}
      ></Button>
      <CardMedia
        component="img"
        height="300"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h4">{product.name}</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Price: ${product.price.toFixed(2)}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {product.description}
        </Typography>
      </CardContent>
      <Button variant="contained" sx={{ m: 2 }}>
        Add to Cart
      </Button>
    </Card>
  );
}
