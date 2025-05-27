import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Optional if set via env var
});

app.post('/api/conversation', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // or 'gpt-4o'
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const response = completion.choices[0].message.content;
    res.json({ response });
  } catch (err) {
    console.error('Error from OpenAI:', err);
    res.status(500).json({ error: 'Failed to get response from OpenAI' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
