import axios from "axios";
import {
  CryptoCurrenciesResponSchema,
  CryptoPriceSchema,
} from "../schema/cripto-schema";
import { Pair } from "../types";

export async function getCrypto() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  const {
    data: { Data },
  } = await axios(url);
  const result = CryptoCurrenciesResponSchema.safeParse(Data);
  if (result.success) {
    return result.data;
  }
}

export async function fetchCurrentyCryptoPrice(pair: Pair) {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`;
  const {
    data: { DISPLAY },
  } = await axios(url);
  const result = CryptoPriceSchema.safeParse(
    DISPLAY[pair.criptocurrency][pair.currency]
  );
  if (result.success) {
    return result.data;
  }
}
