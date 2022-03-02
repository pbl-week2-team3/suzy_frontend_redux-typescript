import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { PostList, Login } from '../pages/index';
import NotFound from './NotFound';
import Header from './Header';

function App() {
    return (
        <Suspense fallback={<NotFound />}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<PostList />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
