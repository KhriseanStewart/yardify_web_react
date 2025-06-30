// import React, { useEffect, useState } from 'react';
// import { collection, doc, DocumentReference, getDocs, setDoc, addDoc } from 'firebase/firestore';
// import { db } from '../../firebase/firebase';
// import {getAuth, onAuthStateChanged} from 'firebase/auth'

// const auth = getAuth();

// function ItemsList() {

//     onAuthStateChanged(auth, async (user) => {
//     if (user) {
//         const uid = user.uid; // User's UID

//         // Use the UID as your collection name
//         const userCollectionRef = collection(db, uid);

//         try {
//         const docRef = await addDoc(userCollectionRef, {
//             field1: 'value1',
//             field2: 'value2',
//         });
//         console.log('Document written with ID: ', docRef.id);
//         } catch (e) {
//         console.error('Error adding document: ', e);
//         }
//     } else {
//         // User is not signed in
//         console.log('No user signed in');
//     }
//     });

//   return (
//     <div>

//     </div>
//   );
// }

// export default ItemsList;