import { TypographyH2 } from "@/components/typography";
import LogoGrid from "@/content/logo-grid";

function Experience() {
  return (
    <section className="flex flex-col items-center w-full py-5">
      <TypographyH2>Technologies I Work With</TypographyH2>
      <div className="rounded-2xl shadow-lg p-3 w-full max-w-6xl">
        <LogoGrid />
      </div>
    </section>
  );
}

export default Experience;
