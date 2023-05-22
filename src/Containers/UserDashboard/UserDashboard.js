import { Avatar, Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NewsFeed from '../../Components/NewsFeed/NewsFeed';
import Posts from '../../Components/Posts/Posts';
import { userLogout } from '../../Store/Redux/authSlice';

const UserDashboard = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector(({user})=>user.profile)

    const handleLogout=()=>{
      dispatch(userLogout());
      navigate("/");
    }
  return (
    <div className='dashboard'>
        <div className='dashboard_head'>
            <h2>User Dashboard</h2>
            <span>
                <Avatar
                    src={user.pic}
                /> Hi! {user.userName} <Button onClick={handleLogout}>Logout</Button>
            </span>
        </div>
      <NewsFeed />
      <Posts/>
    </div>
  );
};

export default UserDashboard;