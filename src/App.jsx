import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import { getItems } from "./store/features/itemsSlice";
import "./App.css";
import CardLoadingSkeloton from "./components/CardLoadingSkeloton";
import { useParams } from "react-router-dom";

function App() {
  const { items, isLoading } = useSelector((store) => store.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, []);

  return (
    <div className="flex item-center justify-center flex-wrap gap-8">
      {items[0]?.products?.map((item, key) => {
        return isLoading ? (
          <CardLoadingSkeloton key={key} />
        ) : (
          <Card key={item.id} {...item} item={item} />
        );
      })}
    </div>
  );
}

export default App;
