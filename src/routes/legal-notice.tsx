import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal-notice")({
  head: () => ({
    meta: [
      { title: "Legal Notice — xXx Sound" },
      { name: "description", content: "Legal notice and company information for xXx Sound and GI Invest GmbH." },
      { property: "og:title", content: "Legal Notice — xXx Sound" },
      { property: "og:description", content: "Legal notice and company information for xXx Sound and GI Invest GmbH." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LegalNotice,
});

const sections = [
  {
    title: "Website operator",
    body: <>GI Invest GmbH<br />Operating under the name: xXx Sound<br />Hermannstrasse 25 A<br />64285 Darmstadt<br />Germany</>,
  },
  { title: "Represented by", body: <>Michael Holstein</> },
  {
    title: "Contact",
    body: <><a className="underline decoration-accent underline-offset-4 hover:text-accent" href="mailto:info@xxxsoundxxx.com">info@xxxsoundxxx.com</a><br /><a className="underline decoration-accent underline-offset-4 hover:text-accent" href="https://xxxsoundxxx.com/">https://xxxsoundxxx.com/</a></>,
  },
  { title: "Commercial register", body: <>Registered with the Commercial Register of the Local Court of Darmstadt<br />Registration number: HRB 89040</> },
  { title: "VAT identification number", body: <>DE271990122</> },
  { title: "Tickets and merchandise", body: <>Tickets and merchandise are offered through Sphere Music at music.sphere.art/music. The applicable seller, event organiser, payment terms, delivery terms, cancellation provisions and consumer information are displayed during the relevant purchase process.</> },
  { title: "Consumer dispute resolution", body: <>GI Invest GmbH is neither willing nor obligated to participate in dispute resolution proceedings before a consumer arbitration board.</> },
  { title: "Copyright", body: <>The content of this website, including logos, photographs, artwork, text and visual materials, is protected by applicable intellectual property laws. Any use beyond statutory permissions requires prior permission from the relevant rights holder.</> },
];

function LegalNotice() {
  return (
    <article className="mx-auto max-w-5xl px-5 py-20">
      <p className="label-tag text-[10px] text-accent">Company information</p>
      <h1 className="mt-3 text-4xl sm:text-6xl">Legal Notice</h1>
      <p className="mt-5 font-mono text-xs uppercase text-muted-foreground">For xxxsoundxxx.com · Last updated: 12 September 2026</p>
      <h2 className="mt-14 border-b border-foreground pb-5 text-2xl sm:text-3xl">Information pursuant to Section 5 of the German Digital Services Act (DDG)</h2>
      <div className="divide-y divide-border">
        {sections.map((section) => (
          <section key={section.title} className="grid gap-3 py-7 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10">
            <h2 className="text-lg">{section.title}</h2>
            <div className="max-w-2xl leading-7 text-muted-foreground">{section.body}</div>
          </section>
        ))}
      </div>
    </article>
  );
}