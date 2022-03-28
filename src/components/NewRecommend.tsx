import { Link } from "react-router-dom";

const NewRecommend = () => {
	return <div className="fr pt-new-recomment mt10" style={{'height':'370px'}}>
		<div className="pt-new-recomment-title">新书推荐</div>
		<ul className="pt-new-recomment-list">
			<li>
				<a title="都市" className="color3 f_bold" href="/category/dushi.html">[都市]</a>
				<Link to="/1/" className="color4 pt-text" title="重生青云路">重生青云路</Link>
			</li>
			<li>
				<a title="游戏" className="color3 f_bold" href="/category/youxi.html">[游戏]</a>
				<a href="/10/" className="color4 pt-text" title="开局一群原始人">开局一群原始人</a>
			</li>
			<li>
				<a title="游戏" className="color3 f_bold" href="/category/youxi.html">[游戏]</a>
				<a href="/9/" className="color4 pt-text" title="凌天剑神">凌天剑神</a>
			</li>
			<li>
				<a title="玄幻" className="color3 f_bold" href="/category/xuanhuan.html">[玄幻]</a>
				<a href="/8/" className="color4 pt-text" title="诸天灵途">诸天灵途</a>
			</li>
			<li>
				<a title="科幻" className="color3 f_bold" href="/category/kehuan.html">[科幻]</a>
				<a href="/7/" className="color4 pt-text" title="无限沉沦">无限沉沦</a>
			</li>
			<li>
				<a title="玄幻" className="color3 f_bold" href="/category/xuanhuan.html">[玄幻]</a>
				<a href="/6/" className="color4 pt-text" title="给修炼开个挂">给修炼开个挂</a>
			</li>
			<li>
				<a title="都市" className="color3 f_bold" href="/category/dushi.html">[都市]</a>
				<a href="/5/" className="color4 pt-text" title="重生之赚它十个亿">重生之赚它十个亿</a>
			</li>
			<li>
				<a title="武侠" className="color3 f_bold" href="/category/wuxia.html">[武侠]</a>
				<a href="/4/" className="color4 pt-text" title="从黑山老祖开始">从黑山老祖开始</a>
			</li>
			<li>
				<a title="玄幻" className="color3 f_bold" href="/category/xuanhuan.html">[玄幻]</a>
				<a href="/3/" className="color4 pt-text" title="帝霸">帝霸</a>
			</li>
			<li>
				<a title="其他" className="color3 f_bold" href="/category/qita.html">[其他]</a>
				<a href="/2/" className="color4 pt-text" title="女配苟成修仙界大佬">女配苟成修仙界大佬</a>
			</li>
		</ul>
	</div>
}

export default NewRecommend
