import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../features/comments/commentSlice';
import SingleComment from './SingleComment';

const Comments = () => {

    const comments = useSelector(state => state.commentReducer.comments)
    const dispatch = useDispatch();

    useEffect(() => {
        const getLocalStorageData = JSON.parse(localStorage.getItem("comments"));
        dispatch(getComments(getLocalStorageData));
    }, [dispatch])

    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-10 px-20 py-10'>
            {comments?.map(comment => <SingleComment key={comment?.id} comment={comment} />)}
        </div>
    );
};

export default Comments;