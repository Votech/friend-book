import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ ...Props }) => {
  return (
    <div className='group'>
      <input className='form-input' {...Props} />
    </div>
  );
};

export default FormInput;
