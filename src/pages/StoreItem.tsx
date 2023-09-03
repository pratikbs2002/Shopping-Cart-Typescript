import { useShoppingCart } from "../context/ShoppingContext";

type StoreItemsType = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function StoreItem({ id, name, price, image }: StoreItemsType) {
  const { addItemToCart } = useShoppingCart();

  const handleAddToCartButton = () => {
    addItemToCart(id, price, name, image);
  };

  return (
    <>
      <div
        style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px", backgroundColor: "#ffffff", borderRadius: "10px", border: "1px solid #c9c7c1", height: "300px", width: "200px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
            padding: "20px",
          }}
        >
          <div>{name}</div>
          <div>
            <img src={image} alt="temp" width={"150px"} height={"150px"} style={{ border: "0.1px solid #c9c7c1", borderRadius: "10px", }} />
          </div>
          <div>${price}</div>
          <button onClick={handleAddToCartButton}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ff5e00",
              color: " #ffffff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
