import LoginForm from './components/LoginForm';
import logo from '../../assets/images/logo.png';

const Login = () => {
  return (
    <div className='h-full flex justify-center items-center'>
      <section className='lg:w-1/3 md:w-1/2 xs:w-full'>
        <div className='flex items-center justify-center'>
          <img
            className='w-30 h-20'
            src={logo}
            alt='logo'
          />
          <div className='border-l border-blue-medium pl-4 ml-2'>
            <h4 className='text-3xl font-extrabold uppercase tracking-widest text-blue'>
              Everridge
            </h4>
            <p className='text-[9px] uppercase text-blue'>
              Charting the Path to Tomorrow, Today
            </p>
          </div>
        </div>
        <LoginForm />
      </section>
    </div>
  );
};

export default Login;
