// components/MyForm.js

import React, { useState } from "react";
import { Form, Input, TextArea, Button, Radio } from "semantic-ui-react";
import styles from "./FormTest.module.scss";

export function PageTwo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Puedes agregar lógica adicional para el envío del formulario aquí
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.formStyle}>
      <Form.Field>
        <label>Responde lo que más encaje contigo.</label>
        <label>Siendo el 0 (muy en desacuerdo) y el 5 (muy de acuerdo).</label>
      </Form.Field>
      <Form.Field>
        <label>
          Sientes interés por el mantenimiento de sistemas, entonos de red,
          hardware y software.
        </label>
        <Form.Group className={styles.radioColumn}>
          <Form.Field>Muy en desacuerdo</Form.Field>
          <Form.Radio label="0" />
          <Form.Radio label="1" />
          <Form.Radio label="2" />
          <Form.Radio label="3" />
          <Form.Radio label="4" />
          <Form.Radio label="5" />
          <Form.Field>Muy de acuerdo</Form.Field>
        </Form.Group>
      </Form.Field>

      <Form.Field>
        <label>
          ¿Te genera curiosidad aprender sobre el mundo de la ciberseguridad y
          hacking ético?
        </label>
        <Form.Group className={styles.radioColumn}>
          <Form.Field>Muy en desacuerdo</Form.Field>
          <Form.Radio label="0" />
          <Form.Radio label="1" />
          <Form.Radio label="2" />
          <Form.Radio label="3" />
          <Form.Radio label="4" />
          <Form.Radio label="5" />
          <Form.Field>Muy de acuerdo</Form.Field>
        </Form.Group>
      </Form.Field>

      <Form.Field>
        <label>
          He sentido atracción en cómo los programas informáticos incluyen
          distintos enfoques como el conocimiento de áreas matemáticas,
          estadística, ciencias…
        </label>
        <Form.Group className={styles.radioColumn}>
          <Form.Field>Muy en desacuerdo</Form.Field>
          <Form.Radio label="0" />
          <Form.Radio label="1" />
          <Form.Radio label="2" />
          <Form.Radio label="3" />
          <Form.Radio label="4" />
          <Form.Radio label="5" />
          <Form.Field>Muy de acuerdo</Form.Field>
        </Form.Group>
      </Form.Field>

      <Form.Field>
        <label>
          Siento curiosidad por cómo funcionan los datos y la gestión de
          procesos que ocurren detrás de un sitio web o aplicación.
        </label>
        <Form.Group className={styles.radioColumn}>
          <Form.Field>Muy en desacuerdo</Form.Field>
          <Form.Radio label="0" />
          <Form.Radio label="1" />
          <Form.Radio label="2" />
          <Form.Radio label="3" />
          <Form.Radio label="4" />
          <Form.Radio label="5" />
          <Form.Field>Muy de acuerdo</Form.Field>
        </Form.Group>
      </Form.Field>

      <Form.Field>
        <label>
          Pienso que se me daría bien elegir una buena estructura para montar
          una página web.
        </label>
        <Form.Group className={styles.radioColumn}>
          <Form.Field>Muy en desacuerdo</Form.Field>
          <Form.Radio label="0" />
          <Form.Radio label="1" />
          <Form.Radio label="2" />
          <Form.Radio label="3" />
          <Form.Radio label="4" />
          <Form.Radio label="5" />
          <Form.Field>Muy de acuerdo</Form.Field>
        </Form.Group>
      </Form.Field>

      <Form.Field>
        <label>
          Sientes curiosidad por cómo está hecha una página web, su estética y
          diseño me resultan lo más interesante.
        </label>
        <Form.Group className={styles.radioColumn}>
          <Form.Field>Muy en desacuerdo</Form.Field>
          <Form.Radio label="0" />
          <Form.Radio label="1" />
          <Form.Radio label="2" />
          <Form.Radio label="3" />
          <Form.Radio label="4" />
          <Form.Radio label="5" />
          <Form.Field>Muy de acuerdo</Form.Field>
        </Form.Group>
      </Form.Field>
      <Form.Group inline>
        {/* <Button type="submit">Enviar</Button> */}
      </Form.Group>
    </Form>
  );
}
