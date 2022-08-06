import React from "react";
import { Group, Input, FormInputLabel } from "./form-input.styles.jsx";

export default function FormInput({ label, ...otherProps }) {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={otherProps.value.lenght}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
}
