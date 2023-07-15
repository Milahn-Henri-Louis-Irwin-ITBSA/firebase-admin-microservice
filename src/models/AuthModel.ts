import admin from 'firebase-admin';
import type { Auth } from 'firebase-admin/auth';
class AuthModel {
  public authentication: Auth;
  constructor() {
    this.authentication = admin.auth();
  }
  get getAuth(): Auth {
    return this.authentication;
  }
}

export default new AuthModel();
