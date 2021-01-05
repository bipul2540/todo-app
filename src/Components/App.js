import React, { useEffect, useState } from "react";
import Main from "./Main";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    );

    const data = await response.json();
    console.log(data);
    setItems(data);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };

  const filterItem = items.filter((item) => {
    return item.name.toLowerCase().includes(search.toLocaleLowerCase());
  });
  return (
    <div className="App">
      <form action="" className="fa-search">
        <h1>search currency</h1>
        <input type="text" value={search} onChange={handleChange} />
      </form>

      {filterItem.map((item) => {
        return <Main key={item.id} item={item} />;
      })}
    </div>
  );
}

export default App;
