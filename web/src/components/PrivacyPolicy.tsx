import ArroLogo from './ArroLogo'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors mb-12"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 3L5 8L10 13" />
          </svg>
          Back to home
        </a>

        <ArroLogo className="h-5 w-auto text-foreground mb-12" />

        <h1 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-foreground-muted font-light mb-12">
          Last updated: 24 March 2026
        </p>

        <div className="space-y-10 text-base text-foreground/80 font-light leading-relaxed">
          <section>
            <h2 className="text-lg font-medium text-foreground mb-3">Overview</h2>
            <p>
              ARRO builds price comparison and intelligence tools for New Zealand.
              Our products — including Liquorfy, Trolle, and Talle — help you find
              the best deals from major retailers. This policy explains what data we
              collect across ARRO and its products, how we use it, and your rights.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-3">Data We Collect</h2>
            <p className="mb-4">
              ARRO products do not require you to create an account or sign in. We
              collect minimal data to provide our services:
            </p>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong className="text-foreground">Location data</strong> — If you
                grant permission, we use your device's location to show nearby
                stores and prices. This data is sent to our server to perform
                geographic searches but is not stored or linked to any identifier.
              </li>
              <li>
                <strong className="text-foreground">Search queries</strong> —
                Product searches you perform are processed by our server to return
                results. We do not log individual search queries tied to any user.
              </li>
              <li>
                <strong className="text-foreground">Analytics</strong> — We use
                Vercel Analytics and Speed Insights to collect anonymous, aggregated
                usage data (page views, performance metrics). These services do not
                use cookies and do not track individual users across sites.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-3">Data We Do Not Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>We do not collect names, email addresses, or any personal account information.</li>
              <li>We do not collect payment or financial information.</li>
              <li>We do not track you across other websites or apps.</li>
              <li>We do not sell or share data with advertisers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-3">How We Use Your Data</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To show product prices from stores near your location.</li>
              <li>To return relevant product search results.</li>
              <li>To monitor and improve site performance via anonymous analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-3">Third-Party Services</h2>
            <p className="mb-3">We use the following third-party services:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">Vercel</strong> — Hosting,
                analytics, and speed insights.
              </li>
              <li>
                <strong className="text-foreground">Supabase</strong> — Database
                hosting. Product and store data is stored on Supabase
                infrastructure. No personal user data is stored.
              </li>
              <li>
                <strong className="text-foreground">MapLibre / Map tiles</strong> —
                Used to display store locations on a map. Your approximate location
                is sent to tile servers to load map imagery.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-3">Cookies</h2>
            <p>
              ARRO products do not use cookies for tracking or advertising. User
              preferences such as location and search radius are stored in your
              browser's local storage and never sent to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-3">Your Rights</h2>
            <p>
              Since we don't collect personal data or require accounts, there is no
              personal data to access, correct, or delete. You can revoke location
              access at any time through your browser or device settings. If you
              have questions about your data, contact us at the address below.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-3">Children's Privacy</h2>
            <p>
              Some ARRO products are intended for users aged 18 and over. We do not
              knowingly collect data from anyone under 18.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-3">Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Changes will be reflected
              on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-3">Contact</h2>
            <p>
              If you have questions about this privacy policy, email us at{' '}
              <a
                href="mailto:arrotechnology@gmail.com"
                className="text-foreground underline underline-offset-2 hover:text-foreground/70 transition-colors"
              >
                arrotechnology@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
