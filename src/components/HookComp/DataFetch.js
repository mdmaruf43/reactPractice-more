import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetch() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [idFromButtonClick])
    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)}></input>
            <button type='button' onClick={handleClick}>Fatch Post</button>
            <br/>
            {post.title};

            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFetch




