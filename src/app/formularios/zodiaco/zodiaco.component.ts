import { Component } from '@angular/core';

@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']
})
export class ZodiacoComponent {
  resultado: string = ''; // Almacena el resultado del signo zodiacal
  mostrarModal: boolean = false; // Controla la visibilidad del modal
  imagenSigno: string = ''; // Ruta de la imagen del signo zodiacal
  edad: number = 0; // Almacena la edad del usuario

  // Función para calcular el signo zodiacal chino y la edad
  calcularSigno(formValues: any): void {
    const signos = ["Mono", "Gallo", "Perro", "Cerdo", "Rata", "Buey", "Tigre", "Conejo", "Dragón", "Serpiente", "Caballo", "Cabra"];
    const imagenes = [
      'Mono.png', 'Gallo.png', 'Perro.png', 'Cerdo.png', 'rata.png', 
      'Buey.png', 'Tigre.png', 'Conejo.png', 'Dragon.png', 'Serpiente.png',
      'Caballo.png', 'Cabra.png'
    ]; // Cambiado a .png

    const { nombre, apellidoPaterno, apellidoMaterno, dia, mes, anio } = formValues;

    if (!isNaN(anio) && !isNaN(mes) && !isNaN(dia) && nombre && apellidoPaterno && apellidoMaterno) {
      const fechaNacimiento = new Date(anio, mes - 1, dia); // Crear objeto de fecha
      const hoy = new Date(); // Obtener la fecha actual
      this.edad = hoy.getFullYear() - fechaNacimiento.getFullYear(); // Calcular edad

      // Ajustar la edad si la fecha de nacimiento aún no ha pasado este año
      if (hoy.getMonth() < fechaNacimiento.getMonth() || (hoy.getMonth() === fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate())) {
        this.edad--;
      }

      const indice = anio % 12;
      const signo = signos[indice];
      this.resultado = `Hola ${nombre} ${apellidoPaterno} ${apellidoMaterno}, tu signo zodiacal chino es: ${signo}.`;
      this.imagenSigno = imagenes[indice]; // Asigna la imagen correspondiente al signo con .png
      this.mostrarModal = true; // Muestra el modal
    } else {
      this.resultado = "Por favor, completa todos los campos correctamente.";
      this.mostrarModal = true; // Muestra el modal con el error
    }
  }

  // Función para cerrar el modal
  cerrarModal(): void {
    this.mostrarModal = false;
  }
}
