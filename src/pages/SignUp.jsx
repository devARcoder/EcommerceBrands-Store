import React from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <>
    <div className="text-center mb-9">
        <h1 className="text-3xl font-bold text-gray-900 font-mono">SignUp Account to iNotebook</h1>
      </div>
      <form className="max-w-md mx-auto px-6 py-2">
        <div className="relative z-0 w-full mt-3 mb-5 group">
          <input minLength={3}
            type="text"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-1 border-b-2 border-gray-800 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-9 scale-85 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:font-bold peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-9"
          >
            UserName
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-1 border-b-2 border-gray-800 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-9 scale-85 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:font-bold peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-9"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input minLength={5}
            type="password"
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-1 border-b-2 border-gray-800 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-85 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:font-bold peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-8"
          >
            Password
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input minLength={5}
            type="password"
            name="cpassword"
            id="cpassword"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-1 border-b-2 border-gray-800 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="cpassword"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-85 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:font-bold peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-8"
          >
            Confirm Password
          </label>
        </div>

        <Link to="/hero"
          type="submit"
          className="text-white bg-green-700 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Submit
        </Link>
      </form>
    </>
  )
}

export default SignUp
