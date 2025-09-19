import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/typography";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router";

function AboutThisSite() {
  const isMobile = useIsMobile();
  return (
    <div className={isMobile ? "flex flex-col" : "flex"}>
      <div className="flex flex-col max-w-2xl mx-auto">
        <TypographyH1>What's here?</TypographyH1>
        <TypographyH2>A bit about me, my projects and a blog</TypographyH2>
      </div>
      <div className="flex flex-col max-w-2xl mx-auto">
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <TypographyP>
              Find out more about my experience in software development and
              testing over{" "}
              <Link to="/experience" className="underline">
                here
              </Link>
              .
            </TypographyP>
          </li>
          <li>
            <TypographyP>
              Reach out to me through the{" "}
              <Link to="/contact" className="underline">
                Contact
              </Link>{" "}
              page.
            </TypographyP>
          </li>
          <li>
            <TypographyP>
              See what I'm currently working on through my{" "}
              <Link to="/blog" className="underline">
                Blog
              </Link>
              .
            </TypographyP>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutThisSite;
