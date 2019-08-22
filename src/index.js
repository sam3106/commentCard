import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          text={faker.lorem.text()}
          avatar={faker.image.avatar()}
          name={faker.name.firstName()}
          timeAgo="Today at 4:45"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          text={faker.lorem.text()}
          avatar={faker.image.avatar()}
          name={faker.name.firstName()}
          timeAgo="Today at 2:35"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          text={faker.lorem.text()}
          avatar={faker.image.avatar()}
          name={faker.name.firstName()}
          timeAgo="Today at 1:21"
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));
