// components/MyForm.js

import React, { useState } from "react";
import { Form, Input, TextArea, Button, Radio } from "semantic-ui-react";
import styles from "./Page.module.scss";

export function PageTwo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
        <Form.Group>
          <Form.Field>Muy en desacuerdo</Form.Field>
          <Form.Radio label="0" name='first-asir'/>
          <Form.Radio label="1" name='first-asir'/>
          <Form.Radio label="2" name='first-asir'/>
          <Form.Radio label="3" name='first-asir'/>
          <Form.Radio label="4" name='first-asir'/>
          <Form.Radio label="5" name='first-asir'/>
          <Form.Field>Muy de acuerdo</Form.Field>
        </Form.Group>
      </Form.Field>

      <Form.Field>
        <label>
          ¿Te genera curiosidad aprender sobre el mundo de la ciberseguridad y
          hacking ético?
        </label>
        <Form.Group>
          <Form.Field>Muy en desacuerdo</Form.Field>
          <Form.Radio label="0" name='second-asir'/>
          <Form.Radio label="1" name='second-asir'/>
          <Form.Radio label="2" name='second-asir'/>
          <Form.Radio label="3" name='second-asir'/>
          <Form.Radio label="4" name='second-asir'/>
          <Form.Radio label="5" name='second-asir'/>
          <Form.Field>Muy de acuerdo</Form.Field>
        </Form.Group>
      </Form.Field>

      <Form.Field>
        <label>
          He sentido atracción en cómo los programas informáticos incluyen
          distintos enfoques como el conocimiento de áreas matemáticas,
          estadística, ciencias…
        </label>
        <Form.Group>
          <Form.Field>Muy en desacuerdo</Form.Field>
          <Form.Radio label="0" name='first-dam'/>
          <Form.Radio label="1" name='first-dam'/>
          <Form.Radio label="2" name='first-dam'/>
          <Form.Radio label="3" name='first-dam'/>
          <Form.Radio label="4" name='first-dam'/>
          <Form.Radio label="5" name='first-dam'/>
          <Form.Field>Muy de acuerdo</Form.Field>
        </Form.Group>
      </Form.Field>

      <Form.Field>
        <label>
          Siento curiosidad por cómo funcionan los datos y la gestión de
          procesos que ocurren detrás de un sitio web o aplicación.
        </label>
        <Form.Group>
          <Form.Field>Muy en desacuerdo</Form.Field>
          <Form.Radio label="0" name='second-dam'/>
          <Form.Radio label="1" name='second-dam'/>
          <Form.Radio label="2" name='second-dam'/>
          <Form.Radio label="3" name='second-dam'/>
          <Form.Radio label="4" name='second-dam'/>
          <Form.Radio label="5" name='second-dam'/>
          <Form.Field>Muy de acuerdo</Form.Field>
        </Form.Group>
      </Form.Field>

      <Form.Field>
        <label>
          Pienso que se me daría bien elegir una buena estructura para montar
          una página web.
        </label>
        <Form.Group>
          <Form.Field>Muy en desacuerdo</Form.Field>
          <Form.Radio label="0" name='first-daw'/>
          <Form.Radio label="1" name='first-daw'/>
          <Form.Radio label="2" name='first-daw'/>
          <Form.Radio label="3" name='first-daw'/>
          <Form.Radio label="4" name='first-daw'/>
          <Form.Radio label="5" name='first-daw'/>
          <Form.Field>Muy de acuerdo</Form.Field>
        </Form.Group>
      </Form.Field>

      <Form.Field>
        <label>
          Sientes curiosidad por cómo está hecha una página web, su estética y
          diseño me resultan lo más interesante.
        </label>
        <Form.Group>
          <Form.Field>Muy en desacuerdo</Form.Field>
          <Form.Radio label="0" name='second-daw'/>
          <Form.Radio label="1" name='second-daw'/>
          <Form.Radio label="2" name='second-daw'/>
          <Form.Radio label="3" name='second-daw'/>
          <Form.Radio label="4" name='second-daw'/>
          <Form.Radio label="5" name='second-daw'/>
          <Form.Field>Muy de acuerdo</Form.Field>
        </Form.Group>
      </Form.Field>
      <Form.Group inline>
        {/* <Button type="submit">Enviar</Button> */}
      </Form.Group>
    </Form>
  );
}
