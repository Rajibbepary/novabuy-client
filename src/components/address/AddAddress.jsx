
import { Link, useLoaderData } from 'react-router-dom';
import my_location_image from '../../assets/my_location_image.svg'

const AddAddress = () => {
   
    const address = useLoaderData()
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const from = e.target;
        const Fullname = from.Fullname.value;
        const phonenumber = from.phonenumber.value;
        const pincode = from.pincode.value;
        const message = from.message.value;
        const city = from.city.value;
        const state = from.state.value;
        const addaddress = {Fullname,phonenumber, pincode, message, city, state}
        console.log(addaddress);
        fetch('http://localhost:8000/address', {
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addaddress)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    return (
        <>
            
            <div className="px-6 md:px-16 lg:px-32 py-16 flex flex-col md:flex-row justify-between">
                <form onSubmit={onSubmitHandler} className="w-full">
                    <p className="text-2xl md:text-3xl text-gray-500">
                        Add Shipping {address.leangth} <span className="font-semibold text-orange-600">Address</span>
                    </p>
                    <div className="space-y-3 max-w-sm mt-10">
                        <input
                            className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                            type="text"
                            name="Fullname"
                            placeholder="Full name"
                            // onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                            // value={address.fullName}
                        />
                        <input
                            className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                            type="text"
                            placeholder="Phone number"
                            name="phonenumber"
                            // onChange={(e) => setAddress({ ...address, phoneNumber: e.target.value })}
                            // value={address.phoneNumber}
                        />
                        <input
                            className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                            type="text"
                            placeholder="Pin code"
                            name="pincode"
                            // onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                            // value={address.pincode}
                        />
                        <textarea
                            className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-500/30 rounded outline-none w-full text-gray-500 resize-none"
                            type="text"
                            rows={4}
                            name="message"
                            placeholder="Address (Area and Street)"
                            // onChange={(e) => setAddress({ ...address, area: e.target.value })}
                            // value={address.area}
                        ></textarea>
                        <div className="flex space-x-3">
                            <input
                                className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                                type="text"
                                name="city"
                                placeholder="City/District/Town"
                                // onChange={(e) => setAddress({ ...address, city: e.target.value })}
                                // value={address.city}
                            />
                            <input
                                className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                                type="text"
                                name="state"
                                placeholder="State"
                                // onChange={(e) => setAddress({ ...address, state: e.target.value })}
                                // value={address.state}
                            />
                        </div>
                    </div>
                    <Link to="/addcard/:id">
                    <button type="submit" className="max-w-sm w-full mt-6 bg-orange-600 text-white py-3 hover:bg-orange-700 uppercase">
                        Save address
                    </button>
                    </Link>
                </form>
                <img
                    className="md:mr-16 mt-16 md:mt-0"
                    src={my_location_image}
                    alt="my_location_image"
                />
            </div>
          
        </>
    );
};

export default AddAddress;