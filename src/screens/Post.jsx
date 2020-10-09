import React, { useState, useEffect } from 'react'
import firebase from '../firebase'
import { useParams } from "react-router-dom";


export default function Post() {
    const {id} = useParams();
    const [title, setTitle] = useState('')

    useEffect(() => {
        const fetchPostById = async () => {
            const db = firebase.firestore()
            const data = await db.collection('posts').where("id", "==", id).get()
            console.log(data.docs.map(doc => doc.data()));
            let dataArr = data.docs.map(doc => doc.data())
            setTitle(dataArr[0].title)
        }
        console.log(id);
        fetchPostById()
    }, [id, title])
    return (
        <div>
            {title}
        </div>
    )
}
