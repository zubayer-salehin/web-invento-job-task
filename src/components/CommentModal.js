import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewComment, modal } from '../features/comments/commentSlice';


const CommentModal = () => {

    const modalStatus = useSelector(state => state.commentReducer.modalStatus)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const description = e.target.description.value
        const newObj = { name, email, body:description };
        dispatch(addNewComment(newObj));
        dispatch(modal(modalStatus));
        e.target.reset();
    }

    return (
        <div>
            <div className="fixed inset-0 z-30 overflow-y-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-[#808080] opacity-50"
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg mx-auto bg-white rounded-md">
                        <div className='rounded-lg px-12 sm:px-16 py-10'>
                            <p onClick={() => dispatch(modal(modalStatus))} className="absolute top-6 right-7 font-bold cursor-pointer p-1">✕</p>
                            <h1 className='mb-8 font-medium text-2xl text-center'>Create New Comment</h1>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className='space-y-3'>
                                    <div className='flex flex-col items-start'>
                                        <label className="ml-0.5" htmlFor='name' >
                                            Name
                                        </label>
                                        <input
                                            type='text'
                                            name='name'
                                            id='name'
                                            placeholder="Full Name"
                                            className="login-register-input"
                                            required
                                        />
                                    </div>
                                    <div className='flex flex-col items-start'>
                                        <label className="ml-0.5" htmlFor='email' >
                                            Email
                                        </label>
                                        <input
                                            type='email'
                                            name='email'
                                            id='email'
                                            placeholder="Email"
                                            className="login-register-input"
                                            required
                                        />
                                    </div>
                                    <div className='flex flex-col items-start'>
                                        <label className="ml-0.5" htmlFor='description' >
                                            Description
                                        </label>
                                        <textarea name="description" id="description" cols="30" rows="5" className="login-register-input" placeholder='Type Here ...' required></textarea>
                                    </div>
                                    <div className='!mt-8 '>
                                        <input
                                            type='submit'
                                            className='font-semibold text-white py-3 rounded-full bg-[#3680f7] w-full cursor-pointer'
                                            value="Add Comment" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentModal;