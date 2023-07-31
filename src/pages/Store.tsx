import Cart from "../components/Cart";
import { useShoppingCart } from "../context/ShoppingContext";
import storeItems from "../data/items.json";
import StoreItem from "./StoreItem";

export default function Store() {
  const data = useShoppingCart();
  console.log(data.cartItems);

  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "100px",
          width: "100%",
        }}
      >
        {storeItems.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </div>
      <div>
        <Cart />
      </div>
    </>
  );
}
