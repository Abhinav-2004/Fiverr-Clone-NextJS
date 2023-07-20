import Everything from "../components/Everything";
import FiverrBusiness from "../components/FiverrBusiness";
import HeroBanner from "../components/HeroBanner";
import JoinFiverr from "../components/JoinFiverr";
import PopularServices from "../components/PopularServices";
import Services from "../components/Services";
import Footer from "../components/Footer"
import Companies from "../components/Companies";
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
            <Footer/>
        </div>
    )
}

export default Index;