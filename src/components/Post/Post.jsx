import React from 'react';

const Post = (props) => {
    return (
        <div className='post'>
            <h5 className='title'>{props.title}</h5>
            <p className='descr'>{props.descr}</p>
            <p className='author'>{props.author}</p>
        </div>
    );
};

export default Post;