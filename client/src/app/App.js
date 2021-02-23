import { useDrizzle } from '../drizzle';
import Loader from 'react-loader-spinner';
import AddPage from '../add/AddPage';
import DetailsPage from '../details/DetailsPage';

function App() {
  const { initialized } = useDrizzle();

  if (!initialized) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center">
          <Loader visible type="Oval" color="#66C"/>
          <span className="pt-2">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <DetailsPage />
  );
}

export default App;
