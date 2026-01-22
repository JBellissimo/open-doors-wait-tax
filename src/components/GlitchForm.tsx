import { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function GlitchForm() {
  const [businessType, setBusinessType] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [daysWaiting, setDaysWaiting] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const businessTypes = [
    'Restaurant',
    'Retail',
    'Professional Services',
    'Light Industrial',
    'Construction',
    'Hospitality',
    'Healthcare',
    'Other',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!businessType || !zipCode || !daysWaiting) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      const { error: submitError } = await supabase
        .from('glitch_submissions')
        .insert([
          {
            business_type: businessType,
            zip_code: zipCode,
            days_waiting: parseInt(daysWaiting),
            description: description || null,
          },
        ]);

      if (submitError) throw submitError;

      setSuccess(true);
      setBusinessType('');
      setZipCode('');
      setDaysWaiting('');
      setDescription('');

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Failed to submit glitch report. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2 font-semibold">
            Business Type *
          </label>
          <select
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-sm py-2 px-3 text-gray-100 focus:outline-none focus:border-gray-500 transition-colors"
          >
            <option value="">Select a type</option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2 font-semibold">
            Zip Code *
          </label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
            placeholder="10001"
            maxLength={5}
            className="w-full bg-gray-800 border border-gray-700 rounded-sm py-2 px-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-2 font-semibold">
          Days Waiting *
        </label>
        <input
          type="number"
          value={daysWaiting}
          onChange={(e) => setDaysWaiting(e.target.value)}
          placeholder="Enter number of days"
          min="0"
          max="999"
          className="w-full bg-gray-800 border border-gray-700 rounded-sm py-2 px-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-2 font-semibold">
          What's the Hold-Up? (Optional)
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the issue or delay you experienced..."
          rows={3}
          className="w-full bg-gray-800 border border-gray-700 rounded-sm py-2 px-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors resize-none"
        />
      </div>

      {error && (
        <div className="bg-red-950 border border-red-800 p-3 rounded-sm flex gap-2 text-sm text-red-300">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-950 border border-green-800 p-3 rounded-sm flex gap-2 text-sm text-green-300">
          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          Glitch report submitted. We're tracking it.
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-900 disabled:opacity-50 text-white py-3 rounded-sm font-bold uppercase text-sm tracking-wider transition-colors"
      >
        {loading ? 'Submitting...' : 'Submit Glitch Report'}
      </button>
    </form>
  );
}
