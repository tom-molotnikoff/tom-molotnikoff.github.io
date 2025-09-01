import {
  TypographyH1,
  TypographyH2,
  TypographyP,
  TypographyMuted,
} from "@/components/typography";
import { useIsMobile } from "@/hooks/use-mobile";

function IntroductionText() {
  const isMobile = useIsMobile();

  return (
    <div className={isMobile ? "flex flex-col" : "flex"}>
      <div className="flex flex-col max-w-2xl mx-auto">
        <TypographyH1>Hi, I'm Tom!</TypographyH1>
        <TypographyH2>
          Computer Scientist • Distributed Computing Enthusiast
        </TypographyH2>
      </div>
      <div className="flex flex-col max-w-2xl mx-auto space-y-4">
        <TypographyP>
          I’m passionate about programming and software development, with a
          particular interest in cloud & distributed computing. Currently, I
          work as a Staff User Acceptance Tester & Team Lead at{" "}
          <span className="font-semibold">Cirata</span> in Sheffield, where I
          help deliver robust migration solutions for complex, large-scale
          systems.
        </TypographyP>
        <TypographyP>
          Day-to-day, I build distributed computing environments, automate with
          cloud resources & conainerisation platforms, and perform user
          acceptance testing across technologies like Hadoop, Azure, AWS, Google
          Cloud, Databricks, and Snowflake.
        </TypographyP>
        <TypographyMuted>
          Connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/tom-molotnikoff/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
        </TypographyMuted>
      </div>
    </div>
  );
}

export default IntroductionText;
