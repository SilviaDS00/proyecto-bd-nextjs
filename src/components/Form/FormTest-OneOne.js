import React, { useState } from "react";
import { Form, Input, Button, Progress } from "semantic-ui-react";
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
      label: "Edad",
      input: true,
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
      options: [
        "Salida laboral",
        "Continuar mi formación",
        "Especialización profesional",
      ],
    },
    {
      label:
        "¿Te gustaría trabajar para una empresa o emprender por tu cuenta?",
      options: [
        "Trabajar para una empresa",
        "Continuar mi formación",
        "Emprender por mi cuenta",
      ],
    },
    {
      label:
        "Sientes interés por el mantenimiento de sistemas, entonos de red, hardware y software.",
      options: [1, 2, 3, 4, 5],
    },
    {
      label:
        "¿Te genera curiosidad aprender sobre el mundo de la ciberseguridad y hacking ético?",
      options: [1, 2, 3, 4, 5],
    },
    {
      label:
        "He sentido atracción en cómo los programas informáticos incluyen distintos enfoques como el conocimiento de áreas matemáticas, estadística, ciencias…",
      options: [1, 2, 3, 4, 5],
    },
    {
      label:
        "Siento curiosidad por cómo funcionan los datos y la gestión de procesos que ocurren detrás de un sitio web o aplicación.",
      options: [1, 2, 3, 4, 5],
    },
    {
      label:
        "Pienso que se me daría bien elegir una buena estructura para montar una página web.",
      options: [1, 2, 3, 4, 5],
    },
    {
      label:
        "Sientes curiosidad por cómo está hecha una página web, su estética y diseño me resultan lo más interesante.",
      options: [1, 2, 3, 4, 5],
    },
  ];

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleRadioChange = (value) => {
    setFormData({
      ...formData,
      [`question${currentQuestion}`]: value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Validación específica para el código postal
    if (name === "question3") {
      // Asegurar que solo sean dígitos y exactamente 5 dígitos
      const validPostalCode = /^\d{5}$/.test(value);
      
      if (validPostalCode || value === "") {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      // Para otras preguntas, simplemente actualiza el estado
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const calculateProgress = () => {
    const progress = (currentQuestion / questions.length) * 100;
    return progress.toFixed(2);
  };

  const handleNextQuestion = () => {
    // Verificar si se ha respondido a la pregunta actual antes de avanzar
    if (formData[`question${currentQuestion}`] !== undefined) {
      // Guardar el estado actual antes de avanzar
      const updatedFormData = { ...formData };
      setFormData(updatedFormData);
      
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Muestra una alerta o realiza alguna acción para indicar que se debe responder la pregunta actual
      alert("Por favor, responde la pregunta actual antes de continuar.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className={styles.formContainer}>
    <Form onSubmit={handleSubmit} className={styles.formStyle}>
      <div className={styles.progressContainer}>
        <Progress percent={calculateProgress()} progress success />
      </div>
      <div className={styles.currentPage}>
        Pregunta {currentQuestion} de {questions.length}
      </div>
      
      {questions.map(
        (question, index) =>
          index + 1 === currentQuestion && (
            <div key={index}>
              <div className={styles.questionContainer}>
              <Form.Field>
                <label>{question.label}</label>
                {question.options ? (
                  <Form.Group inline>
                    <div className={styles.radioColumn}>
                      {question.options.map((option, optionIndex) => (
                        <Form.Radio
                          key={optionIndex}
                          label={option}
                          onChange={() => handleRadioChange(option)}
                          checked={
                            formData[`question${currentQuestion}`] === option
                          }
                        />
                      ))}
                    </div>
                  </Form.Group>
                ) : question.input ? (
                  <Form.Input
                    placeholder={question.label}
                    name={`question${currentQuestion}`}
                    onChange={handleInputChange}
                  />
                ) : null}
              </Form.Field>
              </div>
              <div className={styles.buttons}>
                <div>
                  {currentQuestion > 1 && (
                    <Button
                      onClick={() => setCurrentQuestion(currentQuestion - 1)}
                    >
                      Volver
                    </Button>
                  )}
                </div>
                <div>
                  {currentQuestion < questions.length && (
                    <Button onClick={handleNextQuestion}>Siguiente</Button>
                  )}
                </div>
              </div>
              {currentQuestion === questions.length && (
                <div className={styles.submitButtonContainer}>
                  <Button type="submit" className={styles.submitButton}>
                    Enviar
                  </Button>
                </div>
              )}
            </div>
          )
      )}
    </Form>
    </div>
  );
}
