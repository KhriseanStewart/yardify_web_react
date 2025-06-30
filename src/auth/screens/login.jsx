import FormComp from '../components/loginform'
import logo from '../../assets/logo.jpg'
import './login.css'

function LogIn() {
  return (
    <>
    <div className='wrapper-one ease-in duration-500 flex bg-palegoldenrod min-h-screen w-screen min-w-screen justify-center items-center'>
      <div className="flex flex-col lg:flex-row items-center w-full h-full justify-center">
        <img src={logo} alt="Logo" />
        <FormComp name='Log In' variant="login"/>
      </div>
    </div>
    </>
  );
}

export default LogIn
