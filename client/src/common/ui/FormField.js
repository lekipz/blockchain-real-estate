const FormField = ({id, label, children}) => (
  <div>
    <label className="inline-block mb-1" htmlFor={id}>
      {label}
    </label>
    {children}
  </div>
);

export default FormField;
