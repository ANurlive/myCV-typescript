import Button from "@/components/Button/Button";
import type { StoreDispatch } from "@/store/rootReducer";
import { saveSkillThunk } from "@/store/skills/thunk";
import type { SkillType } from "@/store/skills/types";
import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import styles from "./SkillForm.module.css";

export const SkillForm: React.FC = () => {
  const dispatch = useDispatch<StoreDispatch>();
  const initialValues = {
    skillName: "",
    skillRange: "",
  };

  //Схема валидации с помощью Yup
  const validationSchema = Yup.object({
    skillName: Yup.string().required("Skill name is a required field"),
    skillRange: Yup.number()
      .typeError("Skill range must be a 'number' type")
      .required("Skill range is a required field")
      .min(10, "Skill range must be greater than or equal to 10")
      .max(100, "Skill range must be less than or equal to 100"),
  });

  const handleSubmit = (
    values: SkillType,
    { resetForm }: FormikHelpers<SkillType>
  ) => {
    console.log("add skill button pressed");
    dispatch(
      saveSkillThunk({ ...values, skillRange: Number(values.skillRange) })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues as SkillType}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isValid, dirty, errors, touched }) => (
        <Form className={styles.form}>
          <div>
            <label
              htmlFor="skillName"
              className={`${styles.labels} body-norm-style`}
            >
              Skill name
            </label>
            <Field
              id="skillName"
              name="skillName"
              type="text"
              className={
                errors.skillName && touched.skillName
                  ? styles.fieldWithError
                  : styles.fields
              }
              placeholder="Enter skill name"
            />
            <ErrorMessage
              name="skillName"
              component="div"
              className={styles.errorMessage}
            />
          </div>

          <div>
            <label
              htmlFor="skillRange"
              className={`${styles.labels} body-norm-style`}
            >
              Skill range
            </label>
            <Field
              id="skillRange"
              name="skillRange"
              type="string"
              className={
                errors.skillRange && touched.skillRange
                  ? styles.fieldWithError
                  : styles.fields
              }
              placeholder="Enter skill range"
            />
            <ErrorMessage
              name="skillRange"
              component="div"
              className={styles.errorMessage}
            />
          </div>

          {/* Кнопка будет отключена, если форма невалидна или ещё не изменена */}
          <Button
            text="Add skill"
            type="submit"
            disabled={!(isValid && dirty)}
            className={styles.addSkillButton}
          />
        </Form>
      )}
    </Formik>
  );
};
