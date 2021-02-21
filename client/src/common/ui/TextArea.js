import { forwardRef } from 'react';
import FormField from './FormField';

const TextArea = forwardRef(({id, label, className = '', ...textAreaProps}, ref) => (
  <FormField id={id} label={label}>
    <textarea {...textAreaProps}
              ref={ref}
              id={id}
              className={`p-2 border rounded border-gray-300 w-full focus:outline-none focus:ring ${className}`}/>
  </FormField>
));

export default TextArea;
