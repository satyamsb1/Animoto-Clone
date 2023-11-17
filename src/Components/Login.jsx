import Navbar from './Navbar';

function Login() {
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="login flex flex-col items-center justify-center h-screen bg-gray-100">
        <h2 className="text-center text-gray-600 text-md mt-10">
          New to Animoto?{' '}
          <span className="underline text-blue-600">Sign up free</span>
        </h2>
        <div className="main-log w-1/2 p-8 rounded-md shadow-xl">
          <h1 className="text-blue-900 font-bold text-4xl text-center mb-8">
            Welcome back
          </h1>
          <h3 className="text-xl text-center mb-10">
            Log in to create your next video.
          </h3>
          <input
            className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:border-blue-500" style={{backgroundColor: "rgb(243,243,249)"}}
            type="text"
            placeholder="Email"
          />
          <button className="text-blue-600 hover:underline text-sm mb-2 ml-2">
            Forgot?
          </button>
          <input
            className="w-full mb-6 px-4 py-2 border rounded  border-black-50" style={{backgroundColor: "rgb(243,243,249)"}}
            type="password"
            placeholder="Password"
          />
          <button className="w-full bg-blue-900 text-white py-2 rounded-full hover:bg-blue-600 mb-4">
            LOG IN WITH EMAIL
          </button>
          <p className="text-center mb-4">or</p>
          <div className="flex flex-col space-y-4">
            <button className="flex items-center justify-center bg-white border border-gray-900 py-2 px-4 rounded-full font-bold w-2/3 m-auto">
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="Google Logo"
                className="w-6 h-6 mr-2"
              />
              LOG IN WITH GOOGLE
            </button>
            <button className="w-2/3 flex font-bold items-center justify-center bg-white border border-gray-900 py-2 px-4 rounded-full m-auto">
              <img
                src="https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-512.png" 
                alt="Apple Logo"
                className="w-6 h-6 mr-2"
              />
              LOG IN WITH APPLE
            </button>
          </div>
          <p className='my-3 text-center'>
            By logging in you agree to our{' '}
            <span className='underline'>terms of service</span> and{' '}
            <span className='underline'>privacy policy.</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
