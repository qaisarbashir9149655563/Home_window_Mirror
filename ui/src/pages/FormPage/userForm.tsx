import React from "react";
import Form from "@rjsf/core";
import "./userForm.scss";
import { schemaUserForm, uiSchemaUserForm } from "./config";
import validator from "@rjsf/validator-ajv8";
import { createUserDetail } from "../../services/userDetail.service";
export const UserForm = () => {
  // const [formData, setFormData] = React.useState({});
  const handleSubmit = async ({ formData }: any) => {
    // setFormData(formData);
    const res = await createUserDetail(formData);
    console.log(res, "res");
  };
  // const handleOnChange = ({ formData }: any) => {
  // console.log(formData, "formData on change");
  // on change i can use here
  // };

  return (
    <Form
      schema={schemaUserForm}
      uiSchema={uiSchemaUserForm}
      validator={validator}
      onSubmit={handleSubmit}
    />
  );
};
