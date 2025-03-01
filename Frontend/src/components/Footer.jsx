import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="relative">
    

      {/* Dark Content Section */}
      <footer className=" bg-gray-300 pt-9 text-white">
        <div className="container  mx-auto px-4">
          {/* Sale Banner */}
          <div className="text-center mb-8 ">
            <h3 className="text-3xl font-bold mb-4">
              <span className="block text-black">On Sale for a</span>
              <span className="block text-4xl mt-2 text-gray-600">
                VERY LIMITED TIME
              </span>
            </h3>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <p className="text-xl opacity-90 text-black">
              Join us today and experience the power of<br />
              <span className="font-semibold text-black">AI-powered code review</span>
            </p>
       
          </div>
         

          
        </div>
        
      </footer>
      
    <div className="bg-black">  <div className="bg-gray-300 h-20 rounded-b-full"></div></div>
{/* Copyridivght Section */}
        
      <div className="py-8 bg-black">
            <p className="text-center text-sm text-gray-400">
              Made with ❤️ in India<br />
              © {new Date().getFullYear()} AI Code Review. All rights reserved.
            </p>
            <p className="text-gray-400 text-center mt-3">Created by   <a href="
            https://www.samarhirau.me/" className="text-white">Samar Hirau</a></p>
          
          </div>
    </div>
  ); 
};

export default Footer; 