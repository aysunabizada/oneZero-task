import React from 'react'
import Header from './component/header/Header'
import Main from './component/Main/Main'
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
        <>
            <div className="container">
                <Header />
                <Routes>
                    <Route path='/' element={<Main />}/>
                </Routes>
            </div>
        </>
    )
}

export default App
