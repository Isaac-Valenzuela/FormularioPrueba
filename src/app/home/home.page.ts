import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'], 
})
export class HomePage {
  form: FormGroup;
  hobbies = ['Futbol', 'Basquet', 'Ajedrez', 'Pintar'];

  constructor(private fb: FormBuilder, private fs: FirestoreService) {
    this.form = this.fb.group({
      nombre: [''],
      apellido: [''],
      correo: [''],
      telefono: [''],
      direccion: [''],
      fechaNacimiento: [''],
      genero: [''],
      pais: [''],
      comentarios: [''],
      hobbies: [[]],
    });
  }

  enviar() {
    this.fs.guardarUsuario(this.form.value);
    this.form.reset();
  }

  
}
