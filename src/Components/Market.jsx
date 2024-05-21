// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
// import Coin from "../assets/MarketUpdate/Coin.png";
// import { Link } from "react-router-dom";

// function CryptoSection({ data }) {
//   const [loadCoin, setLoadCoin] = useState(true);

//   const numberWithCommas = (x) => {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   };

//   return (
//     <div className="mt-8 mx-20">
//       <div className="flex items-center justify-start bg-neutral-950 border-lime-400 border-y p-1 mb-4 shadow-lime-400 shadow-[0px_10px_40px_-15px_rgba(0,0,0,0.3)]">
//         <h1 className="text-xl font-semibold text-white w-1/4 text-left ml-0">
//           <img src={Coin} alt="Coin" className="w-5 inline mx-5" />
//           Coin
//         </h1>
//         <h1 className="text-xl font-semibold text-white w-1/4 text-right mr-10">
//           Price
//         </h1>
//         <h1 className="text-xl font-semibold text-white w-1/4 text-right mr-10">
//           24h Change
//         </h1>
//         <h1 className="text-xl font-semibold text-white w-1/4 text-right mr-10">
//           Market Capitalization
//         </h1>
//       </div>
//       <div className="flex items-center justify-center">
//         {loadCoin && (
//           <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
//         )}
//       </div>

//       {data.map((crypto, index) => (
//         <Link to={`/coininfo/${crypto?.id}`}>
//           <div
//             onLoad={() => setLoadCoin(false)}
//             key={index}
//             className="flex items-center justify-start bg-gray-800 cursor-pointer p-1 mb-2 rounded-md hover:bg-gradient-to-b hover:from-slate-700 transition-all ease-in-out duration-100 hover:to-black"
//           >
//             <div className="w-1/4">
//               <h2 className="text-xl font-semibold text-white">
//                 <img
//                   src={crypto?.image}
//                   alt={crypto?.name}
//                   className="w-5 inline mx-5"
//                 />
//                 {crypto?.name}
//               </h2>
//             </div>
//             <div className="w-1/4 mr-10">
//               <p className="text-lime-400 text-right text-lg ">
//                 {"$ " + numberWithCommas(crypto?.current_price?.toFixed(2))}
//               </p>
//             </div>
//             <div className="w-1/4 mr-10">
//               <p
//                 className={`text-${
//                   crypto?.price_change_percentage_24h > 0 ? "green" : "red"
//                 } text-right text-lg `}
//               >
//                 {numberWithCommas(
//                   crypto?.price_change_percentage_24h.toFixed(2)
//                 ) + "%"}

//                 {crypto?.price_change_percentage_24h > 0 ? (
//                   <FontAwesomeIcon icon={faCaretUp} className="ml-2" />
//                 ) : (
//                   <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
//                 )}
//               </p>
//             </div>
//             <div className="w-1/4 mr-10">
//               <p className="text-cyan-400 text-right text-lg ">
//                 {"$ " + numberWithCommas(crypto?.market_cap)}
//               </p>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// }

// function PaginationButtons({ totalPages, setCurrentPage }) {
//   const buttons = [];
//   for (let i = 1; i <= totalPages; i++) {
//     buttons.push(
//       <button
//         key={i}
//         className="w-10 my-5 mx-2 px-2 py-2 bg-gradient-to-b from-lime-400 to-lime-950 hover:from-white hover:to-blue-950 hover:scale-105 font-semibold text-white text-center rounded-full"
//         onClick={() => setCurrentPage(i)}
//       >
//         {i}
//       </button>
//     );
//   }
//   return <div className="flex justify-center">{buttons}</div>;
// }

// function Market() {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const entriesPerPage = 10;
//   const totalPages = Math.ceil(data.length / entriesPerPage);
//   const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
//   `;
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error("Error!");
//         }
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [url]);

//   const startIndex = (currentPage - 1) * entriesPerPage;
//   const endIndex = currentPage * entriesPerPage;
//   const currentData = data.slice(startIndex, endIndex);

//   return (
//     <div
//       className=" mx-auto bg-gradient-to-b from-black to-slate-900 pt-16"
//       id="market"
//     >
//       <h1 className="text-6xl mb-4 text-white text-center">
//         Market <span className="text-lime-400">Update</span>
//       </h1>
//       <CryptoSection data={currentData} />
//       <PaginationButtons
//         totalPages={totalPages}
//         setCurrentPage={setCurrentPage}
//       />
//     </div>
//   );
// }

// export default Market;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Coin from "../assets/MarketUpdate/Coin.png";
import { Link } from "react-router-dom";

function CryptoSection({ data }) {
  const [loadCoin, setLoadCoin] = useState(true);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="mt-8 px-4 md:px-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 items-center bg-neutral-950 border-lime-400 border-y p-1 mb-4 shadow-lime-400 shadow-[0px_10px_40px_-15px_rgba(0,0,0,0.3)]">
        <h1 className="text-base lg:text-xl font-semibold text-white text-left ml-0">
          <img src={Coin} alt="Coin" className="w-5 inline mx-2 lg:mx-5" />
          Coin
        </h1>
        <h1 className="text-base lg:text-xl font-semibold text-white text-right mx-2 lg:mx-0">
          Price
        </h1>
        <h1 className="text-base lg:text-xl font-semibold text-white text-left lg:text-right mx-2 lg:mx-0">
          24h Change
        </h1>
        <h1 className="text-base lg:text-xl font-semibold text-white text-right mx-2 lg:mx-5">
          Market Cap
        </h1>
      </div>
      <div className="flex items-center justify-center">
        {loadCoin && (
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        )}
      </div>

      {data.map((crypto, index) => (
        <Link to={`/coininfo/${crypto?.id}`} key={crypto?.id}>
          <div
            onLoad={() => setLoadCoin(false)}
            key={index}
            className="grid grid-cols-2 lg:grid-cols-4 items-center bg-gray-800 cursor-pointer p-1 mb-2 rounded-md hover:bg-gradient-to-b hover:from-slate-700 transition-all ease-in-out duration-100 hover:to-black"
          >
            <div className="sm:w-full">
              <h2 className="text-sm sm:text-base lg:text-xl font-semibold text-white">
                <img
                  src={crypto?.image}
                  alt={crypto?.name}
                  className="w-5 inline mx-2 lg:mx-5"
                />
                {crypto?.name}
              </h2>
            </div>
            <div className="sm:w-full">
              <p className="text-lime-400 text-right text-sm lg:text-lg mx-2 lg:mx-0">
                {"$ " + numberWithCommas(crypto?.current_price?.toFixed(2))}
              </p>
            </div>
            <div className="sm:w-full">
              <p
                className={`text-${
                  crypto?.price_change_percentage_24h > 0 ? "green" : "red"
                } text-left lg:text-right text-sm lg:text-lg mx-9 lg:mx-0`}
              >
                {numberWithCommas(
                  crypto?.price_change_percentage_24h.toFixed(2)
                ) + "%"}
                {crypto?.price_change_percentage_24h > 0 ? (
                  <FontAwesomeIcon icon={faCaretUp} className="ml-2" />
                ) : (
                  <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
                )}
              </p>
            </div>
            <div className="sm:w-full">
              <p className="text-cyan-400 text-right text-sm lg:text-lg mx-2 lg:mx-5">
                {"$ " + numberWithCommas(crypto?.market_cap)}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function PaginationButtons({ totalPages, setCurrentPage }) {
  const buttons = [];
  for (let i = 1; i <= totalPages; i++) {
    buttons.push(
      <button
        key={i}
        className="w-6 sm:w-10 my-2 mx-1 lg:my-5 lg:mx-2 px-1 py-0 sm:px-2 sm:py-2 bg-gradient-to-b from-lime-400 to-lime-950 hover:from-white hover:to-blue-950 hover:scale-105 font-semibold text-white text-center rounded-md sm:rounded-full"
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </button>
    );
  }
  return <div className="flex justify-center flex-wrap">{buttons}</div>;
}

function Market() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;
  const totalPages = Math.ceil(data.length / entriesPerPage);
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

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

  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = currentPage * entriesPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div
      className="min-h-screen mx-auto bg-gradient-to-b from-black to-slate-900 pt-16 px-4"
      id="market"
    >
      <h1 className="text-4xl md:text-6xl mb-4 text-white text-center">
        Market <span className="text-lime-400">Update</span>
      </h1>
      <CryptoSection data={currentData} />
      <PaginationButtons
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Market;
