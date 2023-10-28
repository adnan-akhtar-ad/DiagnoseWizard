import React from 'react';

function SignUp() {
  return (
    <section className="h-screen flex flex-col-reverse md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
     
      <div className="md:w-1/3 max-w-sm">
        <h1 className="text-6xl mb-5 text-[#59c285]">SIGN-UP</h1>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Name" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="email" placeholder="Email Address" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Confirm Password" />
        
        <div className="flex md:flex-col text-center md:text-left">
          <button className="mt-4 bg-[#59c285] hover:bg-[#4ebfa9] px-4 py-2 text-white uppercase rounded text-xs" type="submit">SIGN-UP</button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center ">
          Already have an account?<a className="text-red-600 ml-1 hover:underline">Login</a>
        </div>
        <div className="mt-4 text-center font-semibold text-sm">
        
        </div>
      </div>
      <div className="flex md:w-1/3 max-w-sm">
        <img
          src="/assets/SignUp.png"
          alt="Sample image" />
      </div>
    </section>
  );
}

export default SignUp;