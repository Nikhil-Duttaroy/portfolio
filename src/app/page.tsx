import ConnectCard from "@/components/ConnectCard.component";
import ExperienceCounter from "@/components/ExperinceCounter.component";
import IntroCard from "@/components/IntroCard.component";
import JokeCard from "@/components/JokeCard.component";
import ProjectCounter from "@/components/ProjectCounter.component";
import ProjectsCard from "@/components/ProjectsCard.component";
import SocialCard from "@/components/SocialCard.component";
import TechStackCard from "@/components/TechStackCard.component";
import { FaTerminal } from "react-icons/fa";

export default function Home() {
  return (
    <div className=" w-full h-dvh p-12 flex flex-col md:grid md:grid-cols-12 md:grid-rows-9 gap-4 bg-darkBackground">
      <IntroCard />
      <ProjectCounter />
      <ExperienceCounter />
      <TechStackCard />
      <SocialCard />
      <ProjectsCard />
      <ConnectCard />
      <JokeCard />
      {/* Terminal Popup Button */}
      <div className="fixed bottom-4 right-4 bg-primaryAccent size-8 rounded-xl flex items-center justify-center cursor-pointer">
        <FaTerminal />
      </div>
    </div>
  );
}
