import { Row, Card, Col } from 'antd';
import React from 'react';

const LatestComments = ({ allPosts }) => {
    const getLatestComments = () => {
        // extracting the latest comment from each post
        const comments = allPosts.reduce((accumulator, post) => {
          if (post.comment.length > 0) {
            // console.log("post contentttt reduce",post)
            const latestComment = post.comment[post.comment.length - 1];
            accumulator.push({
              postContent: post.content,
              comment: latestComment
            });
          }
          return accumulator;
        }, []);

        //sorting comments 
        const sortedComments = comments.sort((a, b) => b.comment.timestamp - a.comment.timestamp);
    
        // latest comments card having post content
        return (
          sortedComments.length?
          sortedComments.map((item) => (
          <Col xs={18} sm={10} md={6} offset={1}>
            <Card style={{marginBottom:"10px"}} key={item.comment.commentId}>
              <h4>Post Content:</h4>
              <p>{item.postContent}</p>
              <h3>Latest Comment:</h3>
              <p>{item.comment.user.userName}: {item.comment.comment}</p>
            </Card>
          </Col>
          )):"No data "
        )
      };
    
      return (
        <div>
          <h3 style={{textAlign:"center", margin:"30px 0 10px 0"}} >Latest Comments of all Posts with comments</h3>
          <Row justify="center" gutter={[10, 15]}>
              {getLatestComments()}
          </Row>
        </div>
      );
    };

export default LatestComments;