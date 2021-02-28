import { useDrizzle } from '../drizzle';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import AddPage from '../add/AddPage';
import HomePage from '../home/HomePage';
import RealEstatesProvider from '../real-estates';
import Navbar from '../navbar/Navbar';
import RealEstateListPage from '../real-estates-list/RealEstateListPage';
import MySalesPage from '../my-sales/MySalesPages';

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
      <Navbar/>
      <main>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/real-estates/add" exact component={AddPage}/>
          <Route path="/real-estates" exact component={RealEstateListPage}/>
          <Route path="/my-sales" exact component={MySalesPage}/>
          <Redirect to="/"/>
        </Switch>
      </main>
    </RealEstatesProvider>
  );
}

export default App;
