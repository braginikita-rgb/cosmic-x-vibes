import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy — xXx Sound" },
      {
        name: "description",
        content: "Terms, ticket cancellation rules and merchandise refund policy for xXx Sound purchases through Sphere Music.",
      },
      { property: "og:title", content: "Terms and Refund Policy — xXx Sound" },
      {
        property: "og:description",
        content: "Ticket cancellation rules and merchandise returns for xXx Sound purchases.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: RefundPolicy,
});

const sections = [
  {
    title: "1. Seller and purchase platform",
    body: (
      <>
        GI Invest GmbH, operating under the name xXx Sound, Hermannstrasse 25 A, 64285
        Darmstadt, Germany, represented by Michael Holstein. Email:{" "}
        <a
          className="underline decoration-accent underline-offset-4 hover:text-accent"
          href="mailto:info@xxxsoundxxx.com"
        >
          info@xxxsoundxxx.com
        </a>
        . Commercial Register: Local Court of Darmstadt HRB 89040. VAT ID: DE271990122.
        <br />
        <br />
        Purchases are processed through Sphere Music at music.sphere.art/music. The price,
        taxes, payment methods, delivery method, the party shown as seller or event organiser,
        and any service fees are shown before the order is placed. Sphere Music terms displayed
        in the purchase process also apply to its services.
      </>
    ),
  },
  {
    title: "2. Tickets",
    body: (
      <>
        A ticket is valid only for the event, venue, date, time, category and admission
        conditions shown on the ticket and in the order confirmation. The customer is
        responsible for checking these details promptly after purchase.
        <br />
        <br />
        Tickets for leisure events taking place on a specific date or within a specific period
        do not carry a statutory 14-day right of withdrawal under Section 312g(2)(9) of the
        German Civil Code (BGB). A ticket purchase is therefore binding once the order has been
        completed.
        <br />
        <br />
        Tickets must not be altered, copied, resold for commercial purposes or used in breach of
        event or venue rules. Admission may be refused where a ticket is invalid, duplicated,
        obtained fraudulently or used contrary to applicable rules.
      </>
    ),
  },
  {
    title: "3. Cancellation, postponement and changes",
    body: (
      <>
        If an event is cancelled, the purchaser may request a refund through the original point
        of purchase. Any refund is subject to mandatory law and the terms disclosed by Sphere
        Music at checkout. Please retain the ticket and order number until the matter is resolved.
        <br />
        <br />
        If an event is postponed, the ticket remains valid for the rescheduled date unless
        mandatory law or the original point of purchase provides otherwise. A personal inability
        to attend a rescheduled event does not, by itself, create a refund entitlement.
        <br />
        <br />
        Changes to the artist line-up, support acts, set length, venue layout, start time or other
        non-material aspects do not create a refund entitlement unless required by mandatory law.
      </>
    ),
  },
  {
    title: "4. Merchandise and right of withdrawal",
    body: (
      <>
        For standard merchandise purchased at a distance, consumers have a statutory right to
        withdraw from the purchase contract within 14 days after receiving the goods. If several
        goods from one order are delivered separately, the period begins when the last item is
        received.
        <br />
        <br />
        To exercise this right, send an unambiguous statement to GI Invest GmbH at{" "}
        <a
          className="underline decoration-accent underline-offset-4 hover:text-accent"
          href="mailto:info@xxxsoundxxx.com"
        >
          info@xxxsoundxxx.com
        </a>{" "}
        or to Hermannstrasse 25 A, 64285 Darmstadt, Germany. Include your name and order number.
        You may use the model withdrawal form below, but this is not mandatory.
        <br />
        <br />
        Return the goods without undue delay and no later than 14 days after sending the
        withdrawal notice. The customer bears the direct return cost unless the item is defective
        or we have agreed otherwise in writing.
      </>
    ),
  },
  {
    title: "5. Effects of withdrawal and exclusions",
    body: (
      <>
        After a valid withdrawal, we will reimburse payments received for returned merchandise,
        including standard delivery costs, using the original payment method unless otherwise
        agreed. We may wait until we receive the goods or evidence that they have been sent back,
        whichever occurs first.
        <br />
        <br />
        The customer is responsible only for any reduction in value resulting from handling
        beyond what is necessary to establish the nature, characteristics and functioning of the
        goods.
        <br />
        <br />
        There is no statutory right of withdrawal for merchandise made to the customer&apos;s
        individual specifications or clearly personalised.
      </>
    ),
  },
  {
    title: "6. Defective or incorrect merchandise",
    body: (
      <>
        Statutory rights for defective, damaged or incorrect merchandise remain unaffected.
        Contact{" "}
        <a
          className="underline decoration-accent underline-offset-4 hover:text-accent"
          href="mailto:info@xxxsoundxxx.com"
        >
          info@xxxsoundxxx.com
        </a>{" "}
        promptly with your order number and clear photographs where appropriate. Do not return a
        defective item before receiving instructions unless the checkout or confirmation provides
        a return procedure.
      </>
    ),
  },
  {
    title: "7. Customer support and complaints",
    body: (
      <>
        For ticket and merchandise enquiries, contact info@xxxsoundxxx.com. State the order
        number, relevant event or item and a short description of the issue. GI Invest GmbH is
        neither willing nor obligated to participate in dispute resolution proceedings before a
        consumer arbitration board.
      </>
    ),
  },
  {
    title: "8. Applicable law",
    body: (
      <>
        German law applies, without limiting any mandatory consumer protection provisions that
        apply in the customer&apos;s country of habitual residence.
      </>
    ),
  },
] as const;

function RefundPolicy() {
  return (
    <article className="mx-auto max-w-5xl px-5 py-20">
      <p className="label-tag text-[10px] text-accent">Tickets &amp; merchandise</p>
      <h1 className="mt-3 text-4xl sm:text-6xl">Terms and Refund Policy</h1>
      <p className="mt-5 font-mono text-xs uppercase text-muted-foreground">
        Sold through Sphere Music · Last updated: 12 September 2026
      </p>
      <p className="mt-10 max-w-3xl text-lg leading-8">
        These terms apply to tickets and merchandise connected with xXx Sound where GI Invest
        GmbH is identified as the seller or event organiser in the checkout, confirmation or event
        information.
      </p>

      <div className="mt-10 divide-y divide-border border-t border-foreground">
        {sections.map((section) => (
          <section
            key={section.title}
            className="grid gap-3 py-7 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10"
          >
            <h2 className="text-lg">{section.title}</h2>
            <div className="max-w-2xl leading-7 text-muted-foreground">{section.body}</div>
          </section>
        ))}
      </div>

      <section className="mt-12 border border-foreground bg-card p-6 sm:p-8">
        <p className="label-tag text-[10px] text-accent">Section 9</p>
        <h2 className="mt-3 text-2xl sm:text-3xl">Model Withdrawal Form</h2>
        <p className="mt-4 leading-7 text-muted-foreground">
          Use this form only to withdraw from a merchandise purchase. It does not apply to a
          ticket for an event on a specific date.
        </p>
        <div className="mt-6 space-y-5 text-sm leading-7">
          <p>
            To: GI Invest GmbH<br />
            Hermannstrasse 25 A<br />
            64285 Darmstadt, Germany<br />
            Email: info@xxxsoundxxx.com
          </p>
          <p>
            I/We hereby give notice that I/We withdraw from my/our contract for the purchase of
            the following goods:
          </p>
          {[
            "Goods",
            "Ordered on / received on",
            "Name of consumer(s)",
            "Address of consumer(s)",
            "Signature (only for a paper notice)",
            "Date",
          ].map((label) => (
            <div key={label}>
              <p className="font-mono text-xs uppercase text-muted-foreground">{label}</p>
              <div className="mt-5 border-b border-foreground" />
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}