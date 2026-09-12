export type MerchProduct = {
  id: string;
  nameKey: "merch.presaleTee" | "merch.presaleHoodie";
  currentPrice: number;
  previousPrice: number;
  images: ReadonlyArray<{
    src: string;
    viewKey: "merch.front" | "merch.back";
  }>;
};

export const presaleProducts: ReadonlyArray<MerchProduct> = [
  {
    id: "eastern-eu-tour-tee",
    nameKey: "merch.presaleTee",
    currentPrice: 35,
    previousPrice: 50,
    images: [
      { src: "/media/presale-tee-front.webp", viewKey: "merch.front" },
      { src: "/media/presale-tee-back.webp", viewKey: "merch.back" },
    ],
  },
  {
    id: "eastern-eu-tour-hoodie",
    nameKey: "merch.presaleHoodie",
    currentPrice: 75,
    previousPrice: 90,
    images: [
      { src: "/media/presale-hoodie-front.webp", viewKey: "merch.front" },
      { src: "/media/presale-hoodie-back.webp", viewKey: "merch.back" },
    ],
  },
];