import { SignUp } from "@clerk/nextjs";

const RegisterPage = () => {
  return (
    
        <SignUp
          appearance={{
            elements: {
              card: "bg-gradient-to-br from-gray-900 to-gray-800 bg-transparent shadow-none", 
              headerTitle: "text-lg font-medium text-white",
              formFieldInput:
                "bg-gray-800 border-none text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 rounded-md", 
              button:
                "bg-blue-500 text-white py-2 rounded-lg  hover:bg-blue-600 transition-all", 
              footer: "hidden", 
              formFieldLabel: "text-white text-sm mb-1", 
              formField: "mb-1", 
            },
          }}
        />

  );
};

export default RegisterPage;
