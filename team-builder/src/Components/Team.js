import React from "react";

const TeamMember = props => {
  return (
    <div>
      {props.memberList.map(member => {
        return (
          <div key={member.id}>
            <h2>{member.name}</h2>
            <h4>{member.email}</h4>
            <h4>{member.role}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default TeamMember;
