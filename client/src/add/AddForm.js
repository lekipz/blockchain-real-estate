import Input from '../common/ui/Input';

export default function AddForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="mt-5 ml-5">
        <Input type="text" placeholder="Some text"/>
      </div>
    </form>
  );
}
