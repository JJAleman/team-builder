import React, { useState } from 'react';

import './App.css';
import TeamForm from './Components/TeamForm';
import Team from './Components/Team';

function App() {

  const [team, setTeam] = useState([
    {
      id: 1,
      name: 'John',
      email: 'johnnyboi@yahoo.com',
      role: 'Backend'
    }
  ]);

  const addTeamMember = member => {

    const newTeam = {
    id: Date.now(),
    name: member.name,
    email: member.email,
    role: member.role
    };
    setTeam([...team, newTeam]);
  }

  return (
    <div className='App'>
      <h1>Team Members!</h1>
      <TeamForm addMember={addTeamMember}/>
      <Team memberList={team} />
    </div>
  );
}

export default App;
