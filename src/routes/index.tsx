import { createFileRoute } from "@tanstack/react-router";
import { HeroStage } from "@/components/hero-stage";
import { ArtistPoster } from "@/components/artist-poster";
import { Announcements } from "@/components/announcements";
import { MerchTeaser } from "@/components/merch-teaser";
import { Socials } from "@/components/socials";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "xXx Sound — концерты, билеты, мерч" },
      {
        name: "description",
        content:
          "Концертная организация xXx Sound: анонсы ближайших шоу, билеты, мерч и наши соцсети.",
      },
      { property: "og:title", content: "xXx Sound — концерты, билеты, мерч" },
      {
        property: "og:description",
        content: "Анонсы ближайших концертов, мерч и соцсети xXx Sound.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <h1 className="sr-only">xXx Sound — концертная организация</h1>
      <HeroStage />
      <AboutUs />
      <ArtistPoster />
      <Announcements />
      <MerchTeaser />
      <Socials />
    </>
  );
}
