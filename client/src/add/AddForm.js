import { useState } from 'react';
import Input from '../common/ui/Input';
import TextArea from '../common/ui/TextArea';
import FileImportInput from '../common/ui/FileImportInput';
import Button from '../common/ui/Button';
import { isFormValid } from './service';

let pictureId = 1;

export default function AddForm({onAdd, loading}) {
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    address: '',
    price: '',
    picturesData: []
  });
  const handleValueChange = e => setFormValues(values => ({
    ...values,
    [e.target.name]: e.target.value
  }));
  const [showError, setShowError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowError(false);
    const values = {
      ...formValues,
      price: +(formValues.price.replace(',', '.'))
    };
    if (!isFormValid(values)) {
      setShowError(true);
      return;
    }
    await onAdd(values);
  };
  const handleFilesChanged = files => {
    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = e => setFormValues(values => ({
          ...values,
          picturesData: [
            ...values.picturesData,
            {
              id: pictureId++,
              blob: file,
              dataURL: e.target.result
            }
          ]
        }));
        reader.readAsDataURL(file);
      }
    }
  };
  const handleDeletePicture = id => {
    const newPicturesData = formValues.picturesData.slice();
    newPicturesData.splice(newPicturesData.findIndex(({id: pictureId}) => id === pictureId), 1);
    setFormValues(values => ({...values, picturesData: newPicturesData}));
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="flex flex-wrap justify-between items-start">
        <div className="overflow-y-scroll w-full lg:w-2/5 pr-2 mb-2 lg:mb-0 mt-2" style={{maxHeight: '80vh'}}>
          <FileImportInput onFilesChanged={handleFilesChanged}/>
          {formValues.picturesData.length > 0 && formValues.picturesData.map(({blob, dataURL, id}) => (
            <div key={id} className="relative pt-2">
              <img src={dataURL} alt={blob.name}/>
              <button type="button"
                      onClick={() => handleDeletePicture(id)}
                      className="absolute top-4 right-2 p-0 w-6 h-6 rounded-full bg-black text-white focus:outline-none">
                &times;
              </button>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-3/5 pl-2">
          <Input className="mb-3" type="text" placeholder="Maison 4 pièces 80m2, Appartement T3 à Nice, etc."
                 label="Nom" id="name" name="name" value={formValues.name} onChange={handleValueChange}/>
          <TextArea className="mb-3" type="text" placeholder="Renseignez les informations essentielles..."
                    label="Description" id="description" name="description" value={formValues.description}
                    onChange={handleValueChange}/>
          <Input className="mb-3" type="text" placeholder="Adresse du bien" label="Adresse complète" id="address"
                 name="address" value={formValues.address} onChange={handleValueChange}/>
          <Input className="mb-3" type="number" label="Prix (ETH)" id="price" name="price" value={formValues.price}
                 onChange={handleValueChange}/>
          {showError && (
            <div className="mb-3 border rounded border-red-800 bg-red-300 p-2">
              Le formulaire est invalide. Remplissez au minimum le nom, l'adresse et le prix, et vérifiez qu'une photo
              au moins a été ajoutée.
            </div>
          )}
          <div className="flex justify-end">
            <Button disabled={loading}>
              {loading ? 'Création...' : 'Créer'}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
