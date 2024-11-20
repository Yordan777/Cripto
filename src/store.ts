import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Cryptocurrencies, CryptoPrice, Pair } from "./types";
import { fetchCurrentyCryptoPrice, getCrypto } from "./services/CryptoService";

type CryptoStore = {
  Cryptocurrencies: Cryptocurrencies[];
  result: CryptoPrice;
  loading : boolean;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    Cryptocurrencies: [],
    result: {
      IMAGEURL: "",
      CHANGEPCT24HOUR: "",
      HIGHDAY: "",
      LOWDAY: "",
      PRICE: "",
      LASTUPDATE: "",
    },
    loading: false,
    fetchCryptos: async () => {
      const Cryptocurrencies = await getCrypto();
      set({
        Cryptocurrencies,
      });
    },
    fetchData: async (pair: Pair) => {
      const result = await fetchCurrentyCryptoPrice(pair);
      set(() => ({
        loading: true
      }));
      set(() => ({
        result,
        loading: false
      }));
    },
  }))
);
