import ConnectCard from "@/components/ConnectCard.component";
import ExperienceCounter from "@/components/ExperinceCounter.component";
import IntroCard from "@/components/IntroCard.component";
import JokeCard from "@/components/JokeCard.component";
import ProjectCounter from "@/components/ProjectCounter.component";
import ProjectsCard from "@/components/ProjectsCard.component";
import SocialCard from "@/components/SocialCard.component";
import TechStackCard from "@/components/TechStackCard.component";
import { Terminal } from "@/components/Terminal.component";
// import { FaTerminal } from "react-icons/fa";

export default function Home() {
  return (
    <div className=" w-full h-dvh p-12 2xl:p-24 flex flex-col landscapes:flex landscapes:flex-col landscapes:h-full lg:grid lg:grid-cols-12 lg:grid-rows-9 gap-4 bg-darkBackground">
      <IntroCard />
      <ProjectCounter />
      <ExperienceCounter />
      <TechStackCard />
      <SocialCard />
      <ProjectsCard />
      <ConnectCard />
      <JokeCard />
      {/* Terminal Popup Button */}
      <Terminal />
    </div>
  );
}
