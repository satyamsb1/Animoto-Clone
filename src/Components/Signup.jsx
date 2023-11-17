
function Signup() {
  return (
    <div className='main pt-28'>
      <div className="signup flex flex-col items-center justify-center h-1/2 w-1/3 mx-auto bg-gray-100 shadow-xl p-3 rounded-md">
        <h1 className="text-blue-900 font-bold text-4xl text-center mb-4">
          Create a free account
        </h1>
        <h3 className="text-xl text-center mb-6">
          Make and share unlimited videos for free
        </h3>
        <div className="input mb-4 w-3/4">
          <input
            className="w-full px-4 py-2 border rounded-l focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Email"
          />
          <button className="text-blue-600 px-4 py-2">Show</button>
          <input
            className="w-full px-4 py-2 border rounded-b focus:outline-none focus:border-blue-500"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="w-1/2 bg-blue-900 text-white py-2 rounded-full hover:bg-blue-600 mb-4">
          CREATE AN ACCOUNT
        </button>
        <p className="text-center mb-4">
          By signing up you agree to our{' '}
          <span className='underline'>terms of service</span> and{' '}
          <span className='underline'>privacy policy.</span>
        </p>
        <h6>
          Already have an account?{' '}
          <span className='text-blue-600 underline'>Log in</span>
        </h6>
      </div>
    </div>
  );
}

export default Signup;
