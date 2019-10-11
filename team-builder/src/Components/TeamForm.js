import React, { useState } from "react";

const TeamForm = props => {
  const [member, setMember] = useState({ Name: "", Email: "", Role: "" });

  const handleChange = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addMember(member);
    setMember({ Name: "", Email: "", Role: "" });
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <div className="form">
        <label htmlFor="Name">Member's Name:</label>
        &nbsp;
        <input
          id="name"
          value={member.name}
          name="name"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="form">
        <label htmlFor="Email">Member's Email:</label>
        &nbsp;
        <input
          id="email"
          value={member.email}
          name="email"
          type="email"
          onChange={handleChange}
        />
      </div>
      <div className="form">
        <label htmlFor="Role">Member's Role:</label>
        &nbsp;
        <input
          id="role"
          value={member.role}
          name="role"
          type="text"
          onChange={handleChange}
        />
      </div>
      <button className='button' type="submit">Add Member</button>
    </form>
  );
};

export default TeamForm;
