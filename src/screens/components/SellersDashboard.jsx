import React from 'react'
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import ProductCard from './product_item';
import { getAuth } from 'firebase/auth';
import { v4 as uuidv4 } from 'uuid';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';


const storage = getStorage();
const auth = getAuth();

export default function SellersDashboard() {

    const [products, setItems] = useState([]);

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [category, setCategory] = useState('')

    const [showPopup, setShowPopup] = useState(false);

    const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      // Handle case when user isn't logged in
      setItems([]);
      return;
    }

    // Create a query that filters products by current user's uid
    const q = query(collection(db, 'products'), where('ownerId', '==', user.uid));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(data);
    });

    return () => unsubscribe();
  }, []);



  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };



    const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
        setImageFile(e.target.files[0]);
    }
    };

    const uploadImage = async (file) => {
        const imageRef = ref(storage, `images/${uuidv4()}`); // Unique path for each image
        await uploadBytes(imageRef, file);
        const downloadURL = await getDownloadURL(imageRef);
        return downloadURL;
    };

const handleSubmit = async (e) => {
  e.preventDefault(); // Correctly call preventDefault()

  if (imageFile == null) {
    console.log("Error: No image selected");
    return;
  }

  if (!name || !price || !category) {
    console.log("No data provided");
    return;
  }

  const user = auth.currentUser;
  if (user) {
    const uid = user.uid;
    const productId = uuidv4(); // Generate UUID for the product document

    // Optional: Upload the image and get its URL
    // Example: uploadImage(imageFile) returns the image URL
    const imageUrl = await uploadImage(imageFile);

    // Save product data in 'products' collection
    const productRef = doc(collection(db, 'products'), productId);
    await setDoc(productRef, {
      name,
      price,
      location,
      imageUrl,
      category,
      ownerId: uid,
      createdAt: new Date(),
    });

    console.log("Product added with ID:", productId);
  } else {
    console.log("No user detected");
  }
};


  return (
    <>
    <div className='flex flex-col justify-center sm:flex-row'>
        <div className='m-8 bg-zinc-300 min-w-2xs min-h-44 rounded-2xl text-start p-4'>
            <h3>Views</h3>
            <p>Coming Soon</p>
        </div>
        <div className='m-8 bg-zinc-300 min-w-2xs min-h-44 rounded-2xl text-start p-4'>
            <h2 className='font-bold text-2xl text-center mb-2'>Listed Items</h2>
            <h3>Number of Items listed: {products.length? products.length : 'Loading...'}</h3>
        </div>
        <div onClick={handleOpenPopup} className='m-8 bg-zinc-300 min-w-2xs min-h-44 rounded-2xl text-center align-middle p-4'>
            <h2 className='font-bold text-2xl'>Tap to Create Listing</h2>
        </div>
    </div>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-3 w-full justify-center items-center'>
        {products.length === 0 ? (
            <div className="pt-7  col-span-full text-center text-black text-4xl">No items available</div>
        ): (
            products.map(product => (
                <ProductCard key={product.id} product={product}/>
            ))
        )}

    </div>
    {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999,
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              minWidth: '300px',
              maxWidth: '500px',
              position: 'relative',
            }}
          >
            <h2>Create a New Listing</h2>
        <form className="form max-w-screen w-full sm:max-w-3xs md:max-w-96 " onSubmit={handleSubmit}>
            <p className='text-2xl'>Change Information</p>
            <label>
                <input className="input" type="name" placeholder="" value={name} onChange={(e) => { setName(e.target.value )}} required/>
                <span>Item name</span>
            </label> 

            <label>
                <input className="input" type="text" placeholder="" value={price} onChange={(e) => {setPrice(e.target.value )}} required/>
                <span>Price</span>
            </label>

            <label>
            <select
                className="input"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
            >
                <option value="">Select a category</option>
                <option value="All">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Vehicles">Vehicles</option>
                <option value="Property for Sale">Property for Sale</option>
                <option value="Property for Rent">Property for Rent</option>
                <option value="Home Appliances">Home Appliances</option>
                <option value="Furniture">Furniture</option>
                <option value="Clothing & Accessories">Clothing & Accessories</option>
                <option value="Baby & Kids">Baby & Kids</option>
                <option value="Sports & Outdoors">Sports & Outdoors</option>
                <option value="Toys & Games">Toys & Games</option>
                <option value="Garden & Outdoor">Garden & Outdoor</option>
                <option value="Tools & Equipment">Tools & Equipment</option>
                <option value="Pets">Pets</option>
                <option value="Hobbies & Leisure">Hobbies & Leisure</option>
                <option value="Collectibles & Art">Collectibles & Art</option>
                <option value="Business & Industrial">Business & Industrial</option>
                <option value="Services">Services</option>
                <option value="Jobs">Jobs</option>
                <option value="Miscellaneous">Miscellaneous</option>
                <option value="Others">Others</option>
            </select>
            <span>Category</span>
            </label>

            <label>
                <input className="input" type="text" placeholder="" value={location} onChange={(e) => {setLocation(e.target.value )}} required/>
                <span>Location of Item</span>
            </label>

                <input
                className="input"
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e)}
                required
                />
                <span>Upload Image</span>

            <button type="submit" className={`w-full px-4 py-2 text-white font-medium rounded-lg bg-zinc-500`}>
               Submit
            </button>
        </form>
            {/* Your form or content here */}
            <button onClick={handleClosePopup} style={{ marginTop: '10px' }}>
              Close
            </button>
          </div>
        </div>
      )}
</>
  )
}
