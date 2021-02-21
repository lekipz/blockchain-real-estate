import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => (
  <input {...props}
         ref={ref}
         className={`p-2 border rounded border-gray-300 w-full focus:outline-none focus:ring ${props.className}`}/>
));

export default Input;
