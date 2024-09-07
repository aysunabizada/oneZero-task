import React from 'react'
import Header from './component/header/Header'
import Main from './component/Main/Main'
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
            </Routes>
        </>
    )
}

export default App
