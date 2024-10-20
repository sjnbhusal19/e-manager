import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Checkbox from '@mui/material/Checkbox';


function App() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div >
<h1 className='bg-purple-800 text-white'>Home page</h1>
Go to about project <Link to='/aboutProject'>About</Link>
<div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>

    {/* <Wrap>
  <WrapItem>
    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  </WrapItem>
</Wrap> */}

    </div>
  );
}

export default App;
