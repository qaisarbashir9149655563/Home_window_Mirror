import React from "react";
import Form from "@rjsf/core";
import axios from "axios";
import "./userForm.scss";
import { schemaUserForm, uiSchemaUserForm } from "./config";
import { useNavigate } from "react-router-dom";
import validator from "@rjsf/validator-ajv8";
import { createUserDetail } from "../../services/userDetail.service";
import { sendMail } from "../../services/sendSMSAndEmail.service";
export const UserForm = () => {
  const history = useNavigate();

  const handleSubmit = async ({ formData }: any) => {
    try {
      if (
        formData.name &&
        formData.email &&
        formData.phoneNumber &&
        formData.address
      ) {
        await sendMail(formData);
        await createUserDetail(formData);
        history("/thankyou");
        formData = {};
      }
    } catch (error) {
      console.log(
        error,
        "error while creating user detail in userForm component"
      );
    }
  };

  return (
    <Form
      schema={schemaUserForm}
      uiSchema={uiSchemaUserForm}
      validator={validator}
      onSubmit={handleSubmit}
    />
  );
};
