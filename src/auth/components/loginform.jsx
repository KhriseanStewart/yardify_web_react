import './style.css'
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { doSignInWithEmailAndPassword } from '../../firebase/auth';
import { useState } from 'react';
import { useAuth } from '../../contexts/authcontext';

function FormComp({name}) {
  const { userLoggedIn } = useAuth()
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSigningIn, setisSigningIn] = useState('')
  const [errorMessage, setErrorMessage] = useState(false)

  const [message, setMessage] = useState('')
  
  const navigate = useNavigate();

  function getFirebaseErrorMessage(error) {
  // Check if error has a code property (common in Firebase errors)
  if (error.message) {
    switch (error.message) {
      case 'Firebase: Error (auth/email-already-in-use)':
        return 'This email is already in use.';
      case 'Firebase: Error (auth/invalid-credential).':
        return 'The email address or password is invalid.';
      case 'Firebase: Error (auth/user-disabled)':
        return 'Firebase: Error (This user has been disabled.)';
      case 'Firebase: Error (auth/user-not-found)':
        return 'No user found with this email.';
      case 'Firebase: Error (auth/wrong-password)':
        return 'Incorrect password.';
      case 'Firebase: Error (auth/weak-password)':
        return 'Password is too weak.';
      // Add more Firebase error codes as needed
      default:
        return  'An error occurred.';
    }
  }
  // Fallback for errors without a code
  return error.message || "Error Happened";
}
  
  
  const handleForm = async (e) => {
    e.preventDefault();
    try{
      setisSigningIn(true)
      await doSignInWithEmailAndPassword(email, password);
      navigate('/discover');
    }catch(e){
      setisSigningIn(false)
      setErrorMessage(true)
      const message = getFirebaseErrorMessage(e);
      setMessage(message);
    }
  };

  return (
    <>
    {userLoggedIn && (<Navigate to={'/discover'} replace={true}/> )}
    <form className="form max-w-screen w-full sm:max-w-3xs md:max-w-96" onSubmit={handleForm}>
      <p className="title">{name}</p>
          <label>
            <input className="input" type="email" placeholder="" value={email} onChange={(e) => { setEmail(e.target.value) }} required/>
            <span>Email</span>
          </label> 

          <label>
              <input className="input" type="password" placeholder="" value={password} onChange={(e) => { setPassword(e.target.value) }} required/>
              <span>Password</span>
          </label>

          <label className='flex flex-row items-center justify-center'>
              <input className='mr-2.5 w-5 h-5 bg-white' type="checkbox" name="" id="" />
              <span>Remember me</span>
          </label>

        {errorMessage && (
          <span className='text-red-600 font-bold'>{message}</span>
        )}

          <button type="submit" disabled={isSigningIn} className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isSigningIn ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}>
            {isSigningIn ? 'Logging In...' : 'Log In'}
          </button>



         <p className="signin">Don't have an acount ? <Link to="/signup">Sign up</Link> </p>
    </form>
      </>
  )
}
export default FormComp

