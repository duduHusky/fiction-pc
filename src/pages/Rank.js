import TopList from '../components/TopList/TopList'
import {Route, Switch, useRouteMatch} from 'react-router-dom'
import RankIndex from '../components/RankComponent/Rank'
import './Rank.scss'
import SortList from '../components/SortList/SortList'
import RankIn from '../components/RankComponent/RankIn'

function Rank() {
    let {path} = useRouteMatch()

    return <div className="rank-page">
        <div className="list">
            <TopList/>
            <SortList/>
        </div>

        <div className="rank">
            <Switch>
                <Route exact path={path}>
                    <RankIndex />
                </Route>
                <Route path={`${path}/:rankId`}>
                    <RankIn/>
                </Route>
            </Switch>
        </div>
    </div>
}

export default Rank