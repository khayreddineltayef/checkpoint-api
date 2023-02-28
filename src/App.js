import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CardFood from "./components/CardFood";
import Spin from "./components/Spin";
import { fetech } from "./redux/actions";

function App() {
  const [text, setText] = useState("");
  const { data, loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  const options = {
    method: "GET",
    url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
    params: { ingr: text },
    headers: {
      "X-RapidAPI-Key": "1d43f6835amshc4c0505e98d9021p19ac0bjsn6a86b14a33b0",
      "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
    },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetech(options));
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">GET FOOD</button>
      </form>
      {loading ? (
        <Spin />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {data.map((el, i) => (
            <div key={i}>
              <CardFood el={el} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
