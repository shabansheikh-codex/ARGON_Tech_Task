import { Button, Form, Input, Row } from 'antd';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../Store/Redux/postSlice';
import PostCard from './PostCard';
import { v4 as uuidv4 } from 'uuid'; 


const Posts = () => {
    const dispatch=useDispatch();
    const user=useSelector(({user})=>user.profile)
    const allPosts=useSelector(({posts})=>posts.post)

    const [post, setPost] = useState(false);
    const [newPost, setNewPost] = useState({
        content:"",
        comment:[],
        user,
    });
    
    const updateContent = (newContent) => {
        setNewPost((prevPost) => ({
            ...prevPost,
            id:uuidv4(),
            content: newContent,
        }));
    };

    const submitPost=()=>{
        dispatch(addPost(newPost))
        setPost(false)
    }


  return (
    <div className='posts_main'>
        {!post &&
            <Row justify="center" gutter={[10,20]}>
                <Button type='primary' htmlType='submit' onClick={()=>setPost(true)}
                    style={{margin:"10px"}}>Add New Post</Button>
            </Row>
        }
        {post &&
            <Form style={{margin:"10px"}}
            onFinish={submitPost}>
                <Form.Item
                    onChange={(e)=>updateContent(e.target.value)} 
                    name="post"
                    rules={[
                        {
                            required: true,
                            message: 'Please write something',
                        },
                    ]}
                    >
                    <Input placeholder="Write Something to Post"/>
                </Form.Item>
                    <Button style={{margin:"0 10px"}} type="primary" htmlType="submit">
                        Post
                    </Button>
                    <Button style={{margin:"0 10px"}} htmlType="button" onClick={()=>setPost(false)}>
                        Cancel
                    </Button>
            </Form>
        }
        <Row justify="center" gutter={[10, 15]}>
        {
            allPosts.length ?
            allPosts.map((post)=><PostCard data={post} allowComment={true} key={post.id}/>):
            "Nothing Posted yet"
        }
        </Row>
    </div>
  )
}

export default Posts