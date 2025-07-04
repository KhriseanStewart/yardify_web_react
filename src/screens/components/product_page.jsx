import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { FaRegCircleXmark, FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { FaUserCircle, FaMapMarkerAlt } from 'react-icons/fa';
import ErrorPage from '../404 error/error_page';

function timeAgo(date) {
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
  ];
  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
    }
  }
  return 'just now';
}

export default function Productpage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      const docRef = doc(db, 'products', productId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
        setNotFound(false);
      } else {
        setNotFound(true);
      }
    }
    fetchProduct();
  }, [productId]);

  if (notFound) return <ErrorPage />;
  if (!product) return <div className='flex justify-center items-center text-black'>Loading...</div>;

  const images = Array.isArray(product.imageUrl) ? product.imageUrl : [product.imageUrl];

  const handleImageClickForward = () => {
    setCurrentImage((prev) => (prev < images.length - 1 ? prev + 1 : prev));
  };
  const handleImageClickBack = () => {
    setCurrentImage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className= "bg-white min-h-screen w-full p-4 flex flex-col lg:flex-row gap-8">
      {/* Image Section */}
      <div className="relative flex-1 flex items-center justify-center max-w-2xl mx-auto lg:mx-0">
        {/* Blurred background */}
        <img
          src={images[currentImage]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover blur-sm"
          aria-hidden="true"
        />
        {/* Main image */}
        <img
          src={images[currentImage]}
          alt={product.name}
          className="relative z-10 max-h-[500px] max-w-[90vw] object-contain rounded shadow-lg"
          style={{ background: 'rgba(255,255,255,0.1)' }}
        />
        {/* Close button */}
        <div
          onClick={() => navigate(-1)}
          className="p-1 rounded-full shadow-md bg-white absolute top-4 left-4 z-20 cursor-pointer"
        >
          <FaRegCircleXmark color="black" size={28} />
        </div>
        {/* Image navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={handleImageClickBack}
              className="absolute top-1/2 -translate-y-1/2 left-4 z-20 bg-white bg-opacity-80 px-2 py-2 rounded-full shadow"
              disabled={currentImage === 0}
            >
              <FaArrowLeft size={22} />
            </button>
            <button
              onClick={handleImageClickForward}
              className="absolute top-1/2 -translate-y-1/2 right-4 z-20 bg-white bg-opacity-80 px-2 py-2 rounded-full shadow"
              disabled={currentImage === images.length - 1}
            >
              <FaArrowRight size={22} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white bg-opacity-80 px-3 py-1 rounded text-black text-xs z-20">
              {currentImage + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      <br />
      
      {/* Details Section */}
      <div className="flex-1 max-w-xl mx-auto lg:mx-0 bg-white text-start">
        <div className="rounded-xl p-6 flex flex-col gap-4">
          {/* Price and Title */}
          <div>
            <h1 className="font-bold text-3xl mb-2 text-black">{product.name}</h1>
            <h2 className="text-2xl text-green-700 font-semibold mb-2">JMD {product.price}</h2>
            <p className="text-gray-500 text-sm mb-2">
              {product.createdAt ? timeAgo(product.createdAt.toDate()) : ''}
            </p>
            <div className="flex items-center gap-2 mb-2">
              <FaMapMarkerAlt className="text-gray-400" />
              <span className="text-gray-700">{product.location}</span>
            </div>
          </div>
          {/* Description */}
          <div>
            <h3 className="font-semibold text-lg mb-1 text-black">Description</h3>
            <p className="text-gray-800">{product.description || 'No Description Given'}</p>
          </div>
          {/* Category */}
          <div>
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
              {product.category}
            </span>
          </div>
          {/* Seller Info */}
          <div className="flex items-center gap-3 mt-4 border-t pt-4">
            <FaUserCircle size={40} className="text-gray-400" />
            <div>
              <div className="font-semibold text-gray-900">{product.userName || 'Anonymous'}</div>
              <div className="text-gray-600 text-sm">Contact: {product.contact || 'N/A'}</div>
            </div>
          </div>
          {/* Message Seller Button */}
          <button
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
            onClick={() => alert('Messaging seller...')}
          >
            Message Seller
          </button>
        </div>
      </div>
    </section>
  );
}