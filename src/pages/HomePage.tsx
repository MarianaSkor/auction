import { AboutSection } from "src/components/AboutSection";
import { InformationSection } from "src/components/InformationSection";
import { IntroSlider } from "src/components/IntroSlider";
import { Layout } from "src/components/Layout";
import { MisionSection } from "src/components/MisionSection";
import { PartnersSection } from "src/components/PartnersSection";
import { Portfolio } from "src/components/Portfolio";
import { ReportSection } from "src/components/ReportSection";

export const HomePage = () => (
  <Layout>
    <IntroSlider />
    <MisionSection />
    <AboutSection />
    <Portfolio />
    <InformationSection />
    <ReportSection />
    <PartnersSection />
  </Layout>
);
