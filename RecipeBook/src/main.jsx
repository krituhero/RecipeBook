import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from './body.jsx';
import About from './about.jsx';
import Header from './header.jsx';


function App() { return (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Body} />
      <Route path="/about" Component={About} />
    </Routes>
  </BrowserRouter>
  )
}

export default App

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
