import React from 'react';

export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-5 lg:px-10 pt-30 pb-20 min-h-screen">
      <div className="mb-10">
        <h1 className="font-bebas text-7xl sm:text-9xl font-bold tracking-tight text-foreground mb-4 uppercase">
          Privacy Policy
        </h1>
        <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
          Last updated: October 2026
        </p>
      </div>

      <div className="border-t border-black/20 dark:border-white/20 pt-12">
        <div className="max-w-3xl flex flex-col gap-8 text-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground">
              We collect information you provide directly to us when you make a purchase, create an account, subscribe to our newsletter, or contact customer support. This may include your name, email address, shipping address, payment information, and any other details you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground">
              The information we collect is used to process your transactions, manage your account, send you updates about your orders, and communicate with you about our products, services, and promotions. We do not sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">3. Cookies & Tracking</h2>
            <p className="text-muted-foreground">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control the use of cookies at the individual browser level.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">4. Data Security</h2>
            <p className="text-muted-foreground">
              We implement a variety of security measures to maintain the safety of your personal information. All sensitive/credit information you supply is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">5. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@frmd.co" className="text-foreground font-medium hover:underline">hello@frmd.co</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
