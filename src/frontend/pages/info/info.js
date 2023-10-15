import React from 'react';
import './info.css';
import Navbar from '../../components/navbar/navbar';
import Tittle from '../../components/tittle/tittle';
import Photos from '../../../frontend/components/images-f/im';

function Info() {

    return (
        <div className="App">
            <header className="App-header">
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
                <Navbar />
            </header>
            <main>
                <Tittle />
                <div className='b'>
                <div className='image-ph'>
                    <Photos />
                </div>
                    <div className="left-container">
                        <h1 style={{ marginTop: "8%" }}>Amenazas en el uso de pantallas en la etapa infantil:</h1>
                        <img style={{ width: "70%", position: "absolute", right: "20%", top: "10%" }} src="/images/computador-sad.png" alt="computador-sad" className="computador-sad" />
                        <p className='text-card'>
                            1. Adicción: Puede generar dependencia y afectar el desarrollo social y emocional.<br />
                            2. Contenido inapropiado: Exposición a material no adecuado para la edad.<br />
                            3. Sedentarismo: Puede llevar a un estilo de vida poco activo y problemas de salud.<br />
                        </p>
                    </div>
                    <div className="right-container">
                        <h1 style={{ marginTop: "8%" }}>Oportunidades en el uso de pantallas en la etapa infantil:</h1>
                        <img style={{ maxWidth: "70%", position: "absolute", right: "20%", top: "10%" }} src="/images/computador-happy.png" alt="computador-happy" className="computador-happy" />
                        <p className='text-card'>
                            1. Educación: Herramienta de aprendizaje y acceso a recursos educativos.<br />
                            2. Desarrollo cognitivo: Puede mejorar habilidades cognitivas si se usa adecuadamente.<br />
                            3. Interacción social: Facilita la comunicación y conexión con otros.<br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Info;
