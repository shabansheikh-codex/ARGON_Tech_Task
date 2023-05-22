import { createSlice } from "@reduxjs/toolkit";

const initialState={
    post:[],
}

const postSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{
        addPost: (state, action) => {
            state.post =[...state.post, action.payload]
        },
        addComment: (state, action) => {
            const { id, ...comment } = action.payload;
            const post = state.post.find((post) => post.id === id);
            if (post) {
                post.comment=[...post.comment, comment];
                // console.log("slice commented data",comment)  
            }  
        },
    },
})

export const {addPost,addComment}=postSlice.actions
export default postSlice.reducer;
