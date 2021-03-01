import { useDrizzle } from '../drizzle';
import { Redirect, Route, Switch } from 'react-router-dom';
import RealEstateDetailsPage from '../details/RealEstateDetailsPage';
import RealEstatesProvider from '../real-estates';
import Navbar from '../navbar/Navbar';
import AddPage from '../add/AddPage';
import ScreenSpinner from '../common/ui/ScreenSpinner';
import RealEstateListPage from '../real-estates-list/RealEstateListPage';
import MySalesPage from '../my-sales/MySalesPages';

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
          <Route path="/real-estates/add" exact component={AddPage}/>
          <Route path="/real-estates" exact component={RealEstateListPage}/>
          <Route path="/my-sales" exact component={MySalesPage}/>
          <Route path="/real-estates/:id" exact component={RealEstateDetailsPage}/>
          <Redirect to="/real-estates"/>
        </Switch>
      </main>
    </RealEstatesProvider>
  );
}

export default App;
