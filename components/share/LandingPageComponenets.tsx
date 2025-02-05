import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex bg-white">

      <div className="flex-1 flex items-center justify-center">
        <Image src="/logotest.png" alt="logo" width={600} height={600} />
      </div>


      <div className="flex-1 flex flex-col items-center bg-gradient-to-br rounded-md from-gray-900 to-gray-800 bg-transparent justify-center px-6 py-8">
        <h1 className="text-4xl text-gray-900 font-bold mb-6">Welcome to Social App</h1>
        <div className="space-y-4 w-300 max-w-sm ">
        <SignInButton>
        <button
           
            className="w-full text-center bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all"
          >
            Login
          </button>
          </SignInButton>
          <SignUpButton>
          <button
           
            className="w-full text-center bg-transparent border-2 border-blue-500 text-blue-500 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white hover:border-transparent transition-all"
          >
            Register
          </button>
          </SignUpButton>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
