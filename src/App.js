import './App.less';
import Login from './views/login/index';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact component={Login} path='/' />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
