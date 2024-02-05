// components/MyForm.js

import React, { useState } from "react";
import { Form, Input, TextArea, Button, Radio } from "semantic-ui-react";
import styles from "./Page.module.scss";

export function PageOne() {
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
    <Form onSubmit={handleSubmit} >
      <Form.Field>
        <label>Edad:</label>
        <Form.Input
          placeholder="Edad"
          name="name"
          onChange={handleChange}
          type="number"
        />
      </Form.Field>

      <Form.Field>
        <label>Género:</label>
        <Form.Group inline>
          <div>
            <Form.Radio label="Masculino" name="gender" />
            <Form.Radio label="Femenino" name="gender"/>
            <Form.Radio label="Otro" name="gender"/>
            <Form.Radio label="Prefiero no decirlo" name="gender"/>
          </div>
        </Form.Group>
      </Form.Field>

      <Form.Field>
        <label>Código postal</label>
        <Form.Input
          placeholder="Código postal"
          name="cp"
          onChange={handleChange}
          type="number"
        />
      </Form.Field>

      <Form.Field>
        <label>
          ¿Qué modalidad de trabajo te gustaría en el mundo laboral?
        </label>
        <Form.Group inline>
          <div>
            <Form.Radio label="Presencial" name="modal"/>
            <Form.Radio label="Remoto" name="modal"/>
            <Form.Radio label="Híbrido" name="modal"/>
          </div>
        </Form.Group>
      </Form.Field>

      <Form.Field>
        <label>Estudios de acceso al CFGS</label>
        <Form.Group inline>
          <div>
            <Form.Radio label="Bachillerato" name="studies"/>
            <Form.Radio label="Prueba de acceso a Grado Superior" name="studies"/>
            <Form.Radio label="Otros" name="studies"/>
          </div>
        </Form.Group>
      </Form.Field>

      <Form.Field>
        <label>Motivo por el que quieres estudiar un CFGS</label>
        <Form.Group inline>
          <div>
            <Form.Radio label="Salida laboral" name="reason"/>
            <Form.Radio label="Continuar mi formación" name="reason"/>
            <Form.Radio label="Especialización profesional" name="reason"/>
          </div>
        </Form.Group>
      </Form.Field>

      <Form.Field>
        <label>
          ¿Te gustaría trabajar para una empresa o emprender por tu cuenta?
        </label>
        <Form.Group inline>
          <div>
            <Form.Radio label="Trabajar para una empresa" name='undertake'/>
            <Form.Radio label="Continuar mi formación" name='undertake'/>
            <Form.Radio label="Emprender por mi cuenta" name='undertake'/>
          </div>
        </Form.Group>
      </Form.Field>

      {/* <Button type="submit">Enviar</Button> */}
    </Form>
  );
}
