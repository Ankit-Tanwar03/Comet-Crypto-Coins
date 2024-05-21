import { React, useState, useEffect } from "react";

function Hero() {
  const [data, setData] = useState([]);
  const [loadCoin, setLoadCoin] = useState(true);

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
    <>
      <div
        className="min-h-screen xl:h-screen bg-gradient-to-b from-slate-900 to-black pt-24 pb-8 xl:pb-0"
        id="hero"
      >
        <div className="flex flex-col justify-center items-center h-full px-4">
          <h1 className="text-white text-center text-4xl md:text-6xl">
            Track and Trade
            <span className="text-lime-400 block">Your Crypto Currencies</span>
          </h1>

          {loadCoin && (
            <span className="w-10 h-10 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin mt-24"></span>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 w-full pt-10 md:pt-20">
            {data.map((currency) => (
              <div
                onLoad={() => setLoadCoin(false)}
                key={currency?.id}
                className="w-full max-w-xs mx-auto border-hidden shadow-[0px_30px_40px_-40px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)] shadow-cyan-400 hover:shadow-lime-400 duration-300 hover:scale-105 rounded-lg p-4 animate"
              >
                <img
                  src={currency?.image}
                  alt={currency?.name}
                  className="w-20 md:w-32"
                />
                <p className="text-blue-500 text-xl md:text-2xl pt-2 text-center">
                  {currency?.name}
                </p>
                <p className="text-white text-center">
                  {"$" + numberWithCommas(currency.current_price?.toFixed(2))}
                </p>
                <p
                  className={`text-center font-semibold text-lg md:text-xl ${
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
    </>
  );
}

export default Hero;
