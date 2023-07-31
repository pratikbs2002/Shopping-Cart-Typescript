import {
  ShoppingContextProvider,
  useShoppingCart,
} from "./context/ShoppingContext";
import Store from "./pages/Store";

export default function App() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <>
      <ShoppingContextProvider>
        <Store />
      </ShoppingContextProvider>
    </>
  );
}
