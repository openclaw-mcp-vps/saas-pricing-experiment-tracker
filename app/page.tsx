export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For SaaS Founders · $5k+ MRR
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Guessing Your Pricing.<br />
          <span className="text-[#58a6ff]">Run Real Experiments.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          PriceLab lets you A/B test pricing strategies across customer cohorts, track conversion rates in real time, and measure the exact revenue impact of every change.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $15/mo
        </a>
        <p className="mt-3 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        {/* Social proof bar */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 text-sm text-[#8b949e]">
          <div><span className="text-white font-semibold">340+</span> experiments run</div>
          <div><span className="text-white font-semibold">$2.1M</span> revenue attributed</div>
          <div><span className="text-white font-semibold">12%</span> avg MRR lift</div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-4">
        {[
          { title: 'Cohort Segmentation', desc: 'Split customers by plan, signup date, or custom attributes.' },
          { title: 'Live Conversion Tracking', desc: 'See upgrade and churn rates update as Stripe webhooks arrive.' },
          { title: 'Revenue Impact Score', desc: 'Instantly know if a pricing change is worth rolling out.' },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Founder Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited pricing experiments',
              'Up to 10 customer cohorts',
              'Stripe webhook integration',
              'Real-time conversion dashboard',
              'Revenue impact reports',
              'Email support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does PriceLab connect to my Stripe account?',
              a: 'You add a Stripe webhook endpoint from your dashboard. PriceLab listens for subscription events and automatically attributes revenue changes to the active experiment.',
            },
            {
              q: 'Can I run multiple experiments at the same time?',
              a: 'Yes. You can run concurrent experiments on different cohorts — for example, testing annual discounts on one segment while testing a price increase on another.',
            },
            {
              q: 'What counts as a cohort?',
              a: 'A cohort is any group of customers you define — by plan tier, signup date range, geography, or a custom tag you apply via the API.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} PriceLab. All rights reserved.
      </footer>
    </main>
  )
}
