// components/FormTest.js
import React, { useState } from "react";
import { Form as SemanticForm, Button } from "semantic-ui-react";
import { useRouter } from "next/router";
import { PageOne, PageTwo } from "./Pages/index.js";
import * as styles from "./FormTest.module.scss";	

export function FormTest({ children, onSubmit, ...props }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [currentPage, setCurrentPage] = useState(1); // Estado para controlar la página actual
  const router = useRouter();

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

    // Cambiar a la siguiente página
    setCurrentPage(currentPage + 1);
  };

  const goBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      router.back(); // Volver a la página anterior si estás en la primera página del formulario
    }
  };

  return (
    <SemanticForm onSubmit={onSubmit || handleSubmit} {...props} className={styles.formStyle}>
      {currentPage === 1 && <PageOne handleChange={handleChange} />}
      {currentPage === 2 && (
        <>
      <PageTwo />
      <div className={styles.pageTwoButtons}>
      <Button type="button" onClick={goBack} className={styles.backButton}>Volver</Button>
      <Button type="submit">Enviar Respuestas</Button>
      </div>
      </>)}
      {currentPage !== 2 && (
        <div className={styles.nextButtonContainer}>
      <Button type="submit" className={styles.nextButton}>Siguiente</Button>
      </div>
      )}
    </SemanticForm>
  );
}

// Re-exporta los componentes Semantic-UI-React que estás utilizando
export { Button };
