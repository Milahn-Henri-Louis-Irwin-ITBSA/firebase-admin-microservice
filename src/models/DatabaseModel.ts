import admin from 'firebase-admin';
import type { Firestore } from 'firebase-admin/firestore';

class DatabaseModel {
  public db: Firestore;
  constructor() {
    this.db = admin.firestore();
  }

  get getDb(): Firestore {
    return this.db;
  }
}

export default new DatabaseModel();
