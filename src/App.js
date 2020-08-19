import React, { useEffect, useState } from 'react';
import './App.css';
import firebase from './firebase'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection('posts').get()
      setPosts(data.docs.map(doc => doc.data()))
    }
    fetchData()
  }, [])
  return (
    <div>
      {posts.map(post => (
        <div>
          <h1>NEW TITLE</h1>
          <h3>{post.author}</h3>
          <h3>{post.category}</h3>
          <h3>{new Date(post.datePosted.seconds * 1000).toDateString()}</h3>
          <img src={post.authorImg} alt={post.author}></img>
        </div>
      ))}
    </div>
  );
}

export default App;
