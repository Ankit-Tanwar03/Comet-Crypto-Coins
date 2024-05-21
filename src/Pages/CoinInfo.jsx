import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

function CoinInfo() {
  const [data, setData] = useState({});
  const [loadCoin, setLoadCoin] = useState(true);

  const { coinId } = useParams();
  console.log(coinId);
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error!");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  const numberWithCommas = (x) => {
    console.log(x);
    return x ? x.toLocaleString() : "N/A";
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black pt-24">
        <h1 className="text-white text-center text-4xl sm:text-5xl md:text-6xl pb-12">
          About <span className="text-lime-400 ">{data?.name}</span>
        </h1>
        <div
          onLoad={() => setLoadCoin(false)}
          className="flex flex-col md:flex-row w-full justify-center items-center pb-6 md:px-12 px-6"
        >
          <div className="md:w-1/2 w-full flex flex-col md:items-center justify-start pb-6 md:py-0">
            {loadCoin && (
              <span className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></span>
            )}
            <img
              src={data?.image?.large}
              alt={data?.name}
              className="w-24 sm:w-32 md:w-48 pb-2"
            />
            <h2 className="text-cyan-400 text-3xl font-bold pt-2 pb-6">
              {data?.name}
            </h2>
            <div className="text-left">
              <p className="text-white text-sm sm:text-lg pb-2">
                <span className="text-lime-400  font-semibold pr-1">
                  Current Price:{" "}
                </span>
                {"$" + numberWithCommas(data?.market_data?.current_price?.usd)}
              </p>
              <p className="text-white text-sm sm:text-lg pb-2">
                <span className="text-lime-400  font-semibold pr-1">
                  Market Capitalization:{" "}
                </span>
                {"$" + numberWithCommas(data?.market_data?.market_cap?.usd)}
              </p>
              <p
                className={` pb-2 text-sm sm:text-lg ${
                  data?.market_data?.price_change_percentage_24h < 0
                    ? "text-red"
                    : "text-green"
                }`}
              >
                <span className="text-lime-400 font-semibold pr-1">
                  24H Change:{" "}
                </span>
                {numberWithCommas(
                  data?.market_data?.price_change_percentage_24h.toFixed(2)
                ) + " %"}
              </p>
              <div className="flex text-sm sm:text-lg">
                <p className="text-lime-400 font-semibold pr-3 md:pr-1 pb-2">
                  Market Sentiment:
                </p>
                <div className="flex">
                  <p className="text-green pr-3 md:px-3 ">
                    <FontAwesomeIcon icon={faThumbsUp} className="pr-1" />
                    {data?.sentiment_votes_up_percentage} %
                  </p>
                  <p className="text-red pr-3 md:px-3 ">
                    <FontAwesomeIcon icon={faThumbsDown} className="pr-1" />
                    {data?.sentiment_votes_down_percentage} %
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            {loadCoin && (
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
            )}
            <p
              className="text-white"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  data.description ? data?.description?.en : ""
                ),
              }}
            ></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoinInfo;
