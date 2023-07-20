import Everything from "./components/Landing/Everything";
import FiverrBusiness from "./components/Landing/FiverrBusiness";
import HeroBanner from "./components/Landing/HeroBanner";
import JoinFiverr from "./components/Landing/JoinFiverr";
import PopularServices from "./components/Landing/PopularServices";
import Services from "./components/Landing/Services";

import Companies from "./components/Landing/Companies";
function Index(){
    return(
        <div>
            <HeroBanner/>
            <Companies/>
            <PopularServices/>
            <Everything/>
            <Services/>
            <FiverrBusiness/>
            <JoinFiverr/>
        </div>
    )
}

export default Index;