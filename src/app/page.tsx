
import Bestair from "@/components/Home/bestair";
import Dontmiss from "@/components/Home/dont-miss";
import Essential from "@/components/Home/essential";
import EssentialIcons from "@/components/Home/EssentialIcons";
import Featured from "@/components/Home/featured";
import Gearup from "@/components/Home/gearup";
import Hero from "@/components/Home/hero";
import OrderTracking from "@/components/Home/Ordertracking";


export default function Home() {
  return (
<div>
 <Hero/>
  <Bestair/>
  <Featured/>
  <Gearup/>
  <Dontmiss/>
  <Essential/>  
  <OrderTracking/> 
  <EssentialIcons/> 
   

 
  </div>

  );
}

