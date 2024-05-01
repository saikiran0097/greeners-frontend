import { Link } from "react-router-dom";

const ForgotPassword = () => {
    
  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-center text-[22px] leading-9 font-bold mb-10">
          Forgot passowrd!
        </h3>
        <form className="py-4 lg:px-0">
          <div className="mb-5">
            <input type="email" placeholder="Enter your email" name="email" className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer" required />
          </div>
          <div className="mt-7">
            <button type="submit" className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">
               Send reset token
            </button>
          </div>
          <p className="mt-5 text-center text-textColor">
            <Link to="/login" className="text-primaryColor font-medium">Go back</Link>
          </p>
          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account?
            <Link to="/register" className="text-primaryColor font-medium ml-1">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
