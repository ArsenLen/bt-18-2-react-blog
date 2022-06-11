import React from 'react';

const Post = (props) => {
    console.log(props)
    return (
        <div className='post'>
            <h5 className='title'>{props.title}</h5>
        </div>
    );
};

export default Post;