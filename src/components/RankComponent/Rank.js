import RankCon from '../RankCon/RankCon'

function RankIndex() {
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
        {title: '月点击', url: '/rank/all-visit', items: []},
        {title: '周点击', url: '/rank/all-visit', items: []},
        {title: '日点击', url: '/rank/all-visit', items: []},
        {title: '推荐数', url: '/rank/all-visit', items: []},
        {title: '收藏数', url: '/rank/all-visit', items: []},
        {title: '下载数', url: '/rank/all-visit', items: []},
        {title: '评论数', url: '/rank/all-visit', items: []},
        {title: '评分', url: '/rank/all-visit', items: []},
        {title: '入库时间', url: '/rank/all-visit', items: []},
    ]

    return <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {
            data.map((item, k) => <RankCon key={k} title={item.title} url={item.url} items={item.items}/>)
        }
    </div>
}

export default RankIndex