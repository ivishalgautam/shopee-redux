import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import { getItems } from "./store/features/itemsSlice";
import "./App.css";
import { getCartItems } from "./store/features/cartSlice";

function App() {
  const { items, isPending } = useSelector((store) => store.items);
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
    dispatch(getCartItems());
  }, []);

  if (isPending) {
    return <h1 className="text-2xl text-gray-400">loading...</h1>;
  }
  return (
    <div className="flex item-center justify-center flex-wrap gap-8">
      {items[0]?.products?.map((item) => {
        return <Card key={item.id} {...item} item={item} />;
      })}
    </div>
  );
}

export default App;
