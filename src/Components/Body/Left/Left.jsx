import React, { useState } from 'react';
import './Left.scss';


const Left = ({item, onUpdate}) => {

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
              console.log(value)    
            }

      function handleClickGrabar(){
          const newData = {
            ...item
          }
          setNewValue(newData)
          console.log(newData)
          onUpdate(item.id, newValue)
          setIsEdit(false)
      }
      return(
        <form className='r-form g-form' onSubmit={handleSubmit}>
          <div className='r-alig'>
            <input 
              type="text" 
              onChange={handleChange} 
              value= {newValue.nombre}/>
              <input 
              type="text" 
              onChange={handleChange} 
              value= {newValue.description}   
              />
          </div>
          <button className='button' onClick={handleClickGrabar}>Grabar</button>
        </form>
      );
    }
    
    function TodoElement(){
        return (
          <div className='left'>
            <div className='l-title'>
              <span >{item.nombre}</span>
              <span>{item.description}</span>
            </div>
            <div className='l-footer'>
              <button className='l-button'onClick={() => setIsEdit(true)}>Editar</button>
              <button className='l-button'>Eliminar</button>
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
