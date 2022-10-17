import { InputHTMLAttributes, FC } from "react";
import { Group, Input, FormInputLabel } from "./form-input.styles";

type FormInPutProps = { label: string} & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<FormInPutProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean(otherProps.value && typeof otherProps.value === 'string' && otherProps.value.length)}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
}

export default FormInput;