import { forwardRef } from 'react';
import FormField from './FormField';

const Input = forwardRef(({id, label, className = '', ...inputProps}, ref) => (
  <FormField id={id} label={label}>
    <input {...inputProps}
           ref={ref}
           id={id}
           className={`p-2 border rounded border-gray-300 w-full focus:outline-none focus:ring ${className}`}/>
  </FormField>
));

export default Input;
