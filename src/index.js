import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';

let state = {
  arr1: {
    logo1: 'УИ ГА',
    logo2: 'УИ ГА им. Б.П.Бугаева',
    abiturientam: 'Абитуриентам',
    rabotnikam: 'Работникам',
    posetitelyam: 'Посетителям',
    studentam: 'Студентам'
  },
  arr2: [
    'Новости',
    'Мероприятия',
    'Образование',
    'Наука',
    'Об УИ ГА'
  ],
  arr3: [],
  arr4: ''
}

let addNewText = (text) => {
  state.arr4 = text;
  console.log(state.arr4)
}

const header = ReactDOM.createRoot(document.getElementById('header'));

let addText = (text) => {
  let newText = text;
  state.arr3.push(newText);
  rerenderEntirePage(state);
}

let rerenderEntirePage = (state) => {
  header.render(
    <BrowserRouter>
      <App state={state} addText={addText} addNewText={addNewText}/>
    </BrowserRouter>
  )
}
rerenderEntirePage(state);



// const footer = ReactDOM.createRoot(document.getElementById('footer'));
// footer.render(
//   <BrowserRouter>
//     <Header />
//   </BrowserRouter>
// );