import CategoryList from "../components/CategoryList";
import NewRecommend from "../components/NewRecommend";

export default function Home() {
	return <div className="home">
		<div className="pt-content mt10">
			<div className="pt-floor1 clearfix">
				<CategoryList />
				<NewRecommend />
			</div>
		</div>
	</div>
}
