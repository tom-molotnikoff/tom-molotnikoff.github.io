import { TypographyH2 } from "@/components/typography";
import JobHistory from "@/content/job-history";
import LogoGrid from "@/content/logo-grid";

function Experience() {
  return (
    <div className="flex flex-col items-center w-full gap-y-5 py-5 pl-5 pr-5">
      <div className="flex flex-col items-center w-full gap-y-5 py-5 ">
        <TypographyH2>Technologies I've Worked With</TypographyH2>
        <LogoGrid />
      </div>
      <div className="flex flex-col items-center w-full gap-y-5 py-5">
        <TypographyH2>Roles I've Held</TypographyH2>
        <JobHistory />
      </div>
    </div>
  );
}

export default Experience;
