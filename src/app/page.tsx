import Card from "@/components/Card.component";
import ExperienceCounter from "@/components/ExperinceCounter.component";
import IntroCard from "@/components/IntroCard.component";
import ProjectCounter from "@/components/ProjectCounter.component";
import TechStackCard from "@/components/TechStackCard.component";

export default function Home() {
  return (
    <div className=" w-full h-dvh p-12 grid sm:grid-cols-1 sm:grid-rows-auto md:grid-cols-12 md:grid-rows-9 gap-4 bg-darkBackground">
      <TechStackCard />
      <ProjectCounter />
      <ExperienceCounter />
      <IntroCard />
      <Card className="col-span-4 row-span-3 col-start-4 row-start-7">
        Socials
      </Card>
      <Card className="col-span-6 row-span-6 col-start-8 row-start-1">
        Projects
      </Card>
      <Card className="col-span-6 row-span-3 col-start-8 row-start-7">
        Work Together
      </Card>
      {/* Terminal Popup Button */}
      <div className="absolute bottom-4 right-4 bg-primaryAccent size-8 rounded-xl"></div>
    </div>
  );
}
