import React from 'react';
import './Right.scss';

const Right = () => {
    return (
      <section className='right'>
        <h2>Servicio</h2>
        <form>
          <div className='r-section'>
            <label>Nombre</label>
            <input type="text" />
          </div>
          <div className='r-section'>
            <label>Descripción</label>
            <input type="text" />
          </div>
          <div>
            <button>Grabar</button>
            <button>Cancelar</button>
          </div>

        </form>    
            
      </section>
    );
}

export default Right;
