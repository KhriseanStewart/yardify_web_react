import React from 'react';
import SearchBar from './searchbar'
import IconButton from './iconButtons'
// import { doSignOut } from '../../firebase/auth';
// import { useNavigate, Link, Navigate } from 'react-router-dom';

function AppBar() {
  const navigate = useNavigate();

  // const logOutUser = async (e) => {
  //   e.preventDefault();
  //   try{
  //     await doSignOut(e);
  //     console.log("Wait");
  //     // On success, navigate
  //     navigate('/');
  //   } catch (error){
  //     console.log('Log out Error:', error)
  //   }
  // };

  const navigateUserProfile = async (e) => {
    e.preventDefault();
    try{
      console.log("Wait");
      navigate('/profile');
    } catch (error){
      console.log('Log out Error:', error)
    }
  };

  return (
    <>
    <div className="flex flex-row p-2 justify-between items-center w-ful">
      <div className='flex flex-row justify-center items-center'>
        <h1 className="text-2xl font-semibold">Discover</h1>
        <br />
        <SearchBar></SearchBar>
      </div>

      <div onClick={navigateUserProfile}>
        <IconButton name='Khrisean'></IconButton>
      </div>
    </div>
    </>
  )
}
import { doSignOut } from '../../firebase/auth';
import { useNavigate } from 'react-router-dom';

export default AppBar

