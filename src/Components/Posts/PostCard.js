import React, { useState } from 'react'
import { Col, Card, Avatar, Input, Button, Form } from 'antd'
import * as AiIcons from "react-icons/ai" 
import { addComment } from '../../Store/Redux/postSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const PostCard = ({data, allowComment}) => {
    // console.log("data comment", data.comment)
    const user=useSelector(({user})=>user.profile)
    const dispatch=useDispatch();

    const [newComment,setNewComment]=useState("");
    const [viewComments,setViewComments]=useState(false);

    const submitComment=(data,user,comment)=>{
        // console.log("comment value",data,user,comment)
        if(comment!==""){
        const {id}=data
        const commentId=Date.now()
        // console.log("ready comment",id,user,comment,commentId)
        dispatch(addComment({id,user,comment,commentId}))
        setNewComment("")}
        else{
            toast.error("cannot comment empty String!")
        }
    }
  return (
    <Col xs={18} sm={10} md={6} offset={1}
        className='post_card'>
            {/* comment card */}
        <Card
            hoverable={true}
            actions={
                [
                    <Button  title="like"><AiIcons.AiOutlineLike/> Like</Button>,
                    <Button  title="share">Share</Button>
                ]
            }
        >
            <Card.Meta
                avatar={
                    <Avatar src={data.user.pic}
                    size={50}>
                    </Avatar>
                }
                title={data.user.userName}
            >
            </Card.Meta>
            <p className='post_content'>
                {data.content}
            </p>
        </Card>
        {/* comment list with view all and hide all  */}
        {data.comment.length?
            <>
                <div className="post_comments">({data.comment.length}) comments 
                    { allowComment &&
                        <a onClick={()=>setViewComments(!viewComments)}>{viewComments?"hide all":"view all"}</a>
                    }
                </div>
                {viewComments && 
                    data.comment.map((comm)=><div className='comment_main' key={comm.commentId}>
                        <h3>{comm.user.userName}</h3>
                        <p>commented: {comm.comment}</p>
                    </div>)
                }
            </>:
            <div className="post_comments">(0)comment</div>
        }
        {/* submit comment form */}
        {allowComment &&
            <Form>
                <Form.Item>
                    <Input.Group compact>
                        <Input placeholder='comment here'
                            value={newComment}
                            onChange={(e)=>setNewComment(e.target.value)} 
                            style={{ width: "70%" }} 
                            />
                        <Button style={{ width: "30%" }} title="send"
                            onClick={()=>submitComment(data,user,newComment)}
                            type="primary"
                            >
                            <AiIcons.AiOutlineSend/>
                        </Button>
                    </Input.Group>
                </Form.Item>
            </Form>
        } 
    </Col>
  )
}

export default PostCard