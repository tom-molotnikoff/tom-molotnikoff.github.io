import {
  TypographyH3,
  TypographyMuted,
  TypographyP,
} from "@/components/typography";
import { useIsMobile } from "@/hooks/use-mobile";

function JobHistory() {
  const jobs = [
    {
      most_recent_year: new Date().getFullYear(),
      title: "Staff User Acceptance Tester & Team Lead",
      company: "Cirata",
      dates: "Jul 2022 - Present",
      description: `Led two teams of testers split across UAT and Performance Testing. Guided and mentored team members to enhance their skills and knowledge. Wrote, managed, and delivered onboarding material to bring new hires up to speed on highly technical areas within a short time. Topics included: Hive, Hadoop, Kerberos, Cloud Object Storage, AWS Glue, Databricks and Snowflake.\nResolved and coached on any technical issues that occur within the team.\nProduced analysis and metrics on the effectiveness of testing and the quality of software under test.\nConducted technical interviews for potential hires. Developed and maintained tools and IaC to improve team efficiency and testing reliability. Joined customer calls to help troubleshoot issues and feed the knowledge back into the testing process.`,
    },
    {
      most_recent_year: 2022,
      title: "Senior User Acceptance Tester",
      company: "Cirata",
      dates: "Aug 2021 - Jul 2022",
      description: `Led user acceptance testing for distributed computing software releases. Built distributed computing environments and created cloud resources for testing. Raised defects/improvements in Jira, recorded results in Testrail, and produced test reports.\nRegularly worked with Hadoop (HDP, CDH, CDP), Azure, AWS, GCP, Hive, Kerberos, Databricks, Snowflake.\nBecame a certified ISTQB Foundation Level Tester. Worked closely with developers to reproduce issues and identify root causes.`,
    },
    {
      most_recent_year: 2021,
      title: "User Acceptance Tester",
      company: "Cirata",
      dates: "Aug 2020 - Aug 2021",
      description: `First job post-university. Performed thorough exploratory testing against distributed computing software. Built and managed test environments and cloud resources. Raised and tracked issues on the lead up to releases.`,
    },
    {
      most_recent_year: 2020,
      title: "Customer Service Senior Advisor",
      company: "Ant Marketing",
      dates: "Dec 2019 - Aug 2020",
      description: `Provided help and support to colleagues, handled escalation calls, and ensured high-quality customer service.`,
    },
    {
      most_recent_year: 2019,
      title: "Customer Service Advisor",
      company: "Ant Marketing",
      dates: "Aug 2019 - Dec 2019",
      description: `A part time role I had through University. Answered calls and emails at target speed. Memorised and applied a large set of policies and procedures under pressure to achieve 'Right First Time' with every customer interaction.`,
    },
    {
      most_recent_year: 2017,
      title: "Customer Service Assistant",
      company: "Wickes",
      dates: "Aug 2015 - Jun 2017",
      description: `Worked in a team to efficiently deliver relevant and friendly customer service. Built rapport with customers and communicated effectively within a team to save time for the *great* British public.`,
    },
  ];

  const years = Array.from({ length: new Date().getFullYear() - 2015 + 1 })
    .map((_, i) => 2015 + i)
    .reverse();

  const isMobile = useIsMobile();

  return (
    <div
      className={`relative max-w-6xl ${
        !isMobile ? "border-r-2 pr-4 border-l-2 border-muted-foreground/30" : ""
      } `}
    >
      {years.map((year, _) => {
        const job = jobs.find((j) => j.most_recent_year === year);
        return (
          <div
            key={year}
            className={`flex items-start ${job ? "mb-10" : "mb-4"}`}
            style={{ position: "relative" }}
          >
            <div
              className={`pt-1 text-right pr-4 ${
                job
                  ? "font-bold text-lg"
                  : "text-xs text-muted-foreground opacity-70"
              } ${isMobile ? "w-12" : "w-24 "}`}
            >
              {year}
            </div>
            <div className="ml-4 flex-1">
              {job && (
                <>
                  <TypographyH3>{job.title}</TypographyH3>
                  <TypographyMuted>
                    {job.company}, {job.dates}
                  </TypographyMuted>
                  <TypographyP>{job.description}</TypographyP>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default JobHistory;
