import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components';
import './App.css'
import { Home, About, NotFound, Rabotnikam, Studentam, Posetitelyam, Abiturientam } from './pages'

const App = (props) => {
  return (
    <Routes>
      <Route path='/' element={<Layout state={props.state} addText={props.addText}/>}>
        <Route index path='/' element={<Home state={props.state} addText={props.addText} addNewText={props.addNewText}/>} />
        <Route path='/About' element={<About />} />
        <Route path='/Rabotnikam' element={<Rabotnikam />} />
        <Route path='/Studentam' element={<Studentam />} />
        <Route path='/Posetitelyam' element={<Posetitelyam />} />
        <Route path='/Abiturientam' element={<Abiturientam />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
