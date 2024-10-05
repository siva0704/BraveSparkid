
import logo from '../Assets/image.png';

export const NavbarSK: React.FC<{}> = () => { 
    
    return <>
    
  
    <nav className="bg-gradient-to-r from-white via-white to-orange-200 px-8 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <span className="text-lg font-bold text-orange-600">Spark Kids</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 ml-auto text-gray-600">
          <a href="" className="hover:text-orange-600">Home</a>
          <a href="" className="hover:text-orange-600">About Us</a>
          <a href="" className="hover:text-orange-600">Programs</a>
          <a href="" className="hover:text-orange-600">Franchise</a>
          <a href="" className="hover:text-orange-600">Contact Us</a>
        </div>

        {/* Join Now Button */}
        <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">
          Join Now
        </button>
      </div>
    </nav>
  );
    
    
    </>




}