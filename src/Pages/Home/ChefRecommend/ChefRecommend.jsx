import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import recipe1 from '../../../assets/menu/pizza-bg.jpg'
import recipe2 from '../../../assets/menu/salad-bg.jpg'
import recipe3 from '../../../assets/menu/soup-bg.jpg'

const ChefRecommend = () => {
    return (
        <section className="mb-10">
            <SectionTitle
                subHeading={"Should Try"}
                heading={"CHEF RECOMMENDS"}
            ></SectionTitle>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={recipe1} alt="Shoes" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Hot Pizza</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perferendis, quos possimus corporis voluptatum incidunt assumenda inventore quo</p>
                        <div className="card-actions">
                            <button className="btn btn-accent">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={recipe2} alt="Shoes" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Bangali Salad</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perferendis, quos possimus corporis voluptatum incidunt assumenda inventore quo</p>
                        <div className="card-actions">
                            <button className="btn btn-outline mx-auto flex border-b-4 mt-6">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={recipe3} alt="Shoes" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Tomato Soup</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perferendis, quos possimus corporis voluptatum incidunt assumenda inventore quo</p>
                        <div className="card-actions">
                            <button className="btn btn-accent">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecommend;