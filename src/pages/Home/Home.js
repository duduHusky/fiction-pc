import RankCon from '../../components/RankCon/RankCon'
import './Home.scss'
import NewUpdate from '../../components/NewUpdate/NewUpdate'
import Category from '../../components/CategoryList/Category'
import Slider from '../../components/Slider/Slider'
import News from '../../components/News/News'
import Featured from '../../components/Featured/Featured'

function Home() {
    const data = [
        {
            title: '总点击', url: '/rank/all-visit', items:
                [
                    {id: 1, title: '大奉打更人', author: '卖报小郎君', authorId: 233},
                    {id: 2, title: '我只有两千五百岁', author: '步行天下', authorId: 233},
                    {id: 3, title: '重生之我真没想当渣男', author: '周一口鸟', authorId: 233},
                    {id: 4, title: '开局站在人生巅峰', author: '月沧狼', authorId: 233},
                    {id: 5, title: '稳住别浪', author: '跳舞', authorId: 233},
                    {id: 6, title: '首富从谈恋爱开始', author: '王戈多', authorId: 233},
                    {id: 7, title: '我就是不按套路出牌', author: '百分之七', authorId: 233},
                    {id: 8, title: '外科教父', author: '海与夏', authorId: 233},
                    {id: 9, title: '签到球场就能无敌', author: '洛邑三十六朝', authorId: 233},
                    {id: 10, title: '剑来', author: '烽火戏诸侯', authorId: 233},
                ]
        },
        {title: '推荐数', url: '/rank/all-visit', items: [
                {id: 1, title: '大奉打更人', author: '卖报小郎君', authorId: 233},
                {id: 2, title: '我只有两千五百岁', author: '步行天下', authorId: 233},
                {id: 3, title: '重生之我真没想当渣男', author: '周一口鸟', authorId: 233},
                {id: 4, title: '开局站在人生巅峰', author: '月沧狼', authorId: 233},
                {id: 5, title: '稳住别浪', author: '跳舞', authorId: 233},
                {id: 6, title: '首富从谈恋爱开始', author: '王戈多', authorId: 233},
                {id: 7, title: '我就是不按套路出牌', author: '百分之七', authorId: 233},
                {id: 8, title: '外科教父', author: '海与夏', authorId: 233},
                {id: 9, title: '签到球场就能无敌', author: '洛邑三十六朝', authorId: 233},
                {id: 10, title: '剑来', author: '烽火戏诸侯', authorId: 233},
            ]},
        {title: '收藏数', url: '/rank/all-visit', items: []},
        {title: '下载数', url: '/rank/all-visit', items: []},
        {title: '入库时间', url: '/rank/all-visit', items: []},
    ]

    return <div className="home-page">
       <div className="content-left">
           <div className="head-show">
               <Category/>
               <div className="middle">
                   <Slider/>
                   <News/>
               </div>
           </div>
           <Featured />
           {/*<div className="sort">排行</div>*/}
           <NewUpdate/>
       </div>
       <div className="content-right">
           <div className="new-books"></div>
           {
               data.map((item, k) => {
                   return <RankCon key={k} title={item.title} url={item.url} items={item.items} width="240px"  />
               })
           }
       </div>
    </div>
}

export default Home;