import React, { useState } from 'react';


const TeamForm = props =>{

    const [member, setMember] = useState({ Name: '', Email: '', Role: ''});

    const handleChange = e => {
        setMember({...member, [e.target.name]: e.target.value});
    };

    const handleSubmit = e =>{
        e.preventDefault();
        props.addMember(member);
        setMember({Name: '', Email: '', Role: ''});
    };


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='Name'>Member's Name</label>
            <input
            id='name'
            value={member.name}
            name='name'
            type='text'
            onChange={handleChange}
             />
              <label htmlFor='Email'>Member's Email</label>
            <input
            id='email'
            value={member.email}
            name='email'
            type='text'
            onChange={handleChange}
             />
               <label htmlFor='Role'>Member's Role</label>
            <input
            id='role'
            value={member.role}
            name='role'
            type='text'
            onChange={handleChange}
             />
             <button type="submit">Add Member</button>
        </form>
    );
}






export default TeamForm;