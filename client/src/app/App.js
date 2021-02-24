import { useDrizzle } from '../drizzle';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import AddPage from '../add/AddPage';
import HomePage from '../home/HomePage';
import RealEstateListPage from '../productList/RealEstateListPage';

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
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/add-token" exact component={AddPage} />
      <Route path="/products" exact component={RealEstateListPage}/>
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
