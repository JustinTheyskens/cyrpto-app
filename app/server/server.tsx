// pages/server.tsx
import { fetchCoins, CoinData } from "../utility/utility"; // ✅ Import fetchCoins

export async function getServerSideProps() {
  const coins = await fetchCoins(10); // ✅ Fetch multiple coins
  return { props: { coins } };
}

export default function ServerPage({ coins }: { coins: CoinData[] }) {
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
        <p>Failed to load coin data.</p>
      )}
    </div>
  );
}
