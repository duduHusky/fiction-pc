import {useParams} from 'react-router-dom'

function RankIn() {
    let {rankId} = useParams()
    return <div>rank in {rankId}</div>
}

export default RankIn;