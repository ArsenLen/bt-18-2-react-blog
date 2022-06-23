import { Button } from '@mui/material';
import React, {useState} from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';

const Post = (props) => {
    const [editMode, setEditMode] = useState(false)
    const deletePost = id => {
        axios.delete(`http://localhost:3004/posts/${id}`)
    }    
    
    const editPost = () => {
        
    }

    return (
      <div className="post">
        {editMode === true ? (
          <TextField label="Title" variant="outlined" />
        ) : (
          <div>
            <h5 className="title">{props.title}</h5>
            <p className="descr">{props.descr}</p>
            <Button variant="outlined" onClick={() => deletePost(props.id)}>
              Удалить
            </Button>
            <Button variant="outlined" onClick={() => setEditMode(true)}>
              Редактировать
            </Button>
          </div>
        )}
      </div>
    );
};

export default Post;