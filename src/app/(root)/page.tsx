import { currentUser } from "@clerk/nextjs/server";
import LandingPage from "../../../components/share/LandingPageComponenets";


export default async function  Home() {
  const user = await currentUser();
  if(!user) {
    return (
    <LandingPage />
    );
  }
  return (
    <div>
   
    </div>
  );
  
}
