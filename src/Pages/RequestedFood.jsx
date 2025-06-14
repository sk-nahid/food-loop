import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import Loading from '../Components/Loading';

const RequestedFood = () => {
    const [requeste, setrequest] = useState([])
    const [loading, setLoading] = useState(true)
    const { user } = useAuth()
    useEffect(() => {
        fetch(`http://localhost:3000/request-food?email=${user.email}`)
            .then(res => res.json())
            .then(data => setrequest(data))
        setLoading(false)
    }, [])

    if (loading) {
        return <Loading></Loading>
    }

    console.log(requeste)
    return (

        <div className="overflow-x-auto max-w-7xl mx-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Donar Name</th>
                        <th>Pickup Location</th>
                        <th>Expire Date</th>
                        <th>Request Date</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        requeste.map((food,index) => <tr key={index}>
                            <th>{index+1}</th>
                            <td>{ food.donorName}</td>
                            <td>{ food.requestedFoodPickup}</td>
                            <td>{ food.requestedFoodExpire}</td>
                            <td>{ food.RequestTime}</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default RequestedFood;