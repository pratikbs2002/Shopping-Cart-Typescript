import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type ShoppingContextProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
  price: number;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  addItemToCart: (id: number, price: number, name: string, image: object) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  cartItems: CartItem[];
  totalAmount: number;
  cartQuantity: number;
  openCart: () => void;
  closeCart: () => void;
  isOpen: boolean;
};

const ShoppingContext = createContext({} as ShoppingCartContext);

export function useShoppingCart(): ShoppingCartContext {
  return useContext(ShoppingContext);
}

export function ShoppingContextProvider({
  children,
}: ShoppingContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const totalAmount: number = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const cartQuantity: number = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id: number): number {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function addItemToCart(id: number, price: number, name: string, image: object): void {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === id);

      if (existingItem == null) {
        // Item doesn't exist in the cart, so add it with a quantity of 1
        return [...currentItems, { id, quantity: 1, price, name, image }];
      } else {
        // Item already exists in the cart, so increment its quantity
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function increaseCartQuantity(id: number): void {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1, price: 0 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number): void {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number): void {
    setCartItems((currentItem) => {
      return currentItem.filter((item) => item.id !== id);
    });
  }

  function clearCart(): void {
    setCartItems([]);
  }

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const contextValue: ShoppingCartContext = {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    clearCart,
    cartItems,
    cartQuantity,
    openCart,
    closeCart,
    isOpen,
    totalAmount,
    addItemToCart,
  };

  return (
    <ShoppingContext.Provider value={contextValue}>
      {children}
    </ShoppingContext.Provider>
  );
}