// Next.js API route - OpenAI proxy (server-side only)
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST allowed' });
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'No prompt provided' });

  try {
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.9,
        max_tokens: 700
      })
    });
    const data = await r.json();
    const text = data?.choices?.[0]?.message?.content ?? 'Sorry, no response.';
    return res.status(200).json({ text });
  } catch (err) {
    console.error('OpenAI error', err);
    return res.status(500).json({ error: err.message || 'OpenAI error' });
  }
}
