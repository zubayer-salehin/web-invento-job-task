import React from 'react';
import { useDispatch } from 'react-redux';
import { updateComment } from '../features/comments/commentSlice';


const UpdateModal = ({ updateCommentInfo, modal, setModal }) => {

    const { id, name, email, body } = updateCommentInfo || {};
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const description = e.target.description.value
        const updateCommentInfo = { id, name, email, body: description };
        dispatch(updateComment(updateCommentInfo));
        setModal(!modal);
        e.target.reset();
    }


    return (
        <div>
            <div className="fixed inset-0 z-30 overflow-y-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-[#3c3c3c] opacity-50"
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg mx-auto bg-white rounded-md">
                        <div className='rounded-lg px-12 sm:px-16 py-10'>
                            <p onClick={() => setModal(!modal)} className="absolute top-6 right-7 font-bold cursor-pointer p-1">✕</p>
                            <h1 className='mb-8 font-medium text-2xl text-center'>Update Comment</h1>
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
                                            defaultValue={name}
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
                                            defaultValue={email}
                                        />
                                    </div>
                                    <div className='flex flex-col items-start'>
                                        <label className="ml-0.5" htmlFor='description' >
                                            Description
                                        </label>
                                        <textarea name="description" id="description" cols="30" rows="5" className="login-register-input" placeholder='Type Here ...' required defaultValue={body}></textarea>
                                    </div>
                                    <div className='!mt-8 '>
                                        <input
                                            type='submit'
                                            className='font-semibold text-white py-3 rounded-full bg-[#3680f7] w-full cursor-pointer'
                                            value="Update Comment" />
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

export default UpdateModal;