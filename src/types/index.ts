import { z } from "zod";
import {
  CryptoCurrencyResponSchema,
  CryptoPriceSchema,
  CurrencySchema,
  PairSchema,
} from "../schema/cripto-schema";

export type Currency = z.infer<typeof CurrencySchema>;
export type Cryptocurrencies = z.infer<typeof CryptoCurrencyResponSchema>;
export type Pair = z.infer<typeof PairSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>