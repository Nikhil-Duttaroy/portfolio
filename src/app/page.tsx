import Card from "@/components/Card.component";
import ConnectCard from "@/components/ConnectCard.component";
import ExperienceCounter from "@/components/ExperinceCounter.component";
import IntroCard from "@/components/IntroCard.component";
import ProjectCounter from "@/components/ProjectCounter.component";
import SocialCard from "@/components/SocialCard.component";
import TechStackCard from "@/components/TechStackCard.component";

export default function Home() {
  return (
    <div className=" w-full h-dvh p-12 flex flex-col md:grid md:grid-cols-12 md:grid-rows-9 gap-4 bg-darkBackground">
      <TechStackCard />
      <ProjectCounter />
      <ExperienceCounter />
      <IntroCard />
      <SocialCard />
      <Card className="col-span-6 row-span-6 col-start-8 row-start-1">
        Projects
      </Card>
      <ConnectCard />
      {/* Terminal Popup Button */}
      <div className="fixed bottom-4 right-4 bg-primaryAccent size-8 rounded-xl"></div>
    </div>
  );
}
