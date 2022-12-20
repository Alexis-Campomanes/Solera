import React, { useState } from 'react';
import './Left.scss';


const Left = ({item, onUpdate, onDelete}) => {

    const regNameInput = React.useRef();
    const regDescriptionInput = React.useRef();

    const [isEdit, setIsEdit] = useState(false);
    
    function FormEdit() {
      const [newValue, setNewValue] = useState(item);

      function handleSubmit(evt){
        evt.preventDefault();
      }

      function handleChange(evt) {
        evt.preventDefault();
        const value = evt.target.value;
        setNewValue(value)
      }

      function handleClickGrabar() {
        const newData = {
          id: item.id,
          nombre: regNameInput.current.value,
          description: regDescriptionInput.current.value
        }
        setNewValue(newData)
        onUpdate(newData.id, newData)
        setIsEdit(false)
      }

      return(
        <form className='r-form g-form' onSubmit={handleSubmit}>
          <div className='r-alig'>
            <input 
              ref={regNameInput}
              type="text" 
              onChange={handleChange} 
              value= {newValue.nombre}/>
            <input 
              ref={regDescriptionInput}
              type="text" 
              onChange={handleChange} 
              value= {newValue.description}   
              />
          </div>
          <button className='button' onClick={handleClickGrabar}>Grabar</button>
        </form>
      );
    }

    function deleteItem2() {
      onDelete(item.id)
    }
    
    function TodoElement(){
        return (
          <div className='left'>
            <div className='l-title'>
              <span> { item.nombre } </span>
              <span> { item.description } </span>
            </div>
            <div className='l-footer'>
              <button className='l-button' onClick={() => setIsEdit(true)}>Editar</button>
              <button className='l-button' onClick={deleteItem2}>Eliminar</button>
            </div>
          </div>
      );
    }

    return(
      <div>
      {isEdit ? <FormEdit /> : <TodoElement/>} 
      </div>
    )
    
}

export default Left;