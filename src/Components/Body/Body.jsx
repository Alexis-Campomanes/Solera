import React from 'react';
import './Body.scss';
import '../Body/Left/Left'
import Left from '../Body/Left/Left';
import Right from '../Body/Right/Right';

const Body = () => {
    return (
        <div className='body-section'>
          <div className='s-conteiner'>
            <div className='s-left'>
              <Left />
            </div>
            <div className='s-right'>
              <Right/>
            </div>
          </div>
            
        </div>
    );
}

export default Body;
