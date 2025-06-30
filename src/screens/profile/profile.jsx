import { useState } from 'react';
import { doSignOut } from '../../firebase/auth';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import UserProfile from '../components/userProfile';
import SellersDashboard from '../components/SellersDashboard';

function Profilepage() {
  const navigate = useNavigate();

  const returnToHome = (e) => {
    e.preventDefault
    navigate('/discover')
  }

  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <div> <UserProfile/></div> ;
      case 'settings':
        return <div className='text-black'>Security & Privacy</div>;
      case 'activity':
        return <div className='text-black'><SellersDashboard></SellersDashboard></div>;
      case 'about':
        return <div className='text-black'>Additional Settings</div>;
      default:
        return null;
    }
  };


    const logOutUser = async (e) => {
      e.preventDefault();
      try{
        await doSignOut(e);
        console.log("Wait");
        // On success, navigate
        navigate('/');
      } catch (error){
        console.log('Log out Error:', error)
      }
    };

    

  return (
    <>
    <div className='top-0 left-0 w-full p-0.5 md:pl-10 md:pr-10 xl:pl-20 xl:pr-20'>
      <div className="profile-page flex flex-col md:flex-row justify-between items-center">
        <div><h1 className='text-black font-semibold text-2xl hover:cursor-default' onClick={returnToHome}>Discover</h1></div>
        {/* Tabs Navigation */}
        <div>
          <div className="tabs flex space-x-0 md:space-x-4 border-b mb-4 justify-center">
            <button
              className={`py-2 px-4 text-black ${activeTab === 'overview' ? 'border-b-2 border-blue-500' : ''}`}
              onClick={() => setActiveTab('overview')}
              >
              Account Details
            </button>
            <button
              className={`py-2 px-4 text-black ${activeTab === 'settings' ? 'border-b-2 border-blue-500' : ''}`}
              onClick={() => setActiveTab('settings')}
              >
              Security & Privacy
            </button>
            <button
              className={`py-2 px-4 text-black ${activeTab === 'activity' ? 'border-b-2 border-blue-500' : ''}`}
              onClick={() => setActiveTab('activity')}
              >
              Seller's Dashboard
            </button>
            <button
              className={`py-2 px-4 text-black ${activeTab === 'about' ? 'border-b-2 border-blue-500' : ''}`}
              onClick={() => setActiveTab('about')}
              >
              Additional Settings
            </button>

          </div>
        </div>
          {/* signoutbtn */}
          <div>
              <button className="py-2 px-4 bg-red-500 rounded-2xl text-white" onClick={logOutUser}>Sign Out</button>
          </div>
        </div>
              {/* Content Area */}
        <div className="tab-content p-4 border rounded shadow">
          {renderContent()}
        </div>
    </div>
    </>
  );
}

export default Profilepage;