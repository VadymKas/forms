import { IInputProps } from './input.types';

const Input: React.FC<IInputProps> = ({
  type,
  name,
  validation,
  register,
  errors,
}) => {
  const { rules, message } = validation;

  return (
    <label
      className='relative flex flex-col font-medium capitalize mb-2'
      htmlFor={name}>
      {`${name}${rules.required ? '*' : ''}`}
      <input
        className='w-full border rounded py-1 px-2 mb-4'
        type={type}
        id={name}
        {...register(name, rules)}
      />
      {errors.name && rules.required && (
        <span className='absolute bottom-0 text-xs font-normal text-red-600'>
          {message}
        </span>
      )}
    </label>
  );
};

export default Input;
