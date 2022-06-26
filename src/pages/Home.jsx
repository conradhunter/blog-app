import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react';
import { auth, db } from '../firebase';

const Home = ({isAuth}) => {


    const [postLists, setPostList] = useState([]);

    const postCollection = collection(db, "posts");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postCollection);
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        };
        getPosts();
    }, []);




    return (
        <div id="home__page">
            {postLists.map((post) => {
                return <div className='post'>
                            <div className='postHeader'>
                                <div className='title'><h1>{post.title}</h1></div>
                            </div>
                            {/* <div className="deletePost">
                                <button >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div> */}
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
