import { useForm, SubmitHandler } from 'react-hook-form';
import { validations } from '../../../utils/validations';
import Input from '../../../components/Input';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInputs>();

  const onSubmit: SubmitHandler<ILoginInputs> = (data, event) => {
    event?.target.reset()
    console.log(data);
  }

  return (
    <form
      className='flex flex-col border rounded shadow-md px-10 py-6'
      onSubmit={handleSubmit(onSubmit)}>
      <h2 className='text-2xl font-semibold text-center mb-5'>
        Registration form
      </h2>
      <div className='w-full flex gap-4'>
        <div className='w-full flex flex-col'>
          <Input
            type='text'
            name='name'
            validation={validations.name}
            register={register}
            errors={errors}
          />
        </div>
        <div className='w-full flex flex-col'>
          <Input
            type='text'
            name='surname'
            validation={validations.surname}
            register={register}
            errors={errors}
          />
        </div>
      </div>
      <Input
        type='email'
        name='email'
        validation={validations.email}
        register={register}
        errors={errors}
      />
      <Input
        type='tel'
        name='telephone'
        validation={validations.telephone}
        register={register}
        errors={errors}
      />
      <Input
        type='text'
        name='location'
        validation={validations.location}
        register={register}
        errors={errors}
      />
      <button
        className='text-white text capitalize bg-blue-medium rounded shadow p-1 mb-6'
        type='submit'>
        create account
      </button>
      <div className='relative w-full flex items-center justify-center border-t border-t-blue-medium mb-6'>
        <span className='absolute font-semiblod bg-white px-5 -mt-1'>
          or sign up with
        </span>
      </div>
      <div className='flex gap-4'>
        <button className='w-full text-white text capitalize bg-[#3b5998] rounded shadow p-1 mb-6'>
          Facebook
        </button>
        <button className='w-full text-white text capitalize bg-[#fbbc05] rounded shadow p-1 mb-6'>
          Google
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
