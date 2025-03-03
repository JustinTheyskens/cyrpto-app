"use client"; // Important

import { useEffect, useState } from "react";
import { fetchCoins, CoinData } from "./utility/utility";
import Doc from '/crypto-app/docs/documentation.md';

// Home
export default function Home() {
  const [coins, setCoins] = useState<CoinData[] | null>(null);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  useEffect(() => {
    const getCoins = async () => {
      const data = await fetchCoins(10); // Fetch top 10 coins
      setCoins(data);
    };
    getCoins();
  }, []);

  // Filter coins based on search term
  const filteredCoins = coins
    ? coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div>
      <h1>Top Cryptocurrencies</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "10px",
          width: "100%",
          fontSize: "16px",
        }}
      />

      {filteredCoins.length > 0 ? (
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
            {filteredCoins.map((coin) => (
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
        <p>No coins found.</p>
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
