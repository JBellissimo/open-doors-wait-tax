export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6 text-white">About Us</h1>
        <div className="border-l-4 border-red-500 pl-6 mb-8">
          <p className="text-xl text-gray-300 font-bold mb-2">The Mandate:</p>
          <p className="text-lg text-gray-400">
            Returning time and money to NYC business owners.
          </p>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-white">The Problem</h2>
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-sm mb-6">
          <p className="text-gray-300 leading-relaxed mb-4">
            In New York City, the permitting process for building construction operates on a timeline designed around internal agency workflows—not business reality. The official timeline claims 22 work days, but businesses experience 47 calendar days of dead rent, unpaid wages, and zero revenue.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The gap isn't bureaucratic inefficiency—it's structural. Weekends. Holidays. Objection phases. Correction cycles. Each adds days. For a small business with 10 employees waiting to open, each additional day costs $2,000+ in wages alone. Over 47 days, that's $94,000 in dead weight before the first customer walks through the door.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-white">The Solution</h2>
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-sm mb-6">
          <p className="text-gray-300 leading-relaxed mb-4">
            The Open Doors Initiative applies AI-driven pre-audit logic to permitting applications before they reach the city. We identify missing documentation, code violations, and correction cycles not in advance—we eliminate them entirely.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Our protocol:
          </p>
          <ul className="space-y-3 text-gray-300 mb-6">
            <li className="flex gap-3">
              <span className="text-red-400 font-bold flex-shrink-0">1.</span>
              <span><strong>AI Pre-Audit (48 hours):</strong> Run your application through our logic engine. We find what the city will reject before they see it.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-400 font-bold flex-shrink-0">2.</span>
              <span><strong>Correction Sync (48 hours):</strong> Fix issues in parallel. No back-and-forth delays. We submit only once, with everything right.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-400 font-bold flex-shrink-0">3.</span>
              <span><strong>Final Issuance (24 hours):</strong> The city verifies and issues. No objection phase. No correction cycle.</span>
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed text-sm font-semibold text-green-400">
            Total: 120 hours. That's 5 days. Not 47.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-white">Impact</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-950 to-gray-900 border border-green-900 p-6 rounded-sm">
            <div className="text-3xl font-bold text-green-400 mb-2">42</div>
            <div className="text-gray-300 font-semibold">Days Saved</div>
            <div className="text-xs text-gray-500 mt-2">From application to occupancy</div>
          </div>
          <div className="bg-gradient-to-br from-green-950 to-gray-900 border border-green-900 p-6 rounded-sm">
            <div className="text-3xl font-bold text-green-400 mb-2">$94K+</div>
            <div className="text-gray-300 font-semibold">Wages Recovered</div>
            <div className="text-xs text-gray-500 mt-2">For a 10-person business</div>
          </div>
          <div className="bg-gradient-to-br from-green-950 to-gray-900 border border-green-900 p-6 rounded-sm">
            <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-gray-300 font-semibold">First-Pass Approval</div>
            <div className="text-xs text-gray-500 mt-2">No objections. No corrections.</div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-white">Who We Are</h2>
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-sm">
          <p className="text-gray-300 leading-relaxed mb-4">
            We are builders, technologists, and New Yorkers. We've watched good businesses fail because the permitting process wasn't a barrier—it was a killing field. We built this not as a consulting service, but as a technical protocol. A force multiplier. A way to return time and money to the people who are actually building the city.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Executive Order 11 authorized this work. We're implementing it. Every day we reduce the wait is a day someone's business survives instead of starves.
          </p>
        </div>
      </section>

      <footer className="border-t border-gray-800 pt-8 text-center">
        <div className="text-xs text-gray-600">
          Built for NYC small business owners.
        </div>
      </footer>
    </div>
  );
}
