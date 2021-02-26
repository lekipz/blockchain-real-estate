import { useDrizzle } from '../drizzle';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import AddPage from '../add/AddPage';
import HomePage from '../home/HomePage';
import RealEstatesProvider from '../real-estates';
import Navbar from '../navbar/Navbar';

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
    <RealEstatesProvider>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/real-estates/add" exact component={AddPage} />
        <Redirect to="/" />
      </Switch>
    </RealEstatesProvider>
  );
}

export default App;
