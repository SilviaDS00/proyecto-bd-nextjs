import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    username: "",
    name: "",
    password: "",
  };
}
//Validacion del formulario
export function validationSchema() {
  return Yup.object({
    email: Yup.string().email(true).required("Debes introducir un email"),
    username: Yup.string().required("Debes intruducir un usuario"),
    name: Yup.string().required("Introduce un nombre"),
    password: Yup.string().required("Introduce una contraseña"),
  });
}
