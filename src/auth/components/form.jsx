import './style.css'
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword } from '../../firebase/auth';
import { useState } from 'react';
import { useAuth } from '../../contexts/authcontext';

function FormComp({name, variant}) {
  const { userLoggedIn } = useAuth()
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSigningIn, setisSigningIn] = useState('')
  const [isRegistering, setisRegistering] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate();

const onSignIn = async (e) => {
  e.preventDefault();
  setErrorMessage(''); // reset previous error message
  if (!userLoggedIn) {
    setisSigningIn(true); // start loading indicator
      await doSignInWithEmailAndPassword(email, password);
      console.log("Wait");
      // On success, navigate
      navigate('/discover');
  } else {
    console.log("Error");
  }
};

const onRegister = async (e) => {
  e.preventDefault();
  setErrorMessage(''); // reset previous error message
  if (!userLoggedIn) {
    try{
      setisSigningIn(true); // start loading indicator
      await doCreateUserWithEmailAndPassword(email, password);
      console.log("Wait");
      // On success, navigate
      navigate('/');
    } catch (error){
      console.log('Error registering', error)
    }
  }
};
  const isSignUp = variant === 'signin';

  return (
    <>
      {userLoggedIn && (<Navigate to={'/discover'} replace={true}/> )}
    <form className="form max-w-screen w-full sm:max-w-3xs md:max-w-96">
      <p className="title">{name}</p>
      {isSignUp && (
          <label>
            <input className="input" type="text" placeholder="" required/>
            <span>Name</span>
          </label> 
        )}
          <label>
            <input className="input" type="email" placeholder="" value={email} onChange={(e) => { setEmail(e.target.value) }} required/>
            <span>Email</span>
          </label> 

          <label>
              <input className="input" type="password" placeholder="" value={password} onChange={(e) => { setPassword(e.target.value) }} required/>
              <span>Password</span>
          </label>
      {isSignUp && (
          <label>
              <input className="input" type="password" placeholder="" required/>
              <span>Confirm Password</span>
          </label>
        )}
          <label className='flex flex-row items-center justify-center'>
              <input className='mr-2.5 w-5 h-5 bg-white' type="checkbox" name="" id="" />
              <span>Remember me</span>
          </label>

        {errorMessage && (
          <span className='text-red-600 font-bold'>{errorMessage}</span>
        )}
      {isSignUp ? (
        <button type="submit" disabled={isSigningIn} className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isSigningIn ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`} onClick={onRegister} >
          {isSigningIn ? 'Signing up...' : 'Sign In'}
        </button>
          ): (
          <button type="submit" disabled={isSigningIn} className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isSigningIn ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`} onClick={onSignIn}>
            {isSigningIn ? 'Logging In...' : 'Log In'}
          </button>
          )}

      {isSignUp ? (
          <p className="signin">Already have an acount ? <Link to="/">Log In</Link> </p>
        ):
        (
         <p className="signin">Don't have an acount ? <Link to="/signup">Sign up</Link> </p>
         )}
      </form>
      </>
  )
}

export default FormComp

