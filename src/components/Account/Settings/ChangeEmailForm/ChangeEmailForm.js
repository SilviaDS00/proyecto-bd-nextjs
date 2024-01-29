import * as styles from "./ChangeEmailForm.module.scss";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ChangeEmailForm.form";
import { User } from "@/api";
import { useAuth } from "@/hooks";

const userCtrl = new User();

export function ChangeEmailForm() {
  const { user, updateUser } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, { email: formValue.email });
        updateUser("email", formValue.email);
        formik.handleReset;
      } catch (error) {
        throw error;
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <label>Cambiar correo electrónico</label>
      <div className={styles.content}>
        <Form.Input
          name="email"
          placeholder="Nuevo correo electrónico"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <Form.Input
          name="repeatEmail"
          placeholder="Repetir el correo electrónico"
          value={formik.values.repeatEmail}
          onChange={formik.handleChange}
          error={formik.errors.repeatEmail}
        />
        <Form.Button type="submit" loading={formik.isSubmitting}>
          Cambiar
        </Form.Button>
      </div>
    </Form>
  );
}
