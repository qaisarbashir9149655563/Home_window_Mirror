import React from "react";
// import Form from "@rjsf/core";

export const userForm = () => {
  const schema: any = {
    type: "object",
    properties: {
      name: { type: "string" },
      email: { type: "string", format: "email" },
      age: { type: "integer" },
    },
  };

  const uiSchema = {
    // Define any custom UI options if needed
  };
  return <div>{/* <Form schema={schema} uiSchema={uiSchema} /> */}</div>;
};
