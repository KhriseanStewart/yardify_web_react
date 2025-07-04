import React, { useState, useEffect } from 'react';
import SearchBar from './searchbar';
import IconButton from './iconButtons';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';
import ProductCard from './product_item';
import { collection, onSnapshot } from 'firebase/firestore';



function AppBar({ uid }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  // Function to fetch user name from Firestore
  async function getUserName(uid) {
    const userDocRef = doc(db, 'users', uid);
    const userSnapshot = await getDoc(userDocRef);
    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      console.log(userData.name)
      return userData.name;
    } else {
      console.log('No such document!');
      return null;
    }
  }

  useEffect(() => {
    // Call getUserName when uid is available
    if (uid) {
      getUserName(uid).then((name) => {
        if (name) {
          setUserName(name);
        }
      });
    } else {
      console.log('error')
    }
  }, [uid]);

  const navigateUserProfile = (e) => {
    e.preventDefault();
    try {
      navigate('/profile');
    } catch (error) {
      console.log('Navigation Error:', error);
    }
  };

    const [products, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = onSnapshot(collection(db, 'products'), (snapshot) => {
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(data);
      });
      return () => fetchItems();
  }, []);

  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <>
    <div className="flex flex-row p-2 justify-between items-center w-full">
      <div className='flex flex-row justify-start items-center max-w-fit'>
        <h1 className="text-2xl font-semibold text-black">Discover</h1>
        <SearchBar onsearchResults={setFilteredProducts} />
      </div>

      <div onClick={navigateUserProfile}>
        <IconButton name={userName || 'Default'} />
        {/* You can also pass userName to IconButton if needed */}
      </div>
    </div>
    <div className='flex'>
  {filteredProducts.length > 0 ? (
    filteredProducts.map(product => (
      <ProductCard key={product.id} product={product} />
    ))
  ) : (
    null
  )}
</div>
    </>
  );
}

export default AppBar;