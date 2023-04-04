import React from 'react';
import './App.css';
import Comments from './components/Comments';
import CommentModal from './components/CommentModal';
import { useDispatch, useSelector } from 'react-redux';
import { modal } from './features/comments/commentSlice';

function App() {

  const modalStatus = useSelector(state => state.commentReducer.modalStatus)
  const dispatch = useDispatch();

  return (
    <div>
      <div className='grid grid-cols-2 bg-blue-500 text-white px-20 py-4'>
        <h2 className='text-2xl font-semibold'>JOB Task</h2>
        <p onClick={() => dispatch(modal(modalStatus))} className='flex justify-end items-center font-medium cursor-pointer'>create new comment</p>
      </div>
      <Comments />
      {modalStatus && <CommentModal />}
    </div>
  );
}

export default App;
