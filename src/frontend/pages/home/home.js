import React from 'react';
import './home.css';
import Navbar from '../../../frontend/components/navbar/navbar';
import Tittle from '../../../frontend/components/tittle/tittle';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className="App">
            <header className="App-header">
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
                <Navbar />
            </header>
            <main>
                <Tittle />
                <div className='body-container'>
                    <div className='body-text'>
                    <p>
                    ¡Te invitamos a participar en nuestra encuesta!
                    </p>
                    <a><Link to="/" className='encuesta-button'>Ir a la encuesta</Link></a>
                    </div>
                </div>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>

                <p>asd</p>


                <p>asd</p>
            </main>
        </div>
    );
}

export default Home;
