import {HomeBioSection} from "@/components/Pages/Home/Bio";
import {HomeUniversitiesSection} from "@/components/Pages/Home/Universities/index.jsx";
import {HomeResearchInterestsSection} from "@/components/Pages/Home/Interests";


export const HomePage = () => {
    return <>
        <HomeBioSection/>
        <HomeUniversitiesSection />
        <HomeResearchInterestsSection />
    </>
}
