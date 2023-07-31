import storeItems from "../data/items.json";
import StoreItem from "./StoreItem";

export default function Store() {
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
    </>
  );
}
