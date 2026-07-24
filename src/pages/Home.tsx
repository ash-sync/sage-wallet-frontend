import CallToAction from "@/components/modules/homepage/CallToAction/CallToAction";
import Finance from "@/components/modules/homepage/Finance/Finance";
import HeroSection from "@/components/modules/homepage/HeroSection/Herosection";
import Infrastructure from "@/components/modules/homepage/Infrastructure/Infrastructure";
import SecurityFocus from "@/components/modules/homepage/SecurityFocus/SecurityFocus";
import { SponsorSection } from "@/components/modules/homepage/Sponsers/Sponsers";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SponsorSection />
      <Infrastructure />
      <Finance />
      <SecurityFocus />
      <CallToAction />
    </div>
  );
}
