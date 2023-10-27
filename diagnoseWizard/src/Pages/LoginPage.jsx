import React from 'react';

function Login() {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="flex md:w-1/3 max-w-sm">
        <img
          src="/assets/LoginPic.svg"
          alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <h1 className="text-6xl mb-5 text-[#00A0AA]">LOGIN</h1>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
        
        <div className="flex md:flex-col text-center md:text-left">
          <button className="mt-4 bg-[#00A0AA] hover:bg-[#51c1c7] px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center ">
          Don't have an account?<a className="text-red-600 ml-1 hover:underline">Register</a>
        </div>
        <div className="mt-4 text-center font-semibold text-sm">
          <a className="text-[#00A0AA] hover:text-[#51c1c7] hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
        </div>
      </div>
    </section>
  );
}

export default Login;