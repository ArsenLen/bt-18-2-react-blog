import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const CreatePost = () => {
    const [title, setTitle] = useState("")
    const [descr, setDescr] = useState("")

    const handleAddPost = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3004/posts", {
            title,
            descr
        }) 
    }
    
    return (
        <form style={{margin: 20}}>
            <TextField 
            label="Title" 
            variant="outlined" 
            value={title}
            onChange={e => setTitle(e.target.value)}
             />
            <TextField 
            label="Descr" 
            variant="outlined"
            value={descr}
            onChange={e => setDescr(e.target.value)}
            />
            <Button type="submit" variant="outlined" onClick={handleAddPost}>Добавить пост</Button>
        </form>
    );
};

export default CreatePost;