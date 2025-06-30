import FormComp from '../components/signupform'
import logo from '../../assets/logo.jpg'

function SignIn() {
  return (
    <>
    <div className='wrapper-one flex bg-palegoldenrod min-h-screen w-screen min-w-screen items-center'>
      <div className="flex flex-col lg:flex-row items-center w-full h-full justify-center">
        <img src={logo} alt="Logo" />
        <FormComp name='Sign In' variant="signup"/>
      </div>
    </div>
    </>
  );
}

export default SignIn
