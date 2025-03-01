export default function ForgotPassword() {
     return (
       <div className="flex flex-col items-center justify-center min-h-screen bg-black">
         <div className="bg-white p-6 rounded-lg shadow-md w-80">
           <h1 className="text-4xl font-bold text-gray-800 text-center">Oh, no !</h1>
           <h2 className="text-3xl font-bold text-gray-800 text-center">I forgot</h2>
           <p className="text-sm text-gray-500 text-center mt-2">
             Enter your email, phone, or username and we'll send you a link to change a new password
           </p>
   
           <div className="mt-6">
             <input
               type="text"
               placeholder="Username, Email or Phone Number"
               className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-600 text-black"
             />
   
             <button className="w-full bg-gray-800 text-white py-2 rounded-md mt-6 hover:bg-gray-700">
               Forgot Password
             </button>
   
             <p className="text-center text-sm text-gray-500 mt-4">
               Don’t have an account? <a href="/signup" className="text-gray-900 font-semibold hover:underline">Sign Up</a>
             </p>
           </div>
         </div>
       </div>
     );
   }
   