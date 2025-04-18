import { fetchInfluencers } from '../../utils/fetchInfluencers';
import { generatePDF } from '../../utils/generatePDF';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { url } = req.body;
  const plan = {
    summary: `Mock summary for ${url}`,
    channels: [
      { name: 'Facebook Ads', budget: '40%' },
      { name: 'Instagram Influencers', budget: '30%' },
      { name: 'YouTube Ads', budget: '30%' },
    ],
  };

  const influencers = fetchInfluencers('marketing');
  const pdf = await generatePDF({ ...plan, influencers });

  res.status(200).json({ plan, influencers, pdf });
}
