// src/app/services/firestore.service.ts
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { CollectionReference, DocumentData } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private usuariosCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.usuariosCollection = collection(this.firestore, 'usuarios');
  }

  // Método para guardar usuario
  async guardarUsuario(data: any) {
    try {
      const docRef = await addDoc(this.usuariosCollection, data);
      console.log('Documento guardado con ID:', docRef.id);
    } catch (error) {
      console.error('Error al guardar documento:', error);
    }
  }
}
