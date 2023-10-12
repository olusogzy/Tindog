import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore, collection, getDocs, onSnapshot } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD0RzNVD7pZP8Lwj4o0nUwzfpuLm_kTPFQ",
    authDomain: "woven-hangar-354615.firebaseapp.com",
    databaseURL: "https://woven-hangar-354615-default-rtdb.firebaseio.com",
    projectId: "woven-hangar-354615",
    storageBucket: "woven-hangar-354615.appspot.com",
    messagingSenderId: "1090254657016",
    appId: "1:1090254657016:web:847e442ed0666e25ddb20d",
    measurementId: "G-PYK4RZV7T5"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const colRef = collection(db, 'dogs')




  //  real time data
onSnapshot(colRef, (snapshot) =>{
  let dogs = []
    snapshot.docs.forEach((doc) => {
      dogs.push({ ...doc.data(), id:doc.id })
      console.log(dogs);
    })
})
export {auth, colRef, db};


// geting documents from firebase
// getDocs(colRef)
//   .then((snapshot) => {
//     let dogs = []
//     snapshot.docs.forEach((doc) => {
//       dogs.push({ ...doc.data(), id:doc.id })
//       console.log(dogs);
      
//   })
//   }).catch(err => {
//     console.log(err.message);
//   })
