import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';  // Reemplaza con la URL de tu servicio API

export class Modelo {
  async predecir(datosCuestionario) {
    try {
      const respuesta = await axios.post(`${API_URL}`, {
        datosCuestionario,
      });
      return respuesta.data.prediccion;
    } catch (error) {
      console.error('Error al realizar la predicción:', error);
      throw error;  // Puedes manejar el error según tus necesidades
    }
  }
}
