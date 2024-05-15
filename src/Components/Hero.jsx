import { React, useState, useEffect } from "react";

function Hero() {
  const [data, setData] = useState([]);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false
    `;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error!");
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="h-screen bg-gradient-to-b from-slate-800 to-black pt-24">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-white text-center text-6xl">
          Track and Trade
          <span className="text-lime-400 block"> Your Crypto Currencies</span>
        </h1>

        <div className="flex items-center justify-center w-full flex-wrap pt-20">
          {data.map((currency) => (
            <div
              key={currency?.id}
              className="mx-16 w-60 border-hidden shadow-[0px_30px_40px_-40px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center shadow-lime-400 rounded-lg px-4 py-4 animate"
            >
              <img
                src={currency?.image}
                alt={currency?.name}
                className="w-32"
              />
              <p className="text-blue-500 text-2xl pt-2 text-center">
                {currency?.name}
              </p>
              <p className="text-white text-center">
                {"$" + numberWithCommas(currency.current_price?.toFixed(2))}
              </p>
              <p
                className={`text-center font-semibold text-xl ${
                  currency?.price_change_percentage_24h < 0
                    ? "text-red"
                    : "text-green"
                }`}
              >
                {numberWithCommas(
                  currency?.price_change_percentage_24h.toFixed(2)
                ) + "%"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
