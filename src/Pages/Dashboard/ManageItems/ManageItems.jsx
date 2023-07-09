import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import { BiEdit } from "react-icons/bi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageItems = () => {
    const [menu, , refetch] = useMenu()
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log('deleted res', res.data)
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <div className="w-4/5 my-5">
            <Helmet>
                <title>Baper Hotel | Manage Items</title>
            </Helmet>
            <SectionTitle subHeading={"Hurry Up"} heading={"All Items"}></SectionTitle>
            <h1 className="text-3xl font-bold my-5">Manage Total Items: {menu.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* {/ head /} */}
                    <thead>
                        <tr className="font-bold text-black text-[15px]">
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div>{item.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.category}
                                </td>
                                <td>{item.price}</td>
                                <td>
                                    <button className="btn btn-warning text-white"><BiEdit /></button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-error text-white"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;