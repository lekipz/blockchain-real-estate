import { useDrizzle } from '../drizzle';
import { Redirect, Route, Switch } from 'react-router-dom';
import RealEstateDetailsPage from '../details/RealEstateDetailsPage';
import HomePage from '../home/HomePage';
import RealEstatesProvider from '../real-estates';
import Navbar from '../navbar/Navbar';
import AddPage from '../add/AddPage';
import ScreenSpinner from '../common/ui/ScreenSpinner';

function App() {
  const { initialized } = useDrizzle();

  if (!initialized) {
    return <ScreenSpinner/>;
  }

  return (
    <RealEstatesProvider>
      <Navbar/>
      <main>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/real-estates/add" exact component={AddPage}/>
          <Route path="/real-estates/:id" exact component={RealEstateDetailsPage}/>
          <Redirect to="/"/>
        </Switch>
      </main>
    </RealEstatesProvider>
  );
}

export default App;
