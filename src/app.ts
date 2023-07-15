import express from 'express';
import admin from 'firebase-admin';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import firebaseConfig from '../itbsa-honours-backend-firebase-adminsdk-taci1-f6ac4b2b90.json' assert { type: 'json' };
import type { app as FirebaseApp } from 'firebase-admin';
import type { AppOptions } from 'firebase-admin/app';

class App {
  public server;
  private firebaseAdmin: FirebaseApp.App;
  private limiter;
  constructor() {
    this.server = express();
    this.limiter = rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
      standardHeaders: true,
      legacyHeaders: false,
    });
    this.middleware();
    this.configurateFirebase();
    this.routes();
  }

  middleware() {
    this.server.use(
      cors({
        origin: '*',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        maxAge: 3600,
      })
    );
    this.server.use(express.json());
    this.server.use(cookieParser());
    this.server.use('/api', this.limiter);
  }
  routes() {}

  configurateFirebase() {
    this.firebaseAdmin = admin.initializeApp({
      credential: admin.credential.cert(firebaseConfig as AppOptions),
    });
    if (!this.firebaseAdmin) {
      throw new Error('Firebase Admin not initialized');
    }
  }
  public startServer() {
    this.server.listen(3000, () => {
      console.log('FIREBASE-ADMIN RUNNING ON 3000');
    });
  }
}

export default new App();
