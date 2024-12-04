import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';

function Update() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/employees/${userId}`).then((response) => {
      setName(response.data.name);
      setAge(response.data.age);
      setDesignation(response.data.designation);
      setDepartment(response.data.department);
      setEmail(response.data.email);
      setAddress(response.data.address);
      setPhone(response.data.phone);
    })
  }, [])

  const validate = () => {
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!age) newErrors.age = 'Age is required';
    if (age && isNaN(age)) newErrors.age = 'Age must be a number';
    if (!designation) newErrors.designation = 'Designation is required';
    if (!department) newErrors.department = 'Department is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!address) newErrors.address = 'Address is required';
    if (!phone) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = 'Phone number must be 10 digits';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // return true if no errors
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const formData = {
        name,
        age,
        designation,
        department,
        email,
        address,
        phone,
      };

      axios.put(`http://localhost:3000/employees/${userId}`, formData).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });

      setName('');
      setAge('');
      setDesignation('');
      setDepartment('');
      setEmail('');
      setAddress('');
      setPhone('');
      setErrors({});
      navigate('/');
    }
  }


  return (
    <div className='relative h-screen w-full p-5 flex items-center justify-center'>
      <div className="w-[80%] mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Update Employee Data
        </h2>
        <form onSubmit={(e) => { handelSubmit(e) }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1 */}
            <div>
              {/* Name */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter full name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    validate();
                  }}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              {/* Designation */}
              <div className="mb-4">
                <label
                  htmlFor="designation"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Designation
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  placeholder="Enter designation"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={designation}
                  onChange={(e) => {
                    setDesignation(e.target.value)
                    validate();
                  }}
                />
                {errors.designation && <p className="text-red-500 text-sm">{errors.designation}</p>}

              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email address"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    validate();
                  }}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              </div>

              {/* Phone */}
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter phone number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value)
                    validate();
                  }}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

              </div>
            </div>

            {/* Column 2 */}
            <div>
              {/* Age */}
              <div className="mb-4">
                <label
                  htmlFor="age"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  placeholder="Enter age"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value)
                    validate();
                  }}
                />
                {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}

              </div>

              {/* Department */}
              <div className="mb-4">
                <label
                  htmlFor="department"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Department
                </label>
                <select
                  id="department"
                  name="department"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={department}
                  onChange={(e) => {
                    setDepartment(e.target.value)
                    validate();
                  }}
                >
                  <option value="">Select Department</option>
                  <option value="IT">IT</option>
                  <option value="Human Resources">Human Resources</option>
                  <option value="Management">Management</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Analytics">Analytics</option>
                  <option value="Design">Design</option>
                  <option value="Infrastructure">Infrastructure</option>
                  <option value="Quality Assurance">Quality Assurance</option>
                </select>
                {errors.department && <p className="text-red-500 text-sm">{errors.department}</p>}

              </div>

              {/* Address */}
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="4"
                  placeholder="Enter address"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value)
                    validate();
                  }}
                ></textarea>
                {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}

              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Update