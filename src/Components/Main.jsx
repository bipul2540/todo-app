import React from "react";
import "./main.css";

function Main({ item }) {
  return (
    <div className="main-container">
      <div className="main">
        <div className="content">
          <div className="symbol">
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
          </div>
          <h2 className="item_symbol">{item.symbol}</h2>
          <h2 className="market_cap_rank">{item.market_cap_rank}</h2>
          {item.price_change_percentage_24h < 0 ? (
            <h2 className="price_change_percentage_24h red">
              {item.price_change_percentage_24h.toFixed(2)}%
            </h2>
          ) : (
            <h2 className="price_change_percentage_24h">
              {item.price_change_percentage_24h.toFixed(2)}%
            </h2>
          )}
          <h2 className="market_cap">${item.market_cap.toLocaleString()}</h2>
          <h2 className="last_upadted">{item.last_updated}</h2>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Main;
