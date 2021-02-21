import { useState } from 'react';
import Input from '../common/ui/Input';
import TextArea from '../common/ui/TextArea';
import FileImportInput from '../common/ui/FileImportInput';
import Button from '../common/ui/Button';

let pictureId = 1;

export default function AddForm() {
  const [picturesData, setPicturesData] = useState([]);

  const handleSubmit = (e) => {

  };
  const handleFilesChanged = files => {
    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = e => setPicturesData(oldData => [...oldData, {
          id: pictureId++,
          blob: file,
          dataURL: e.target.result
        }]);
        reader.readAsDataURL(file);
      }
    }
  };
  const handleDeletePicture = id => {
    const newPicturesData = picturesData.slice();
    newPicturesData.splice(newPicturesData.findIndex(({ id: pictureId }) => id === pictureId), 1);
    setPicturesData(newPicturesData);
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="flex flex-wrap justify-between items-start">
        <div className="overflow-y-scroll w-full lg:w-2/5 pr-2 mb-2 lg:mb-0 mt-2" style={{ maxHeight: '80vh' }}>
          <FileImportInput onFilesChanged={handleFilesChanged}/>
          {picturesData.length > 0 && picturesData.map(({blob, dataURL, id}) => (
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
                 label="Nom" id="name"/>
          <TextArea className="mb-3" type="text" placeholder="Renseignez les informations essentielles..."
                    label="Description" id="description"/>
          <Input className="mb-3" type="text" placeholder="Adresse du bien" label="Adresse complète" id="address"/>
          <Input className="mb-3" type="number" label="Prix (ETH)" id="price"/>
          <div className="flex justify-end">
            <Button>
              Créer
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
