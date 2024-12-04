import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

function Home() {
    const [userdata, setUserdata] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/employees').then((response) => {
            setUserdata(response.data);
        });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/employees/${id}`)
            .then(() => {
                setUserdata((prevData) => prevData.filter((employee) => employee.id !== id));
            })
            .catch((err) => {
                console.error('Error deleting employee:', err);
            });
    };
    


    return (
        <div className="text-white p-5">
            <h2 className="text-2xl text-center font-bold underline">Employee Data</h2>
            <Link to="/create">
                <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                    Add Employee
                </button>
            </Link>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-3">Id</th>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Designation</th>
                            <th scope="col" className="px-6 py-3">E-mail</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userdata?(userdata.map((employee) => (
                            <tr
                                key={employee.id}
                                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                            >
                                <td className="px-6 py-4">{employee.id}</td>
                                <td className="px-6 py-4">{employee.name}</td>
                                <td className="px-6 py-4">{employee.designation}</td>
                                <td className="px-6 py-4">{employee.email}</td>
                                <td className="px-6 py-4">
                                    <Link to={`/read/${employee.id}`}>
                                        <button
                                            type="button"
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                        >
                                            View
                                        </button>
                                    </Link>
                                    <Link to={`/update/${employee.id}`}>
                                        <button
                                            type="button"
                                            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                                        >
                                            Edit
                                        </button>
                                    </Link>
                                        <button
                                            type="button"
                                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                            onClick={()=>{
                                                handleDelete(employee.id)
                                            }}
                                        >
                                            Delete
                                        </button>
                                </td>
                            </tr>
                        ))):(<tr className='text-center'><td colSpan={5}>Loding......</td></tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
