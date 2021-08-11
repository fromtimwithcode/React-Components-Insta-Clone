import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {comments.map(item => {
        return <Comment comment={item} key={item.id} />
      })}
    </div>
  );
};

export default Comments;
