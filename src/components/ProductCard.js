import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1">${product.price.toFixed(2)}</Typography>
      </CardContent>
      <Button variant="contained">Add to Cart</Button>
    </Card>
  );
}
