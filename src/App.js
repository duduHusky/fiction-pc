import './App.css'
import 'antd/dist/antd.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import TopNav from './components/TopNav/TopNav'
import TopHead from './components/TopHead/TopHead'
import Nav from './components/Nav/Nav'
import Rank from './pages/Rank'
import NotFound from './pages/NotFound'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <TopNav/>
                <TopHead/>
                <Nav/>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/rank">
                            <Rank/>
                        </Route>
                        <Route path="*">
                            <NotFound/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
