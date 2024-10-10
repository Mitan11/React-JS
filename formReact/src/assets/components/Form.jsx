import React , {useState} from 'react'

function Form() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [company, setcompany] = useState("");
    const [jobtitle, setjobtitle] = useState("");
    const [dob, setdob] = useState("");
    const [message, setmessage] = useState("");

    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            phone,
            company,
            jobtitle,
            dob,
            message
        };
        
        setSubmittedData(formData);

        setname("");
        setemail("");
        setphone("");
        setcompany("");
        setjobtitle("");
        setdob(""); 
        setmessage("");
    }

    return (
        <>
            <div className="w-full max-w-[500px] bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Form</h2>

                <form className="flex flex-col" onSubmit={handleSubmit}>

                    <input type="text" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Full Name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
                    <input type="email" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                    <input type="number" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Phone Number" value={phone} onChange={(e)=>{setphone(e.target.value)}}/>
                    <input type="text" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Company Name" value={company} onChange={(e)=>{setcompany(e.target.value)}}/>
                    <input type="text" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Job Title" value={jobtitle} onChange={(e)=>{setjobtitle(e.target.value)}}/>
                    <input type="date" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Date of Birth" value={dob} onChange={(e)=>{setdob(e.target.value)}}/>
                    <textarea name="message" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Message" value={message} onChange={(e)=>{setmessage(e.target.value)}}></textarea>

                    <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Submit</button>
                </form>

                {submittedData && (
                    <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-2">Submitted Data:</h3>
                        <p><strong>Full Name:</strong> {submittedData.name}</p>
                        <p><strong>Email:</strong> {submittedData.email}</p>
                        <p><strong>Phone Number:</strong> {submittedData.phone}</p>
                        <p><strong>Company Name:</strong> {submittedData.company}</p>
                        <p><strong>Job Title:</strong> {submittedData.jobtitle}</p>
                        <p><strong>Date of Birth:</strong> {submittedData.dob}</p>
                        <p><strong>Message:</strong> {submittedData.message}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Form