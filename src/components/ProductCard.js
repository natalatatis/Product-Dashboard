//These are the cards for the products, all cards will contain an image
//, the product name a details button and an add to cart button

import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1">${product.price.toFixed(2)}</Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px",
        }}
      >
        <Button
          component={Link}
          to={`/product/${product.id}`}
          variant="contained"
          size="small"
        >
          View Details
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
