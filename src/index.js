import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import store from './store'

const header = ReactDOM.createRoot(document.getElementById('header'));
let rerenderEntirePage = (state) => {
  header.render(
    <BrowserRouter>
      <App state={store.state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>
  )
}
rerenderEntirePage(store.state);
store.subscribe(rerenderEntirePage);