import React, {useState} from 'react'
import { colRef, db } from '../firebase';
import { addDoc, deleteDoc, doc } from 'firebase/firestore';


function Welcome() {
    const [name, setName] = useState('')
    const [owner, setOwner] = useState('')
    const [age, setAge] = useState('')
    const [deletee, setDeletee] = useState('')

// adding documents to firebase
    function handleSubmit(e) {
        e.preventDefault()
        const inputField = {
            name: name,
            owner: owner,
            age: age
        }

        addDoc(colRef, inputField)
            .then(() => {inputField.reset()})
            .catch((err) => {console.log(err.message);})
    }

// deleting documents from firebase
    function handleDelete(e){
        e.preventDefault()
        const docRef = doc(db, 'dogs', deletee)
        console.log(docRef);
        deleteDoc(docRef)
            .then(() => {
                deletee.reset()
            })
    }

    return (
        <div>
            <h1> Welcome to Tindog</h1>

            <form onSubmit={handleSubmit}>
                <input
                type='text'
                placeholder='dog name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                ></input>
                <input
                type='text'
                placeholder='dog owner'
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                ></input>
                <input
                type='text'
                placeholder='dog age'
                value={age}
                onChange={(e) => setAge(e.target.value)}
                ></input>
                <button type='submit'>post</button>
            </form>

            <form onSubmit={handleDelete}>
                <input
                type='text'
                placeholder='delete'
                value={deletee}
                onChange={(e) => setDeletee(e.target.value)}
                ></input>
                <button type='submit'>delete</button>
            </form>
        </div>
    )
}

export default Welcome;