import { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Zap, ExternalLink, ArrowDown } from 'lucide-react';
import { GlitchForm } from '../components/GlitchForm';

const INITIAL_WAIT_TAX = 1240500;
const INCREMENT_PER_SECOND = 4.15;

const PRIORITY_ZONES = [
  { name: 'Cypress Hills', borough: 'BK', zone: 'Brooklyn' },
  { name: 'Astoria', borough: 'QN', zone: 'Queens' },
  { name: 'Mott Haven', borough: 'BX', zone: 'The Bronx' },
  { name: 'East Harlem', borough: 'MN', zone: 'Manhattan' },
  { name: 'St. George', borough: 'SI', zone: 'Staten Island' },
];

export function Home() {
  const [waitTax, setWaitTax] = useState(INITIAL_WAIT_TAX);
  const [permitNumber, setPermitNumber] = useState('');
  const [startTime] = useState(Date.now());
  const auditRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsedSeconds = (Date.now() - startTime) / 1000;
      setWaitTax(INITIAL_WAIT_TAX + (elapsedSeconds * INCREMENT_PER_SECOND));
    }, 100);

    return () => clearInterval(interval);
  }, [startTime]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (permitNumber.match(/^\d{7}$|^\d{9}$/)) {
      console.log('Auditing permit:', permitNumber);
    }
  };

  const scrollToAudit = () => {
    auditRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div>
      <section className="relative bg-gradient-to-b from-black via-gray-950 to-black border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Open Your Doors.<br />
              <span className="text-red-500">End the Wait Tax.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Moving NYC from a 47-day bureaucratic slog to a 7-day Opening Week.
            </p>
            <button
              onClick={scrollToAudit}
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-sm font-bold uppercase text-lg tracking-wider transition-all transform hover:scale-105 shadow-lg shadow-red-900/50 inline-flex items-center gap-3"
            >
              Audit My Delay
              <ArrowDown className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-black border-4 border-red-900 p-8 md:p-12 rounded-sm max-w-4xl mx-auto">
            <div className="flex items-baseline justify-center gap-3 mb-4">
              <span className="text-sm text-gray-400 uppercase tracking-wider font-bold">NYC WAIT TAX PAID TODAY</span>
              <span className="text-xs text-red-400 animate-pulse">LIVE</span>
            </div>
            <div className="text-6xl md:text-8xl font-bold text-red-500 tabular-nums tracking-tight text-center">
              ${waitTax.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-center text-sm text-gray-500 mt-4">
              Accumulating at $4.15/sec from 1,000 stalled NYC permits
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
            The People's Explainer
          </h2>
          <div className="bg-gray-900 border-2 border-gray-800 p-8 md:p-12 rounded-sm">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              The <span className="text-white font-bold">ALT-2</span> is NYC's most frequent permit (<span className="text-white font-bold">50,000/year</span>). It's how neighborhood businesses get born. But right now, it takes <span className="text-red-400 font-bold">47 days</span> to clear.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              That means <span className="text-red-400 font-bold">47 days of Dead Rent</span>, <span className="text-red-400 font-bold">Idle Wages</span>, and <span className="text-red-400 font-bold">Zero Revenue</span>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-green-950/20 to-black border-y border-green-900/30 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
            Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-900 border-2 border-green-900 p-8 rounded-sm text-center">
              <div className="text-5xl font-bold text-green-400 mb-3">$18,800</div>
              <div className="text-gray-300 font-semibold mb-2">Saved Per Business</div>
              <div className="text-sm text-gray-500">Dead costs eliminated</div>
            </div>
            <div className="bg-gray-900 border-2 border-green-900 p-8 rounded-sm text-center">
              <div className="text-5xl font-bold text-green-400 mb-3">40</div>
              <div className="text-gray-300 font-semibold mb-2">Extra Days</div>
              <div className="text-sm text-gray-500">Of neighborhood service</div>
            </div>
            <div className="bg-gray-900 border-2 border-green-900 p-8 rounded-sm text-center">
              <div className="text-5xl font-bold text-green-400 mb-3">$1.2B</div>
              <div className="text-gray-300 font-semibold mb-2">Total Civic Dividend</div>
              <div className="text-sm text-gray-500">Returned to NYC</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-950 to-gray-900 border-2 border-blue-900 p-8 md:p-12 rounded-sm">
            <div className="flex items-start gap-4 mb-6">
              <Zap className="w-8 h-8 text-blue-400 flex-shrink-0" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Executive Order 11
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  In support of Mayor Mamdani's Executive Order 11, we are providing the technical engine to unblock our Priority Zones, starting in Cypress Hills.
                </p>
                <a
                  href="https://www.nyc.gov/mayors-office/news/2026/01/executive-order-11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Read Executive Order 11
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">Priority Zones</h3>
        <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {PRIORITY_ZONES.map((zone) => (
            <div
              key={zone.name}
              className="bg-gray-900 border-2 border-gray-800 p-6 rounded-sm hover:border-blue-600 transition-all cursor-pointer group transform hover:scale-105"
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                <span className="text-xs text-blue-400 font-bold group-hover:text-blue-300">{zone.borough}</span>
              </div>
              <div className="text-base font-bold mb-1 group-hover:text-blue-300 transition-colors">{zone.name}</div>
              <div className="text-xs text-gray-500">{zone.zone}</div>
            </div>
          ))}
        </div>
      </section>

      <section ref={auditRef} className="bg-gradient-to-b from-black to-gray-950 border-y border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Audit Your Delay</h3>
            <p className="text-gray-400">
              Enter your NYC Job Filing Number to analyze your permit timeline and identify bottlenecks.
            </p>
          </div>
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" />
                <input
                  type="text"
                  value={permitNumber}
                  onChange={(e) => setPermitNumber(e.target.value.replace(/\D/g, ''))}
                  placeholder="Enter NYC Job Filing Number (7 or 9 digits)"
                  className="w-full bg-gray-900 border-2 border-gray-800 rounded-sm py-5 pl-14 pr-4 text-white text-lg placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors"
                  maxLength={9}
                />
              </div>
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-sm font-bold uppercase text-base tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!permitNumber.match(/^\d{7}$|^\d{9}$/)}
              >
                Audit
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-500 text-center">
              Real-time permit status and timeline analysis
            </div>
          </form>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 border-2 border-yellow-900/50 p-8 md:p-12 rounded-sm">
            <div className="mb-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-3">The Civic Lab</h3>
              <p className="text-gray-400 text-lg">
                Submit a Glitch. Tell us where the city is stalling.
              </p>
            </div>
            <GlitchForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 bg-gray-950 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-sm text-gray-600 space-y-1">
            <div>NYC Velocity Protocol v1.0</div>
            <div>Executive Order 11 • NYC Small Business Acceleration</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
