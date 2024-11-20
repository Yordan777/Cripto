import { z } from "zod";

export const CurrencySchema = z.object({
  name: z.string(),
  code: z.string(),
});

export const CryptoCurrencyResponSchema = z.object({
  CoinInfo: z.object({
    FullName: z.string(),
    Name: z.string(),
  }),
});

export const CryptoCurrenciesResponSchema = z.array(CryptoCurrencyResponSchema);

export const PairSchema = z.object({
  currency: z.string(),
  criptocurrency: z.string(),
});

export const CryptoPriceSchema = z.object({
  IMAGEURL: z.string(),
  CHANGEPCT24HOUR: z.string(),
  HIGHDAY: z.string(),
  LOWDAY: z.string(),
  PRICE: z.string(),
  LASTUPDATE: z.string()
})