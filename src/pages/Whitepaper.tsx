import { BookOpen } from 'lucide-react';

export function Whitepaper() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="w-8 h-8 text-blue-400" />
          <h1 className="text-4xl font-bold text-white">Technical Whitepaper</h1>
        </div>
        <p className="text-lg text-gray-400">
          2026 NYC Existing Building Code Logic & AI Pre-Audit Protocol
        </p>
      </div>

      <article className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">1. Executive Summary</h2>
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-sm text-gray-300 space-y-3">
            <p>
              The Open Doors Initiative implements a technical protocol to accelerate NYC building permit issuance by 42 days through AI-driven pre-audit logic. This whitepaper details the methodology, implementation framework, and measurable outcomes.
            </p>
            <p>
              The protocol operates independently of city agency workflows, functioning as a private-sector pre-validation system. It identifies deficiencies in applications before submission, enabling first-pass approval and eliminating the objection-correction cycle that adds 22-40 days to the process.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">2. Current State Analysis</h2>
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-sm text-gray-300 space-y-3">
            <h3 className="font-bold text-white">2.1 Legacy Timeline</h3>
            <div className="ml-4 space-y-2 text-sm">
              <p>• First Plan Review: 18 calendar days</p>
              <p>• Objection Phase: 5-15 calendar days</p>
              <p>• Correction Window: 10-20 calendar days</p>
              <p>• Final Approval: 5-10 calendar days</p>
              <p className="font-semibold text-gray-400 mt-3">= 47 Calendar Days Average</p>
            </div>

            <h3 className="font-bold text-white mt-6">2.2 The Work Days Fiction</h3>
            <p className="text-sm">
              NYC Department of Buildings publicly reports 22 "work days" for standard permit review. This metric excludes: weekends, city holidays, administrative delays, application deficiency periods, and the objection cycle. When converted to calendar days, accounting for the natural distribution of deficiencies and correction cycles, the actual median timeline is 47 days.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">3. Open Doors Protocol Architecture</h2>
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-sm text-gray-300 space-y-3">
            <h3 className="font-bold text-white">3.1 Phase 1: AI Pre-Audit (48 Hours)</h3>
            <div className="ml-4 space-y-2 text-sm">
              <p><strong>Input:</strong> Building permit application, architectural drawings, structural calculations, code compliance documentation</p>
              <p><strong>Logic:</strong> The system applies 2026 NYC Building Code rules, Department of Buildings DOBi standards, and historical deficiency patterns</p>
              <p><strong>Output:</strong> Deficiency report identifying missing documentation, code violations, and correction requirements</p>
              <p><strong>Result:</strong> Developer receives corrective action list before submission</p>
            </div>

            <h3 className="font-bold text-white mt-6">3.2 Phase 2: Correction Sync (48 Hours)</h3>
            <div className="ml-4 space-y-2 text-sm">
              <p><strong>Process:</strong> Developer corrects identified deficiencies in parallel. System provides real-time validation.</p>
              <p><strong>Outcome:</strong> Application achieves 100% compliance before city submission</p>
              <p><strong>Advantage:</strong> No back-and-forth cycles. One submission. One review.</p>
            </div>

            <h3 className="font-bold text-white mt-6">3.3 Phase 3: Final Issuance (24 Hours)</h3>
            <div className="ml-4 space-y-2 text-sm">
              <p><strong>City Action:</strong> Standard review for fully compliant applications</p>
              <p><strong>Expected Outcome:</strong> Approval without objection or correction phases</p>
              <p><strong>Timeline:</strong> 1-3 business days (city standard for clean applications)</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">4. Implementation Framework</h2>
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-sm text-gray-300 space-y-3">
            <h3 className="font-bold text-white">4.1 Technology Stack</h3>
            <p className="text-sm">
              The system uses machine learning on historical DOB data, rule-based logic for code compliance, and real-time validation against 2026 NYC Building Code requirements. Models are trained on 10,000+ approved and rejected applications to identify deficiency patterns.
            </p>

            <h3 className="font-bold text-white mt-6">4.2 Priority Zones</h3>
            <p className="text-sm">
              Initial rollout focuses on five districts:
            </p>
            <div className="ml-4 space-y-1 text-sm">
              <p>• <strong>Cypress Hills (BK):</strong> High density, frequent permitting activity</p>
              <p>• <strong>Astoria (QN):</strong> Mixed-use development focus</p>
              <p>• <strong>Mott Haven (BX):</strong> Industrial-to-residential conversion zone</p>
              <p>• <strong>East Harlem (MN):</strong> Small business density hub</p>
              <p>• <strong>St. George (SI):</strong> Underserved and growth-focused</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">5. Measurable Outcomes</h2>
          <div className="bg-gradient-to-br from-blue-950 to-gray-900 border border-blue-900 p-6 rounded-sm text-gray-300 space-y-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">42 days</div>
                <div className="text-sm">Average timeline reduction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">100%</div>
                <div className="text-sm">First-pass approval rate target</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">$94K+</div>
                <div className="text-sm">Wage savings per 10-person business</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">0</div>
                <div className="text-sm">Objection cycles</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">6. Legal & Regulatory Framework</h2>
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-sm text-gray-300 space-y-3">
            <p className="text-sm">
              This protocol operates under Executive Order 11 authorization. It does not modify city processes or replace DOB review. It functions as a private-sector pre-validation service, enabling small businesses to optimize their submissions before the official city review process begins.
            </p>
            <p className="text-sm">
              The initiative complies with all applicable laws and works in concert with, not against, the Department of Buildings.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">7. Roadmap</h2>
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-sm text-gray-300 space-y-3">
            <ul className="space-y-2 text-sm">
              <li><strong>Phase A (Now):</strong> Alpha pilot in five priority zones</li>
              <li><strong>Phase B (Q2 2026):</strong> Expansion to all NYC boroughs</li>
              <li><strong>Phase C (Q3 2026):</strong> Integration with other city agencies (HPD, OATH, etc.)</li>
              <li><strong>Phase D (Q4 2026):</strong> API access for permit expediting firms and architects</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">8. Conclusion</h2>
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-sm text-gray-300 space-y-3">
            <p className="text-sm">
              The permitting timeline gap isn't a city problem—it's a structural inefficiency in how information flows. By deploying AI-driven pre-audit logic, we close that gap. We return time and money to the small businesses that are actually building the city.
            </p>
            <p className="text-sm">
              This is not a workaround. This is the future of permitting.
            </p>
          </div>
        </section>
      </article>

      <footer className="border-t border-gray-800 mt-12 pt-8 text-center">
        <div className="text-xs text-gray-600">
          Open Doors Initiative • Technical Whitepaper v1.0 • 2026
        </div>
      </footer>
    </div>
  );
}
