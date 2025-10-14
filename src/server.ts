import app from './app';
import connectDB from './app/config/database';
import config from './app/config/index';

const startServer = async () => {
  try {
    await connectDB();
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  } catch (error) {
    console.log('Failed to start server:', error);
  }
};

startServer();
