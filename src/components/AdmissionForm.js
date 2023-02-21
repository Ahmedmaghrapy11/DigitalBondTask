import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdmissionForm() {

    const [ name, setName ] = useState('');
    const [ position, setPosition ] = useState();
    const [ availabilityDate, setAvailabilityDate ] = useState();
    const [ expectedSalary, setExpectedSalary ] = useState();
    const [ dob, setDof ] = useState();
    const [ address, setAddress ] = useState('');
    const [ phone, setPhone ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ maritalStatus, setMaritalStatus ] = useState("");
    const [ selectedFile, setSelectedFile ] = useState();
	const [ isFilePicked, setIsFilePicked ] = useState(false);

    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name.length === 0 || expectedSalary < 100 ||address.length ===0 
            || phone.length < 11 || email.length === 0) {
                setError(true);
            }
        if(error) {
            console.log("invalid inputs");
            return;
        }
        else {
            navigate("/thankyou");
        }
    };

    const changeFileHandler = (e) => {
        setSelectedFile(e.target.files[0]);
        setIsFilePicked(true);
    };
    
    return (
      <>
        <div className="bg-blue-900 mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-4">
          <div className="md:col-span-1">
            <div className="m-10 px-4 sm:px-0">
              <h3 className="text-4xl font-medium leading-6 text-white">Personal Information</h3>
            </div>
          </div>
          <div className="mt-5 md:col-span-4 md:mt-0">
            <form action="#" method="POST" onSubmit={handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="m-10 col-span-6 sm:col-span-4">
                      <label htmlFor="name" className="block text-xl font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        id="name"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        placeholder="Your full name"
                        autoComplete="given-name"
                        className="mt-3 block p-3 w-full rounded-md border-teal-500 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                      />
                    </div>

                    <div className="m-10 col-span-6 sm:col-span-4">
                      <label htmlFor="country" className="block text-xl font-medium text-gray-700">
                        Position
                      </label>
                      <select
                        id="country"
                        name="country"
                        onChange={(e) => {
                            setPosition(e.target.value);
                        }}
                        autoComplete="country-name"
                        className="mt-3 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Front-end developer</option>
                        <option>Back-end developer</option>
                        <option>Mobile developer</option>
                      </select>
                    </div>

                    <div className="m-10 col-span-6 sm:col-span-4">
                      <label htmlFor="name" className="block text-xl font-medium text-gray-700">
                        Availability Date
                      </label>
                      <input
                        type="date"
                        name="availabilty-date"
                        required
                        id="availabilty-date"
                        onChange={(e) => {
                            setAvailabilityDate(e.target.value);
                        }}
                        autoComplete="date"
                        className="mt-3 block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="m-10 col-span-6 sm:col-span-4">
                      <label htmlFor="name" className="block text-xl font-medium text-gray-700">
                        Expected salary
                      </label>
                      <input
                        type="number"
                        placeholder="0"
                        name="expected-salary"
                        required
                        id="expected-salary"
                        onChange={(e) => {
                            setExpectedSalary(e.target.value);
                        }}
                        autoComplete="expected-salary"
                        className="mt-1 block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    
                    <div className="m-10 col-span-6 sm:col-span-4">
                      <label htmlFor="name" className="block text-xl font-medium text-gray-700">
                        Date of birth
                      </label>
                      <input
                        type="date"
                        name="date-of-birth"
                        required
                        id="date-of-birth"
                        onChange={(e) => {
                            setDof(e.target.value);
                        }}
                        autoComplete="date"
                        className="mt-3 block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="m-10 col-span-6 sm:col-span-4">
                      <label htmlFor="last-name" className="block text-xl font-medium text-gray-700">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        onChange={(e) => {
                            setAddress(e.target.value);
                        }}
                        placeholder="Your home address"
                        autoComplete="address"
                        className="mt-3 block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="m-10 col-span-6 sm:col-span-4">
                      <label htmlFor="last-name" className="block text-xl font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                        placeholder="01234567891"
                        autoComplete="address"
                        className="mt-3 block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="m-10 col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-xl font-medium text-gray-700">
                        E-mail
                      </label>
                      <input
                        type="email"
                        name="email-address"
                        id="email-address"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        placeholder="example@gmail.com"
                        autoComplete="email"
                        className="mt-3 block p-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="m-10 col-span-6 sm:col-span-4">
                      <label htmlFor="country" className="block text-xl font-medium text-gray-700">
                        Marital status
                      </label>
                      <select
                        id="country"
                        name="country"
                        onChange={(e) => {
                            setMaritalStatus(e.target.value);
                        }}
                        autoComplete="country-name"
                        className="mt-3 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Single</option>
                        <option>Engagged</option>
                        <option>Married</option>
                      </select>
                    </div>

                    <div className="m-10 col-span-6 sm:col-span-4">
                    <label className="block text-xl font-medium text-gray-700">Resume</label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={changeFileHandler} />
                          </label>
                          {isFilePicked ? (
                                <div>
                                    <p>Filename: {selectedFile.name}</p>
                                    <p>Filetype: {selectedFile.type}</p>
                                    <p>Size in bytes: {selectedFile.size}</p>
                                    <p>
                                        lastModifiedDate:{' '}
                                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                                    </p>
                                </div>
                            ) : (
                                <p className="pl-1">or drag and drop</p>)}
                        </div>
                        <p className="text-xs text-gray-500">PDF, TXT, Word up to 5MB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 text-right px-4 py-3 mr-64 mb-10 sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
    )
}
  