import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { name, image, recipe, price,_id } = item;
    const [,refetch] = useCart();
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = item => {
        console.log(item)
        const cartItem = {menuItemId: _id, name,image,price,email: user?.email}
        if (user && user.email) {
            fetch('http://localhost:5000/carts',{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
            })
        }

    }
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
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline text-yellow-500 mx-auto flex border-b-4 my-6">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;