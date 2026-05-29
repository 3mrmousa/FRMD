import React from 'react';
import Link from 'next/link';

export default function ReturnsPage() {
  return (
    <main className="container mx-auto px-5 lg:px-10 pt-30 pb-20 min-h-screen">
      <div className="mb-10">
        <h1 className="font-bebas text-7xl sm:text-9xl font-bold tracking-tight text-foreground mb-4 uppercase">
          Returns
        </h1>
        <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
          Shipping & Exchange Policy
        </p>
      </div>

      <div className="border-t border-black/20 dark:border-white/20 pt-12">
        <div className="max-w-3xl flex flex-col gap-8 text-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">Return Window</h2>
            <p className="text-muted-foreground">
              We accept returns within 14 days of the delivery date. Items must be in their original condition: unwashed, unworn, and with all original tags still attached. Items that show signs of wear or are returned outside the 14-day window will not be accepted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">How to Start a Return</h2>
            <p className="text-muted-foreground">
              To initiate a return, please visit our <Link href="/contact" className="text-foreground font-medium hover:underline">Contact Page</Link> and select "Return" as the subject. Please include your order number and the reason for your return. Our team will get back to you within 24 hours with further instructions and a return shipping label.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">Refunds</h2>
            <p className="text-muted-foreground">
              Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed and automatically applied to your original method of payment within 5-7 business days. Please note that original shipping costs are non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">Exchanges</h2>
            <p className="text-muted-foreground">
              If you need to exchange an item for a different size or color, please follow the return process to send back your original item and place a new order for the desired item. This ensures the quickest processing time for getting your new gear.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">Damaged or Defective Items</h2>
            <p className="text-muted-foreground">
              If you received a damaged or defective product, please contact us immediately at <a href="mailto:hello@frmd.co" className="text-foreground font-medium hover:underline">hello@frmd.co</a> with photos of the issue. We will make it right as quickly as possible.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
