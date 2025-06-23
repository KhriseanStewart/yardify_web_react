import './style.css'
import { useNavigate } from 'react-router-dom';

function FormComp() {
const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission
    // Add your form validation or submission logic here

    // Navigate to another page, e.g., "/dashboard"
    navigate('/discover');
  };
  return (
    <>
<form className="form" onSubmit={handleSubmit}>
    <p className="title">Log In</p>
    <label>
        <input className="input" type="email" placeholder="" required=""/>
        <span>Email</span>
    </label> 
        
    <label>
        <input className="input" type="password" placeholder="" required=""/>
        <span>Password</span>
    </label>
    <label className='flex flex-row items-center justify-center'>
        <input className='mr-2.5 w-5 h-5 bg-white' type="checkbox" name="" id="" />
        <span>Remember me</span>
    </label>
    <button class="submit" type='submit'>Submit</button>
    <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>
    </>
  )
}

export default FormComp

