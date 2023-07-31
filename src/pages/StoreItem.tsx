import { useShoppingCart } from "../context/ShoppingContext";

type StoreItemsType = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function StoreItem({ id, name, price, image }: StoreItemsType) {
  const { increaseCartQuantity } = useShoppingCart();

  const handleAddToCartButton = () => {
    increaseCartQuantity(id);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
          padding: "50px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
      >
        <div>{name}</div>
        <div>{price}</div>
        <div>
          <img src={image} alt="temp" />
        </div>
        <button onClick={handleAddToCartButton} style={{ cursor: "pointer" }}>
          Add to cart
        </button>
      </div>
    </>
  );
}
