import React, { useState, useEffect, useRef } from 'react'

function TODOVista({onSubmit}) {

    const [input, setInput] = useState('');

    const [prueba, setPrueba] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    });

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            prueba: prueba,
            isComplete: false
        });
        setInput('');
    };


    return (
        <div>
            <form className='todo-vista' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Escriba su tarea'
                    value={input}
                    name='text'
                    className='InpTodo' 
                    onChange={handleChange}
                    ref={inputRef}/>
                <button className='btnTodo'>Añadir tarea</button>
            </form>

        </div>
    )
}

export default TODOVista