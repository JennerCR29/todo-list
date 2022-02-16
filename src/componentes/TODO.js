import React, { useState } from 'react';
import TodoLista from './TodoLista';
import TODOVista from './TODOVista';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function TODO({ tareas, eliminarTarea, editTarea, cambiarEstado }) {

    const [edit, setEdit] = useState({
        id: null,
        value: '',
        prueba: ''
    });

    const [variable, setVariable] = useState('');

    const submitEdit = value => {
        editTarea(edit.id, value, variable);
        setEdit({
            id: null,
            value: '',
            prueba: ''
        });
    };

    if (edit.id) {
        return <TODOVista edit={edit} onSubmit={submitEdit} />
    }
    return tareas.map((tarea, index) => (

        <div className={'todo-row'} key={index}>
            <div key={tarea.id} >
                {tarea.text}
            </div>
            <div className='box'>
                <select onChange={(e) => { cambiarEstado(tarea.id, e.target.value)}}>
                    <option value='TODO'>TODO</option>
                    <option value='InPr'>In Progress</option>
                    <option value='Blo'>Blocked</option>
                    <option value='DONE'>DONE</option>
                </select>
            </div>
            <div className='icons'>
                <RiCloseCircleLine onClick={() => eliminarTarea(tarea.id)} className='delete-icon' />
                <TiEdit onClick={() => setEdit({ id: tarea.id, value: tarea.text})} className='edit-icon' />
            </div>
        </div>
    ))
}

export default TODO