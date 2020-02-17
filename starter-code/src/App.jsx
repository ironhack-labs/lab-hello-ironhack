// LE FEU : taper rafc / rfc etc etc pour init easy !
import React from 'react';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Button from "./components/Button";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div>
            <div className="blue-box">
                <Navbar />
                <Main />
                <Button />
            </div>
            <div className="white-box">
                <Footer />
            </div>
        </div>
    );
};
