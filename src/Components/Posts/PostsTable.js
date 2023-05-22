import React from 'react';
import { Table } from 'antd';

const PostsTable = ({ allPosts }) => {
  // grouping the posts by user and calculate the total number of posts by each user
  const groupedPosts = allPosts.reduce((accumulator, post) => {
    // console.log("post from groupedPosts",post)
    const { user } = post;
    if (!accumulator[user.userName]) {
      accumulator[user.userName] = {
        userName: user.userName,
        totalPosts: 0,
      };
    }
    accumulator[user.userName].totalPosts++;
    return accumulator;
  }, {});

  // converting the grouped posts object into an array of user objects
  const userData = Object.values(groupedPosts);

  const columns = [
    {
      title: 'User Name',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'Total Posts',
      dataIndex: 'totalPosts',
      key: 'totalPosts',
    },
  ];

  return <Table columns={columns} dataSource={userData} />;
};

export default PostsTable;
