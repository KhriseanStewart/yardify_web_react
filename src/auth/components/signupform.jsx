import './style.css'
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword } from '../../firebase/auth';
import {  useState } from 'react';
import { useAuth } from '../../contexts/authcontext';
import { db } from '../../firebase/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const auth = getAuth()

function FormComp({Formname}) {
  const { userLoggedIn } = useAuth()
  
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [isSigningIn, setisSigningIn] = useState('')
  const [errorMessage, setErrorMessage] = useState(false)
  const [message, setMessage] = useState('')

  const[authPassword, checkPassword] = useState('')
  
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
      case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
        return 'Password is too weak. At least 6 characters.';
      default:
        return  'An error occurred.';
    }
  }
  return error.message || "Error Happened";
}

  
// On register
  const handleForm = async (e) => {
    e.preventDefault();
    if(authPassword === password){
      try{
        setisSigningIn(true); // start loading indicator
        await doCreateUserWithEmailAndPassword(email, password);

        const user = auth.currentUser;
        if(user) {
          const uid = user.uid;
          const userDocRef  = doc(db, 'users', uid);
          await setDoc(userDocRef, { name });
          // After adding user data, navigate
          navigate('/'); 
        }
      }catch(e){
        setisSigningIn(false)
        setErrorMessage(true)
        const message = getFirebaseErrorMessage(e);
        setMessage(message);
        console.log(e)
      }
    } else {
      setErrorMessage(true)
      setMessage("Passwords not the same.")
    }
  };

  return (
    <>
    {userLoggedIn && (<Navigate to={'/discover'} replace={true}/> )}
    <form className="form max-w-screen w-full sm:max-w-3xs md:max-w-96" onSubmit={handleForm}>
      <p className="title">{Formname}</p>
          <label>
            <input className="input" type="name" placeholder="" value={name} onChange={(e) => { setName(e.target.value) }} required/>
            <span>Name</span>
          </label> 

          <label>
            <input className="input" type="email" placeholder="" value={email} onChange={(e) => { setEmail(e.target.value) }} required/>
            <span>Email</span>
          </label> 

          <label>
              <input className="input" type="password" placeholder="" value={password} onChange={(e) => { setPassword(e.target.value) }} required/>
              <span>Password</span>
          </label>

          <label>
              <input className="input" type="authPassword" placeholder="" value={authPassword} onChange={(e) => { checkPassword(e.target.value) }} required/>
              <span>Confirm Password</span>
          </label>

        {errorMessage && (
          <span className='text-red-600 font-medium'>{message}</span>
        )}

          <button type="submit" disabled={isSigningIn} className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isSigningIn ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}>
            {isSigningIn ? 'Signing up...' : 'Sign Up'}
          </button>



         <p className="signin">Already have an acount ? <Link to="/">Log In</Link> </p>
    </form>
      </>
  )
}
export default FormComp

