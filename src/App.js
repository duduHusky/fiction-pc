import './App.css'
import 'antd/dist/antd.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import TopNav from './components/TopNav/TopNav'
import TopHead from './components/TopHead/TopHead'
import Nav from './components/Nav/Nav'
import Rank from './pages/Rank/Rank'
import NotFound from './pages/NotFound'
import CopyRight from './components/CopyRight/CopyRight'
import BookDetail from './pages/BookDetail/BookDetail'
import Search from './pages/Search'

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
                        <Route path="/book/:bookId">
                            <BookDetail/>
                        </Route>
                        <Route path="/search">
                            <Search />
                        </Route>
                        <Route path="*">
                            <NotFound/>
                        </Route>
                    </Switch>
                </div>
                <CopyRight/>
            </BrowserRouter>
        </div>
    )
}

export default App
