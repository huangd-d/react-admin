import './App.less';
// import Login from './views/login/index';
import Toolist from './views/toolist/index';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact component={Toolist} path='/' />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
