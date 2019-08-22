import React from 'react';

const ApprovalCard = props => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className=" ui two buttons">
          <div className="ui asic green button">Aprrove</div>
          <div className="ui asic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
