// components/MyForm.js

import React, { useState } from "react";
import { Form, Input, TextArea, Button, Radio } from "semantic-ui-react";
import styles from "./FormTest.module.scss";

export function FormTest() {
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
        <label>Edad:</label>
        <Form.Group className={styles.radioColumn}>
          <Form.Radio label="16 - 18" />
          <Form.Radio label="19 - 25" />
          <Form.Radio label="26 - 35" />
          <Form.Radio label="+35" />
        </Form.Group>
      </Form.Field>

      <Form.Field>
        <label>Género:</label>
        <Form.Group inline>
          <Form.Radio label="Masculino" />
          <Form.Radio label="Femenino" />
          <Form.Radio label="Otro" />
          <Form.Radio label="Prefiero no decirlo" />
        </Form.Group>
      </Form.Field>

      <Form.Field>
        <label>Código postal</label>
        <Input
          placeholder="Código postal"
          name="name"
          onChange={handleChange}
        />
      </Form.Field>

      <Form.Field>
        <label>
          ¿Qué modalidad de trabajo te gustaría en el mundo laboral?
        </label>
        <Form.Group inline>
          <Form.Radio label="Presencial" />
          <Form.Radio label="Remoto" />
          <Form.Radio label="Híbrido" />
        </Form.Group>
      </Form.Field>

      <Form.Field>
        <label>Estudios de acceso al CFGS</label>
        <Form.Group inline>
          <Form.Radio label="Bachillerato" />
          <Form.Radio label="Prueba de acceso a Grado Superior" />
          <Form.Radio label="Otros" />
        </Form.Group>
      </Form.Field>

      <Form.Field>
        <label>Motivo por el que quieres estudiar un CFGS</label>
        <Form.Group inline>
          <Form.Radio label="Salida laboral" />
          <Form.Radio label="Continuar mi formación" />
          <Form.Radio label="Especialización profesional" />
        </Form.Group>
      </Form.Field>

      <Form.Field>
        <label>
          ¿Te gustaría trabajar para una empresa o emprender por tu cuenta?
        </label>
        <Form.Group inline>
          <Form.Radio label="Trabajar para una empresa" />
          <Form.Radio label="Continuar mi formación" />
          <Form.Radio label="Emprender por mi cuenta" />
        </Form.Group>
      </Form.Field>

      <Button type="submit">Enviar</Button>
    </Form>
  );
}
