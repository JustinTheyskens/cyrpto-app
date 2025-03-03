"use client";

// pages/index.tsx

"use client"; // Ensure it's a client component

import { useEffect, useState } from "react";
import { fetchCoins, CoinData } from "./utility/utility";

export default function Home() {
  const [coins, setCoins] = useState<CoinData[] | null>(null);

  useEffect(() => {
    const getCoins = async () => {
      const data = await fetchCoins(10); // Fetch top 10 coins
      setCoins(data);
    };
    getCoins();
  }, []);

  return (
    <div>
      <h1>Top Cryptocurrencies</h1>
      {coins ? (
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price (USD)</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id}>
                <td>{coin.rank}</td>
                <td>{coin.name}</td>
                <td>{coin.symbol}</td>
                <td>${parseFloat(coin.priceUsd).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}


// import { useEffect, useState } from "react";
// import { fetchCoin, CoinData } from "./utility/utility";

// // main function
// export default function Home() {
//   const [coin, setCoin] = useState<CoinData | null>(null);

//   useEffect(() => {
//     const getCoin = async () => {
//       const data = await fetchCoin("bitcoin");
//       setCoin(data);
//     };
//     getCoin();
//   }, []);

//   return (
//     <div>
//       <h1>CoinCap API Example</h1>
//       {coin ? (
//         <div>
//           <h2>{coin.name} ({coin.symbol})</h2>
//           <p>Price: ${parseFloat(coin.priceUsd).toFixed(2)}</p>
//           <p>Rank: {coin.rank}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }
