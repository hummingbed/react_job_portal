import HomeHeroComponent from "./homeComponents/HomeHeroComponent";
import PopularCategoryComponent from "./homeComponents/PopularCategoryComponent";
import PopularJobsComponent from "./homeComponents/PopularJobsComponent";
const HompageComponent = () => {
  return (
    <div>
      <HomeHeroComponent />
      <PopularCategoryComponent />
      <PopularJobsComponent/>
    </div>
  )
}

export default HompageComponent;