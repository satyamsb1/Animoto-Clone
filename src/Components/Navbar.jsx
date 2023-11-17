import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownOpen = () => {
    setDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setInterval(setDropdownOpen(false));
  };

  return (
    <div className="Navbar flex bg-slate-50">
      <div className="Img-nav mt-2">
        <Link to="/">
          <img className="w-44" src="./images/logo.png" alt="Animoto-Logo" />
        </Link>
      </div>
      <div className="flex">
        <div className="nav-items relative">
          <ul className="flex p-4 m-4 font-bold text-blue-900">
          <button><li
              className="px-4"
              onMouseEnter={handleDropdownOpen}
            >
              CREATE ^
              {isDropdownOpen && (
                <div className="absolute flex gap-10 top-full left-0 bg-white mt-2 p-2 rounded border shadow-lg " onMouseEnter={handleDropdownOpen} onMouseLeave={handleDropdownClose}>
                  <ul className='font-medium'>
                    <li className='font-bold text-sm m-3'>BY VIDEO TYPE </li>
                    <div className='flex'>
                      <div className='m-5 w-2/3'>
                        <li>Promo video</li>
                        <li>Slideshow video</li>
                        <li>Social media video</li>
                      </div>
                      <div className='m-5 w-2/3'>
                        <li>Tutorial video</li>
                        <li>Birthday video</li>
                        <li>Graduation video</li>
                      </div>
                    </div> 
                  </ul>
                  <ul className='font-medium'>
                    <li className='font-bold text-sm m-3'>BY INDUSTRY</li>
                    <div className='flex'>
                      <div className='m-5 w-2/3'>
                        <li>Business</li>
                        <li>E-commerce</li>
                        <li>Real-Estate</li>
                      </div>
                      <div className='m-5 w-2/3'>
                        <li>Photography</li>
                        <li>Education</li>
                        <li>Non-Profit</li>
                      </div>
                    </div>
                  </ul>
                </div>
              )}
            </li></button> 
            <button> <li className='px-4'>TEMPLATES</li></button>
            <button><li className='px-4'>FEATURES</li></button>
            <button><li className='px-4'>PRICING</li></button>
            <button> <li className='px-4'>LEARN</li></button>
          </ul>
          <hr className="border-b" />
        </div>
        <div className="login ml-4">
          <ul className="flex m-4 p-4 ml-28 place-content-end font-bold text-blue-900">
            <li className="mr-4">
              <Link to="/login"> LOG IN</Link>
            </li>
            <li className="mr-4">
              <Link to="/signup"> SIGN UP FREE </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
