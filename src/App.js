import React from 'react';
import './App.css';
import Comments from './components/Comments';
import CommentModal from './components/CommentModal';
import { useDispatch, useSelector } from 'react-redux';
import { modal } from './features/comments/commentSlice';
import { getComments } from './features/comments/commentSlice';

function App() {

  const modalStatus = useSelector(state => state.commentReducer.modalStatus)
  const dispatch = useDispatch();

  const handleLoadNewComment = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(data => dispatch(getComments(data?.slice(0, 30))))
  }

  return (
    <div>
      <div className='grid grid-cols-2 bg-blue-500 text-white px-20 py-4'>
        <h2 className='text-2xl font-semibold'>JOB Task</h2>
        <div className='flex justify-end items-center'>
          <p onClick={() => handleLoadNewComment()} className='mr-8 cursor-pointer'>Load Data</p>
          <p onClick={() => dispatch(modal(modalStatus))} className='cursor-pointer'>create new comment</p>
        </div>
      </div>
      <Comments />
      {modalStatus && <CommentModal />}
    </div>
  );
}

export default App;
