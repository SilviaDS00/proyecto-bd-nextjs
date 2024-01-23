import { Form, Message } from "semantic-ui-react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { initialValues, validationSchema } from "./RegisterForm.form";
import { Auth } from "@/api";

const authCtrl = new Auth();

export function RegisterForm() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: async (formValues, { setSubmitting, setStatus }) => {
      try {
        await authCtrl.register(formValues);
        router.push("/join/sign-in");
        console.log("todo ok");
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setStatus(error.response.data.message);
        } else {
          setStatus("El email o el usuario ya existe.");
        }
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      {formik.status && <Message negative content={formik.status} />}

      <Form.Group widths="equal">
        <Form.Input
          fluid
          name="email"
          type="text"
          placeholder="Correo electrónico"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null
          }
        />
        <Form.Input
          fluid
          name="username"
          type="text"
          placeholder="Nombre de usuario"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={
            formik.touched.username && formik.errors.username
              ? formik.errors.username
              : null
          }
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input
          fluid
          name="name"
          type="text"
          placeholder="Nombre y apellidos"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={
            formik.touched.name && formik.errors.name
              ? formik.errors.name
              : null
          }
        />
        <Form.Input
          fluid
          name="password"
          type="password"
          placeholder="Contraseña"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
        />
      </Form.Group>

      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        Registrarse
      </Form.Button>
    </Form>
  );
}
