

const FoodCard = ({ item }) => {
    const { name, image, recipe, price } = item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <p className="absolute right-14 top-14 font-semibold bg-slate-900 rounded-lg text-white p-2">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline text-yellow-500 mx-auto flex border-b-4 my-6">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;