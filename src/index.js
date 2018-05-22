import React from 'react'
import ReactDOM from 'react-dom'
import CatMap from './CatMap'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import Header from "./Components/Header"

ReactDOM.render(
    <div className='container'>

    <Header/>
    <CatMap/>


    </div>,document.getElementById('ROOT')

)