import FormComp from '../components/form'
import logo from '../../assets/logo.jpg'

function LogIn() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center w-full h-full">
        <img src={logo} alt="Logo" />
        <FormComp />
      </div>
    </>
  );
}

export default LogIn
