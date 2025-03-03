// utility function
import axios from "axios";

// coin data interface
export interface CoinData {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  priceUsd: string;
}

// pulling from API
export const fetchCoins = async (limit: number = 10): Promise<CoinData[] | null> => {
  // try / catch for error handling - always use when pulling from API or DB
  try {
    const response = await axios.get(`https://api.coincap.io/v2/assets?limit=${limit}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

/* bitcoin only as test
export const fetchCoin = async (coinId: string): Promise<CoinData | null> => {
  try {
    const response = await axios.get(`https://api.coincap.io/v2/assets/${coinId}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching coin data:", error);
    return null;
  }
};
*/
