import './AddNewProducts.css'


import axios from 'axios';
import { useForm } from "react-hook-form";

const AddNewProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        axios.post('https://damp-citadel-82174.herokuapp.com/products', data)
            .then(res => {
                // console.log(res)
                if (res.data.insertedId) {
                    alert('product inserted successfully')
                    reset();
                }
            })
    };
    return (
        <div >
            <div className="" >
                <h5 className="py-1 white-text-black-background" >Add New Product</h5>
                <div className="">
                    <form className="new-product-form" onSubmit={handleSubmit(onSubmit)}>

                        <input placeholder="name" {...register("name", { required: true, maxLength: 30 })} />

                        <textarea placeholder="description" {...register("description")} />

                        <input type="number" min="0" {...register("price")} placeholder="price" />

                        <input placeholder="colors" {...register("colors", { required: true })} />

                        <input placeholder="application areas" {...register("applicationAreas", { required: true })} />


                        <textarea placeholder="operation modes" {...register("operationModes")} />
                        <textarea placeholder="additional info" {...register("additionalInfo")} />


                        <input  {...register("img")} placeholder="image url" />
                        <input className="submit-input" style={{ fontWeight: '700', fontSize: '18px' }} type="submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddNewProducts;