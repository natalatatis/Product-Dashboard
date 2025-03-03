//this will dislay our shopping cart, the name of the product, the price
//and it also has a remove item button if we want to get rid of any of the items
//inside the cart and "-" "+" buttons to add or remove quantities

import { useCart } from "../context/CartContext";
import { Typography, Button, Card, CardContent } from "@mui/material";

export default function Cart() {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4">Shopping Cart</Typography>
      {cart.length === 0 ? (
        <Typography variant="h6" sx={{ mt: 2 }}>
          Your cart is empty.
        </Typography>
      ) : (
        cart.map((product) => (
          <Card key={product.id} sx={{ maxWidth: 400, mt: 2, padding: 2 }}>
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body1">
                Price: ${product.price.toFixed(2)}
              </Typography>
              <Typography variant="body1">
                Quantity: {product.quantity}
              </Typography>
              <Button
                variant="contained"
                onClick={() => removeFromCart(product.id)}
                sx={{ m: 1 }}
              >
                -
              </Button>
              <Button
                variant="contained"
                onClick={() => addToCart(product)}
                sx={{ m: 1 }}
              >
                +
              </Button>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
