import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios.post('/api/generatePlan', { url });
    setResult(res.data);
    setPdfUrl(`data:application/pdf;base64,${res.data.pdf}`);
    setLoading(false);
  };

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Growth Marketing Assistant</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter your website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Generate Plan
        </button>
      </form>

      {loading && <p>Generating your marketing plan...</p>}

      {result && (
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Business Summary</h2>
          <p className="mb-4">{result.plan.summary}</p>

          <h2 className="text-xl font-semibold">Recommended Channels</h2>
          <ul className="mb-4">
            {result.plan.channels.map((ch, i) => (
              <li key={i}>{ch.name} – {ch.budget}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold">Influencers</h2>
          <ul className="mb-4">
            {result.influencers.map((inf, i) => (
              <li key={i}>{inf.name} – {inf.platform} ({inf.followers})</li>
            ))}
          </ul>

          {pdfUrl && (
            <a href={pdfUrl} download="growth-plan.pdf" className="text-blue-600 underline">Download PDF</a>
          )}
        </div>
      )}
    </main>
  );
}
