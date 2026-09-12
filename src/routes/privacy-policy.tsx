import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — xXx Sound" },
      { name: "description", content: "How GI Invest GmbH and xXx Sound process personal data for the website, tickets and merchandise." },
      { property: "og:title", content: "Privacy Policy — xXx Sound" },
      { property: "og:description", content: "How GI Invest GmbH and xXx Sound process personal data." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPolicy,
});

const sections = [
  ["1. Data controller", <>The controller is GI Invest GmbH, operating under the name xXx Sound, represented by Michael Holstein, Hermannstrasse 25 A, 64285 Darmstadt, Germany. Email: <a className="underline decoration-accent underline-offset-4 hover:text-accent" href="mailto:info@xxxsoundxxx.com">info@xxxsoundxxx.com</a>. Commercial register: Local Court of Darmstadt, HRB 89040. VAT ID: DE271990122.</>],
  ["2. Website visits", <>When you visit our website, your browser transfers technical information necessary to deliver it. This may include IP address, date and time of access, requested page, browser and operating system information, referring page and technical response status.<br /><br />We process this information to operate and secure the website, diagnose technical problems and prevent misuse. The legal basis is Article 6(1)(f) GDPR. Our legitimate interest is the secure and reliable operation of our website.<br /><br />The website is hosted by Hostinger International Ltd. Hostinger processes technical information as required to provide hosting and infrastructure services. Server logs are retained only for the period necessary for security, troubleshooting and legal obligations.</>],
  ["3. Contact by email", <>If you contact us by email, we process the information you provide, including your email address, name, contact details, message content and related correspondence. We use this information to respond to you and, where relevant, to prepare or perform a contract. The legal basis is Article 6(1)(b) GDPR for contract-related enquiries and Article 6(1)(f) GDPR for other enquiries.</>],
  ["4. Tickets and merchandise", <>Tickets and merchandise are offered through Sphere Music at music.sphere.art/music. Sphere Music operates the relevant purchase process. Its own privacy information and terms displayed during purchase also apply to its processing activities.<br /><br />For ticket sales and merchandise orders, GI Invest GmbH receives: city, name, telephone number, email address, merchandise size, delivery address and order number.<br /><br />We use this information to organise admission, fulfil orders, provide support, communicate necessary information, handle returns or refunds, prevent fraud and comply with accounting and legal obligations. The legal basis is Article 6(1)(b), Article 6(1)(c) and Article 6(1)(f) GDPR, as applicable.</>],
  ["5. Newsletter and marketing", <>xXx Sound does not currently operate an email newsletter and does not collect newsletter subscription data through this website. If a newsletter is introduced, this Privacy Policy will be updated before newsletter data is processed.</>],
  ["6. Cookies, browser storage and external resources", <>We do not currently use advertising or analytics cookies. The website uses only technically necessary browser storage to restore your position when navigating between pages.<br /><br />The website currently loads fonts from Google Fonts. When requested, technical connection data, including IP address, may be transmitted to Google. The legal basis is Article 6(1)(f) GDPR. Our legitimate interest is consistent display and readable design.<br /><br />No advertising pixels, analytics services or profiling tools are currently used.</>],
  ["7. Recipients and international transfers", <>Personal data may be received by service providers that help us operate the website and fulfil purchases, including Hostinger and Sphere Music. We disclose data only where necessary for the purposes stated in this policy or required by law.<br /><br />Some providers may process data outside the European Economic Area. Where this occurs, we require an appropriate GDPR transfer mechanism, such as an adequacy decision or European Commission Standard Contractual Clauses, where applicable.</>],
  ["8. Retention periods", <>We retain personal data only as long as necessary for the purpose for which it was collected. Order information is retained for fulfilment, customer support, accounting, tax and legal obligations. Correspondence is retained until the enquiry is resolved and applicable limitation periods expire. Technical logs are retained for the shortest period necessary for operation and security.</>],
  ["9. Your rights", <>Under the GDPR, you may request access, rectification, erasure, restriction of processing and data portability. You may object to processing based on legitimate interests and to direct marketing at any time.<br /><br />To exercise your rights, contact <a className="underline decoration-accent underline-offset-4 hover:text-accent" href="mailto:info@xxxsoundxxx.com">info@xxxsoundxxx.com</a>. You also have the right to lodge a complaint with a supervisory authority. The supervisory authority for GI Invest GmbH is Der Hessische Beauftragte fuer Datenschutz und Informationsfreiheit, Gustav-Stresemann-Ring 1, 65189 Wiesbaden, Germany. Website: <a className="underline decoration-accent underline-offset-4 hover:text-accent" href="https://datenschutz.hessen.de">datenschutz.hessen.de</a>.</>],
  ["10. Changes to this Privacy Policy", <>We may update this Privacy Policy if our services, data processing activities or legal obligations change. The current version is published on xxxsoundxxx.com.</>],
] as const;

function PrivacyPolicy() {
  return (
    <article className="mx-auto max-w-5xl px-5 py-20">
      <p className="label-tag text-[10px] text-accent">Data protection</p>
      <h1 className="mt-3 text-4xl sm:text-6xl">Privacy Policy</h1>
      <p className="mt-5 font-mono text-xs uppercase text-muted-foreground">For xxxsoundxxx.com · Last updated: 12 September 2026</p>
      <p className="mt-10 max-w-3xl text-lg leading-8">This Privacy Policy explains how GI Invest GmbH, operating under the name xXx Sound, processes personal data in connection with xxxsoundxxx.com, ticket sales, merchandise sales and customer communications.</p>
      <div className="mt-10 divide-y divide-border border-t border-foreground">
        {sections.map(([title, body]) => (
          <section key={title} className="grid gap-3 py-7 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10">
            <h2 className="text-lg">{title}</h2>
            <div className="max-w-2xl leading-7 text-muted-foreground">{body}</div>
          </section>
        ))}
      </div>
    </article>
  );
}