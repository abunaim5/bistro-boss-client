import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const UpdateItems = () => {
    const image_hosting_api_key = import.meta.env.VITE_IMAGE_HOSTING_API_KEY
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_api_key}`
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const {name, category, price, recipe, _id} = useLoaderData();

    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        const imageFile = {
            image: data.image[0]
        }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const updatedData = {
                name: data.name,
                category: data.category,
                recipe: data.recipe,
                price: parseFloat(data.price),
                image: res.data.data.display_url
            }
            const updatedRes = await axiosSecure.patch(`/menu/${_id}`, updatedData)
            if (updatedRes.data.modifiedCount) {
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} has been updated`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            // console.log(menuRes, res.data)
        }
    }

    return (
        <div>
            <SectionTitle heading='update an item' subHeading="what's new?" />
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe name</span>
                        </div>
                        <input defaultValue={name} {...register("name")} type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </label>
                    <div className="flex gap-5 my-5">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Select Category</span>
                            </div>
                            <select defaultValue={category} {...register("category")} className="select select-bordered w-full">
                                <option disabled value='default'>Select Category</option>
                                <option value="salad">Salad</option>
                                <option value="soups">Soups</option>
                                <option value="pizza">Pizza</option>
                                <option value="desserts">Desserts</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input defaultValue={price} {...register("price")} type="number" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea defaultValue={recipe} {...register("recipe")} className="textarea textarea-bordered h-24" placeholder="Recipe details"></textarea>
                    </label>
                    <div className="my-5">
                        <input {...register("image")} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button type="submit" className="btn btn-warning">Update an Item</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItems;