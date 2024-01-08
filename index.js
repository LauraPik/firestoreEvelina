import {app} from "./firebase.js"
import { getFirestore, doc, setDoc, collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

 
const db = getFirestore(app);
 
console.log(db);

const setname = async() =>{
    await setDoc(doc(db, "users", "1"), {
        name: "Jonas",
        email:"jonas@jonaitis.com",
        age: 35,
        role: "admin"

}).then(()=>{
    alert("Successfully added")
}).catch((err)=>{
    console.log(err)
})
}
//setname()

const addinam = async() =>{
    await addDoc(collection(db, "users"),
    {
        name: "Ona",
        email: "Onukas@gmail.com",
        age: 22,
        role: "simple user"
    }).then(()=>{
        alert("Successfully added")
    }).catch((err)=>{
        console.log(err)
    })
}

//addinam()

const gettinam = async ()=>{
    const docSnap = await getDoc(doc(db, 'users', "Ei7qMg0ypcNfZbLLp5CQ"));
    console.log(docSnap.data())
}

//gettinam()

const getAll = async()=>{
   const snap = await getDocs(collection(db, "users"))
   snap.forEach(element => {
    console.log(element.data())
    
   });
}

//getAll()

const update = async() =>{
    const up = await updateDoc(doc(db, "users", "1"), {
        age:22

    }).then(()=>{
        alert("Successfully added")
    }).catch((err)=>{
        console.log(err)
    })
}
//update()

const delet = async()=>{
    await deleteDoc(doc(db, "users", "1")).then(()=>{
        alert("Successfully removed")
    }).catch((err)=>{
        console.log(err)
    })
}
delet()
