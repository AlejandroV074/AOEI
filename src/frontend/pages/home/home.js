import React from 'react';
import './home.css';
import Navbar from '../../../frontend/components/navbar/navbar';
import Tittle from '../../../frontend/components/tittle/tittle';
import Comentarios from '../../../frontend/components/comentarios/comentarios';
import Photos from '../../../frontend/components/images-f/im';

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
                <Photos />
                    <div className='body-text'>
                        <p>
                            ¡Te invitamos a participar en nuestra encuesta!
                        </p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSduB3-YKAkviC5U6i0QXYpiiWXXjw8CFyR2HD-eSbGETaOc2w/viewform?usp=sf_link" className='encuesta-button' style={{ color: '#FFF' }} target="_blank">
                            Ir a la encuesta
                        </a>
                    </div>
                </div>
                <Comentarios />
            </main>
        </div>
    );
}

export default Home;
