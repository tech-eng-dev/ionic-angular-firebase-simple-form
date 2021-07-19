import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(
    private afDb: AngularFirestore,
  ) { }

  addUser(user: LoginModel): Promise<DocumentReference<unknown>> {
    return this.afDb.collection('users').add(user);
  }
}
