import React from 'react';
const CommentDetail = props => {
  const name = props.name;
  const timeAgo = props.timeAgo;
  const avatar = props.avatar;
  const text = props.text;
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={avatar} />
      </a>

      <div className="content">
        <a href="/" className="author">
          {name}
        </a>
        <div className="metadata">
          <span className="date">{timeAgo}</span>
        </div>
        <div>
          <span className="text">{text}</span>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
