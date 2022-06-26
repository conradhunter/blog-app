import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';

const Home = ({isAuth}) => {


    const [postLists, setPostList] = useState([]);

    const postCollection = collection(db, "posts");

    const deletePost = async (id) => {
        const postDoc = doc(db, 'posts', id);
        await deleteDoc(postDoc);
    }

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postCollection);
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        };
        getPosts();
    }, [deletePost]);



    return (
        <div id="home__page">
            {postLists.map((post) => {
                return <div className='post'>
                            <div className='postHeader'>
                                <div className='title'><h1>{post.title}</h1></div>
                            </div>
                            <div className="deletePost">
                                {!isAuth && post.author.id === auth.currentUser.uid && (<button onClick={() => {
                                    deletePost(post.id);
                                }}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>)}
                            </div>
                            <div className='postCategory'>
                                <h5>{post.category}</h5>
                            </div>
                            <div className="postTags">
                                <p>{post.tags}</p>
                            </div>
                            <div className="postText">
                                <p>{post.postText}</p>
                            </div>
                            <h4 className='postAuthor'>@{post.author.name}</h4>
                        </div>
            } )}
        </div>
    );
}

export default Home;
