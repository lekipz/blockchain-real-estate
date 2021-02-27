import { forwardRef } from 'react';

const Button = forwardRef(({children, disabled = false, className = '', ...buttonProps}, ref) => {
  const enabledClasses = !disabled ? 'hover:bg-gray-100 active:bg-gray-200' : 'cursor-default bg-gray-300 text-gray-600';

  return (
    <button {...buttonProps}
            className={`px-4 py-2 focus:outline-none ${enabledClasses} border rounded ${className}`}
            type="submit"
            ref={ref}>
      {children}
    </button>
  );
});

export default Button;
