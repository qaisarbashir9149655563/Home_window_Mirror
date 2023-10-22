import { RJSFSchema } from "@rjsf/utils";

export const schemaUserForm: RJSFSchema = {
  type: "object",
  properties: {
    name: { type: "string", title: "Name" },
    email: { type: "string", format: "email", title: "Email" },
    phoneNumber: { type: "number", title: "Phone Number" },
    address: { type: "string", title: "Address" },
  },
};
export const uiSchemaUserForm = {
  "ui:classNames": "custom-class-userfrom",
  name: {
    "ui:classNames": "custom-class-name",
    "ui:autofocus": true,
    "ui:emptyValue": "",
    required: true,
  },
  email: {
    "ui:classNames": "custom-class-email",
    "ui:widget": "email",
    "ui:help": "Hint: this is an email",
    required: true,
  },
  phoneNumber: {
    "ui:classNames": "custom-class-phoneNumber",
    "ui:help": "Hint: this is an phone Number",
    required: true,
  },
  address: {
    "ui:classNames": "custom-class-address",
    "ui:widget": "textarea",
    "ui:help": "Hint: this is an address",
    required: true,
  },
};
