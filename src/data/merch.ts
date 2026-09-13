export type MerchProduct = {
  id: string;
  nameKey: "merch.presaleTee" | "merch.presaleHoodie";
  currentPrice: number;
  previousPrice: number;
  image: string;
  buyUrl: string;
};

export const presaleProducts: ReadonlyArray<MerchProduct> = [
  {
    id: "eastern-eu-tour-tee",
    nameKey: "merch.presaleTee",
    currentPrice: 35,
    previousPrice: 50,
    image: "/media/presale-tee.webp",
    buyUrl: "https://music.sphere.art/music/concerts/the-limba-eastern-europe-tour-4f0d3e/merch",
  },
  {
    id: "eastern-eu-tour-hoodie",
    nameKey: "merch.presaleHoodie",
    currentPrice: 75,
    previousPrice: 90,
    image: "/media/presale-hoodie.webp",
    buyUrl: "https://music.sphere.art/music/concerts/the-limba-eastern-europe-tour-4f0d3e/merch",
  },
];
