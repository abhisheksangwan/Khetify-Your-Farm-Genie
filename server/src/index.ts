// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import compression from 'compression';
import { z } from 'zod';

  dotenv.config({ path: '../.env' }); 

const app = express();
const PORT = process.env.PORT || 3002;

// Use Helmet for security best practices
app.use(helmet());

// Enable gzip compression for performance
app.use(compression());

// Setup JSON parsing
app.use(express.json());

// CORS Configuration
const allowedOrigins = ['http://localhost:3000', 'https://yourdomain.com'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Health Check Route
app.get('/', (req, res) => {
  res.send('✅ Server is running fine');
});

// Sum Route with Zod Validation
app.post('/sum', (req, res) => {
  const schema = z.object({
    a: z.string().regex(/^-?\d+$/, 'a must be a number'),
    b: z.string().regex(/^-?\d+$/, 'b must be a number')
  });

  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.issues.map(err => err.message).join(', ') });
  }

  const { a, b } = parsed.data;
  const sum = parseInt(a, 10) + parseInt(b, 10);

  res.json({ sum });
});

// Global Error Handler (Optional)
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
