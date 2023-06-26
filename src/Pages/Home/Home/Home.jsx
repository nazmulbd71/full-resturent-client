import AboutDish from "../AboutDish/AboutDish";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import ContactInfo from "../ContactInfo/ContactInfo";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <AboutDish></AboutDish>
           <PopularMenu></PopularMenu>
           <ContactInfo></ContactInfo>
           <ChefRecommend></ChefRecommend>
           <Featured></Featured>
        </div>
    );
};

export default Home;