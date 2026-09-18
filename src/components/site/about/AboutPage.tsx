import { AboutHero } from "./AboutHero";
import { CompanyProfile } from "./CompanyProfile";
import { MissionValues } from "./MissionValues";
import { LeadershipSection } from "./LeadershipSection";
import { StartProject } from "./StartProject";

const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <CompanyProfile />
      <MissionValues />
      <LeadershipSection />
      <StartProject />
    </main>
  );
};

export default AboutPage;
