import express, { Request, Response } from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/conversation', async (req: Request, res: Response) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { 
          role: 'system', 
          // Parameterize this in a form
          content: `You are playing John, my old college friend who is persistent and uses manipulative guilt-tripping when asking me to do something. In this scenario, we are at a pocha in K-town, you're asking me to take another shot of soju with you. Your language is bro-like, not cringe. Your tone is sharp, angry when I try to refuse. You are relentless in pushing me to drink despite my desire to not drink. You are visiting nyc and I live in this city.` 
        },
        {
          role: 'assistant',
          content: "Yo man, let's take another shot"
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const response = completion.choices[0]?.message?.content;
    
    if (!response) {
      return res.status(500).json({ error: 'No response from OpenAI' });
    }

    res.json({ response });
  } catch (err) {
    console.error('Error from OpenAI:', err);
    res.status(500).json({ error: 'Failed to get response from OpenAI' });
  }
});

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
});
