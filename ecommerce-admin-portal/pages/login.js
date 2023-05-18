import Link from "next/link";

const LoginPage = () => {
  return (
    <div className=" select-none w-[80%] md:w-[50%] lg:w-[30%] mt-[20%] m-auto ">
      <form className="px-5">
        <div className="mb-6 pt-3">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-6 ">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2  text-sm font-medium text-gray-900" 
          >
            Remember me
          </label>
        </div>
        <div className="w-fit m-auto">

        <button
          type="submit"
          className="mb-2 text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center  "
          >
          Submit
        </button>
            </div>
        <p></p>
        <span>Not Registered,Click</span>
        <Link href={"/register"} className="text-blue-800 font-medium underline underline-offset-2 "> here</Link>
      </form>
    </div>
  );
};

export default LoginPage;
