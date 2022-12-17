import React from 'react';
import './Right.scss';

const Right = () => {
    return (
      <section className='right'>
        <span>Servicio</span>
        <form className='r-form'>
          <div className='r-section'>
            <label>Nombre</label>
            <input type="text" />
          </div>
          <div className='r-section'>
            <label>Descripción</label>
            <input type="text" />
          </div>
          <div className='r-button'>
            <button className='button'>Grabar</button>
            <button className='button b-cancel'>Cancelar</button>
          </div>

        </form>    
            
      </section>
    );
}

export default Right;
