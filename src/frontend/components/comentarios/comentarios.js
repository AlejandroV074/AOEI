import React, { useState, useEffect } from 'react';
import './comentarios.css';
import { database } from '../../../Database/firebase';
import { ref, onValue, off, push } from 'firebase/database';

function Comentarios() {
    const [comentarios, setComentarios] = useState([]);
    const [nombre, setNombre] = useState('');
    const [comentario, setComentario] = useState('');

    useEffect(() => {
        const comentariosRef = ref(database, 'comentarios');

        const handleData = (snapshot) => {
            const comentariosData = snapshot.val();

            if (comentariosData) {
                const comentariosArray = Object.values(comentariosData);
                setComentarios(comentariosArray);
            }
        };

        onValue(comentariosRef, handleData);
        return () => {
            off(comentariosRef, 'value', handleData);
        };
    }, []);

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    };

    const handleComentarioChange = (e) => {
        setComentario(e.target.value);
    };

    const handleComentarioSubmit = (e) => {
        e.preventDefault();
        if (nombre.trim() === '' || comentario.trim() === '') {
            return;
        }
    
        const comentariosRef = ref(database, 'comentarios'); 
        push(comentariosRef, { nombre, comentario }); 
    
        setNombre('');
        setComentario('');
    };

    return (
        <div className="comentarios-container">
            <div className="comentarios-title">
                <h2>¡Queremos saber qué opinas!</h2>
                <p>Déjanos tus comentarios</p>
            </div>
            <div className="comentarios-list">
            <ul style={{display: "contents"}}>
                {comentarios.map((c, index) => (
                    <li key={index} className="comentario">
                        <strong>{c.nombre}:</strong><br />&nbsp;{c.comentario}
                    </li>
                ))}
            </ul>
            </div>
            <div className="comentarios-input-container">
                <form onSubmit={handleComentarioSubmit}>
                    <input
                        type="text"
                        placeholder="Tu nombre*"
                        value={nombre}
                        onChange={handleNombreChange}
                        className="comentarios-input-small"
                    />
                    <textarea
                        placeholder="Escribe tu comentario..."
                        value={comentario}
                        onChange={handleComentarioChange}
                        className="comentarios-input"
                    />
                    <button type="submit" className="comentarios-button">
                        Enviar comentario <span>&#10148;</span>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Comentarios;
