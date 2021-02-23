import CameraAddIcon from './CameraAddIcon';
import { useRef } from 'react';

const FileImportInput = ({ onFilesChanged }) => {
  const fileInput = useRef(null);
  const handleClick = () => {
    fileInput.current.click();
  };
  const handleChange = (e) => {
    onFilesChanged(e.target.files);
  }

  return (
    <div>
      <button onClick={handleClick}
              type="button"
              className="w-full h-px flex justify-center items-center border-8 border-gray-400 border-dashed hover:cursor-pointer focus:outline-none"
              style={{minHeight: '200px'}}>
        <CameraAddIcon color="#AAA" width={80} height={80}/>
      </button>
      <input type="file"
             accept="image/*"
             multiple
             ref={fileInput}
             onChange={handleChange}
             style={{display: 'none'}}/>
    </div>
  );
};

export default FileImportInput;
