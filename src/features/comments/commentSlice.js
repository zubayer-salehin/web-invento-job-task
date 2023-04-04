import { createSlice, current } from "@reduxjs/toolkit";


const initialState = {
    comments: [],
    modalStatus: false
}

const commentSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        getComments: (state, action) => {
            state.comments = action.payload
            localStorage.setItem("comments", JSON.stringify(action.payload))
        },
        removeComment: (state, action) => {
            const existComments = current(state.comments).filter(c => c.id !== action.payload)
            state.comments = existComments;
            localStorage.setItem("comments", JSON.stringify(existComments));
        },
        modal: (state, action) => {
            state.modalStatus = !action.payload
        },
        addNewComment: (state, action) => {
            const findComment = current(state.comments).find(c => c.email === action.payload.email)
            if (!findComment) {
                state.comments.push({ id: Math.floor(Math.random() * 1000000), ...action.payload });
                const comments = current(state.comments);
                localStorage.setItem("comments", JSON.stringify(comments));
            }
        },
        updateComment: (state, action) => {
            const existComments = current(state.comments).filter(c => c.id !== action.payload.id)
            state.comments = existComments;
            state.comments.push(action.payload);
            localStorage.setItem("comments", JSON.stringify(state.comments));
        }
    }
})


export const { getComments, removeComment, modal, addNewComment, updateComment } = commentSlice.actions;
export default commentSlice.reducer;