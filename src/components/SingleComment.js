import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeComment } from '../features/comments/commentSlice';
import UpdateModal from './UpdateModal';

const SingleComment = ({ comment }) => {

    const { id, name, email, body } = comment || {};
    const dispatch = useDispatch();
    const [updateCommentInfo, setUpdateCommentInfo] = useState({});
    const [modal, setModal] = useState(false);

    const handleDeleteComment = (id) => {
        dispatch(removeComment(id));
    }

    const handleUpdateComment = (comment) => {
        setModal(!modal)
        setUpdateCommentInfo(comment)
    }

    return (
        <>
            <div className='p-5 rounded-md commentBoxShadow'>
                <h4 className='font-medium'>Name : {name?.slice(0, 25)}</h4>
                <h4 className='font-medium'>Email : {email}</h4>
                <p className='text-sm h-[60px]'>Description : {body?.slice(0, 100)}...</p>
                <div className='flex justify-between pt-3'>
                    <button onClick={() => handleUpdateComment(comment)} className='button-shadow px-5 py-1 bg-yellow-500 text-white rounded-sm'>Update</button>
                    <button onClick={() => handleDeleteComment(id)} className='button-shadow px-5 py-1 bg-[#D11A2A] text-white rounded-sm'>Delete</button>
                </div>
            </div>
            {modal && <UpdateModal updateCommentInfo={updateCommentInfo} modal={modal} setModal={setModal}/>}
        </>
    );
};

export default SingleComment;