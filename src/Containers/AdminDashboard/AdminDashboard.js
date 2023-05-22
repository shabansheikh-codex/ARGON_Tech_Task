import React from 'react';
import { Avatar, Button, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../Store/Redux/authSlice';
import PostsTable from '../../Components/Posts/PostsTable';
import PostCard from '../../Components/Posts/PostCard';
import LatestComments from '../../Components/LatestComments/LatestComments';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector(({user})=>user.profile)
    const allPosts=useSelector(({posts})=>posts.post)
    
    // console.log("all posts",allPosts)
    const handleLogout=()=>{
        dispatch(userLogout());
        navigate("/");
    }
  return (
    <div className='dashboard'>
        <div className='dashboard_head'>
            <h2>Admin Dashboard</h2>
            <span>
                <Avatar
                    src={user.pic}
                /> Hi! {user.userName} <Button onClick={handleLogout}>Logout</Button>
            </span>
        </div>

        <h3>There are total {allPosts.length} post(s) by user(s) </h3>
        <PostsTable allPosts={allPosts} />

        <h3 style={{marginBottom:"20px", textAlign:"center"}}>All Posts by User with comment Feed</h3>
        <Row justify="center" gutter={[10, 15]} style={{margin:0 }}>
        {
            allPosts.length ?
            allPosts.map((post)=><PostCard data={post} allowComment={true} key={post.id}/>):
            "Nothing Posted yet"
        }
        </Row>

        <LatestComments allPosts={allPosts} />
    </div>
  );
};

export default AdminDashboard;