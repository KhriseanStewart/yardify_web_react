import FormComp from '../components/form'
import logo from '../../assets/logo.jpg'
import './login.css'

function LogIn() {
  return (
    <>
    <div className='wrapper-one ease-in duration-500 flex bg-palegoldenrod min-h-screen w-screen min-w-screen'>
      <div className="flex flex-col lg:flex-row items-center w-full h-full">
        <img src={logo} alt="Logo" />
        <FormComp name='Log In' variant="signup"/>
      </div>
    </div>
    </>
  );
}

export default LogIn
