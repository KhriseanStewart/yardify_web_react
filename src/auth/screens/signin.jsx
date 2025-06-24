import FormComp from '../components/form'
import logo from '../../assets/logo.jpg'

function SignIn() {
  return (
    <>
    <div className='wrapper-one flex bg-palegoldenrod min-h-screen w-screen min-w-screen'>
      <div className="flex flex-col lg:flex-row items-center w-full h-full">
        <img src={logo} alt="Logo" />
        <FormComp name='Sign In' variant="signin"/>
      </div>
    </div>
    </>
  );
}

export default SignIn
