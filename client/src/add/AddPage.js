import AddForm from './AddForm';
import { useCreateToken } from './useCreateToken';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function AddPage() {
  const { createToken, creationStatus } = useCreateToken();
  const history = useHistory();

  const handleAdd = (values) => {
    createToken(values);
  };
  useEffect(() => {
    if (creationStatus === 'success') {
      history.push('/real-estates');
    }
  }, [creationStatus, history]);

  const loading = creationStatus === 'pending';
  return (
    <section className="md:max-w-6xl mx-auto pt-4 px-4 pt-2">
      <h2 className="text-3xl mb-2">Vendez votre bien</h2>
      <AddForm onAdd={handleAdd} loading={loading}/>
    </section>
  );
}
