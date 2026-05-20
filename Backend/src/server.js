// ALL imports first
import dotenv from 'dotenv';
import app from './app.js';
import connectToDB from './db/db.js';

// then code
dotenv.config({ path: '.env' });
dotenv.config({ path: '.env.local' });

const startServer = async () => {
  await connectToDB();

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on PORT: ${PORT}`);
  });
};

startServer();