import {Routes, Route} from 'react-router-dom';

import './globals.css';
import AuthLayout from './_auth/AuthLayout';
import SignInForm from './_auth/forms/SignInForm';
import SignUpForm from './_auth/forms/SignUpForm';
import RootLayout from './_root/RootLayout';
import Home from './_root/pages/Home';

const App = () => {
    return (
        <main className="flex w-full h-screen">
            <Routes>
                {/* Public Routes */}
                <Route element={<AuthLayout />}>
                    <Route path="sign-in" element={<SignInForm />} />
                    <Route path="sign-up" element={<SignUpForm />} />
                </Route>
                {/* Private Routes */}
                <Route element={<RootLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </main>
    )
    return (
        <h1 className="flex bg-blue-500 text-red-400">
            App
        </h1>
    );
};

export default App;