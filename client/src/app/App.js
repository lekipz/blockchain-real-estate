import { useDrizzle } from '../drizzle';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import AddPage from '../add/AddPage';
import HomePage from '../home/HomePage';

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
      <Route path="/real-estates/add" exact component={AddPage} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
