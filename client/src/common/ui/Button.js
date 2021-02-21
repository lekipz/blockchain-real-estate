import { forwardRef } from 'react';

const Button = forwardRef(({children, className = '', ...buttonProps}, ref) => (
  <button {...buttonProps}
          className={`px-4 py-2 focus:outline-none hover:bg-gray-100 active:bg-gray-200 border rounded ${className}`}
          type="submit"
          ref={ref}>
    {children}
  </button>
));

export default Button;
