import { FieldErrors, UseFormRegister, ValidationRule } from 'react-hook-form';

interface IValidationRules {
  required: boolean;
  pattern: ValidationRule<RegExp>;
};

interface IValidation {
  rules: IValidationRules;
  message: string;
};

interface IInputProps {
  type: string;
  name: keyof ILoginInputs;
  validation: IValidation;
  register: UseFormRegister<ILoginInputs>;
  errors: FieldErrors;
}
