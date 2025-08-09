// Stable-diffusion / image generation proxy stub
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  const { prompt } = req.body;
  // For demo: return an Unsplash source image for the prompt
  const img = `https://source.unsplash.com/featured/?${encodeURIComponent(prompt || 'nature')}`;
  return res.status(200).json({ image: img });
}
