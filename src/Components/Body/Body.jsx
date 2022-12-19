import React, { useState } from 'react';
import './Body.scss';
import '../Body/Left/Left'
import Left from '../Body/Left/Left';




const dataFixed = {
    
  nombre: "",
  description: "",
  
}




const Body = () => {

  const [values, setValues] = useState(dataFixed);
  const [todos, setTodos] = useState([]);

  const handleSubmit = (evt) => {
        
    evt.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      nombre:values.nombre,
      description: values.description,
    };
    setTodos([...todos, newTodo]);
}

const handleChange = (evt) => {
  evt.preventDefault();
  setValues({
      ...values,
  [evt.target.name] : evt.target.value
  })}

  const handleUpdate = (id, values) => {
    const temp = [...todos];
    const item = temp.find(item=> item.id === id);
    item.nombre=values
    
    setTodos(temp)
  }

    return (
        
          <div className='body-section'>
            <div className='s-conteiner'>
              <div className='s-left'>
                {todos.map((item)=>(
                    <Left  item = { item } key={ item.id } onUpdate={handleUpdate}/>
                  ))}
                
              </div>
              <div className='s-right'>
              <section className='right'>
                <span>Servicio</span>
                <form className='r-form' onSubmit={handleSubmit}>
                  <div className='r-section'>
                    <label htmlFor='nombre'>Nombre</label>
                    <input 
                    id= 'nombre'
                    name= 'nombre'
                    type= "text"
                    value= {values.nombre}
                    onChange= {handleChange}
                    />
                  </div>
                  <div className='r-section'>
                    <label htmlFor='description'>Descripción</label>
                    <input 
                    id= 'description'
                    name= 'description'
                    type= "text"
                    value= {values.description}
                    onChange= {handleChange} />
                  </div>
                  <div className='r-button'>
                    <button type='submit' className='button' onClick={handleSubmit} >Grabar</button>
                    <button className='button b-cancel' >Cancelar</button>
                  </div>
                </form>    
              </section>
              </div>
            </div> 
          </div>
  
    );
}

export default Body;
