import { Typography, Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import products from "../data/products";

export default function ProductList() {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6">Browse Cubes</Typography>
      <Grid
        container
        rowSpacing={4}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ mt: 2 }}
      >
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
