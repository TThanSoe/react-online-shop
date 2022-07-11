import { FormGroup, Input, FormLabel } from "./form-component.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormGroup>
      <Input {...otherProps} />
      {label && <FormLabel shrink={otherProps.value.length}>{label}</FormLabel>}
    </FormGroup>
  );
};

export default FormInput;
