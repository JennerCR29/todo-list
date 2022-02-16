import React, { useState } from 'react';
import TODO from './TODO';
import TODOVista from './TODOVista';

function TodoLista() {
    const [tareas, setTareas] = useState([]);

    const cambiarEstado = (tareaId, estado) => {
        const elemento = [...tareas].find(tarea => tarea.id === tareaId);

        const index = tareas.indexOf(elemento);

        elemento.prueba = estado;

        tareas[index] = elemento;

    }

    const anadirTarea = tarea => {
        tarea.prueba = 'TODO';
        const newTareas = [tarea, ...tareas];

        setTareas(newTareas);
    }

    const eliminarTarea = (id) => {
        const elemento = [...tareas].find(tarea => tarea.id === id);


        if (elemento.prueba === 'TODO') {
            const eliminarElemento = [...tareas].filter(tarea => tarea.id !== id);
            setTareas(eliminarElemento);
        }
    };

    const editTarea = (tareaId, newValue) => {
        const elemento = [...tareas].find(tarea => tarea.id === tareaId);
        if (elemento.prueba === 'TODO') {
            setTareas(prev => prev.map(item => (item.id === tareaId ? newValue : item)));
        }
    };

    return (
        <div>
            <h1>Lista de Tareas para el día de hoy.</h1>
            <TODOVista onSubmit={anadirTarea}/>
            <TODO tareas={tareas} eliminarTarea={eliminarTarea} editTarea={editTarea} cambiarEstado={cambiarEstado}  />
        </div>
    )
}

export default TodoLista