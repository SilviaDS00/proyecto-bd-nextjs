import React, { useState } from "react";
import { Form, Input, TextArea, Button, Radio } from "semantic-ui-react";
import styles from "./FormTest.module.scss";

export function FormTest() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [currentQuestion, setCurrentQuestion] = useState(1);

  const questions = [
    {
      label: "Edad:",
      options: ["16 - 18", "19 - 25", "26 - 35", "+35"],
    },
    {
      label: "Género:",
      options: ["Masculino", "Femenino", "Otro", "Prefiero no decirlo"],
    },
    {
      label: "Código postal",
      input: true,
    },
    {
      label: "¿Qué modalidad de trabajo te gustaría en el mundo laboral?",
      options: ["Presencial", "Remoto", "Híbrido"],
    },
    {
      label: "Estudios de acceso al CFGS",
      options: ["Bachillerato", "Prueba de acceso a Grado Superior", "Otros"],
    },
    {
      label: "Motivo por el que quieres estudiar un CFGS",
      options: ["Salida laboral", "Continuar mi formación", "Especialización profesional"],
    },
    {
      label: "¿Te gustaría trabajar para una empresa o emprender por tu cuenta?",
      options: ["Trabajar para una empresa", "Continuar mi formación", "Emprender por mi cuenta"],
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRadioChange = (value) => {
    setFormData({
      ...formData,
      [`question${currentQuestion}`]: value,
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Puedes agregar lógica adicional para el envío del formulario aquí
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.formStyle}>
      {questions.map((question, index) => (
        index + 1 === currentQuestion && (
          <div key={index}>
            <Form.Field>
              <label>{question.label}</label>
              {question.options ? (
                <Form.Group inline>
                  {question.options.map((option, optionIndex) => (
                    <Form.Radio
                      key={optionIndex}
                      label={option}
                      onChange={() => handleRadioChange(option)}
                      checked={formData[`question${currentQuestion}`] === option}
                    />
                  ))}
                </Form.Group>
              ) : question.input ? (
                <Input
                  placeholder={question.label}
                  name={`question${currentQuestion}`}
                  onChange={handleInputChange}
                />
              ) : null}
            </Form.Field>
            {currentQuestion < questions.length && (
              <Button onClick={handleNextQuestion}>Siguiente</Button>
            )}
            {currentQuestion === questions.length && (
              <Button type="submit">Enviar</Button>
            )}
          </div>
        )
      ))}
    </Form>
  );
}
