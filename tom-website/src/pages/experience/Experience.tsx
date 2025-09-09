import { TypographyH2 } from "@/components/typography";
import JobHistory from "@/content/job-history";
import LogoGrid from "@/content/logo-grid";
import { Helmet } from "@dr.pogodin/react-helmet";

function Experience() {
  return (
    <>
      <Helmet>
        <title>Experience | Tom Molotnikoff's Personal Website</title>
        <meta
          name="description"
          content="Learn more about my professional experience, roles, and technical skills in software development and testing. Explore my expertise in distributed systems, cloud platforms like AWS and Azure, and technologies such as Hive, Hadoop, Databricks, and more. View projects, read the blog, and connect today."
        />
        <meta
          name="keywords"
          content="Tom Molotnikoff, software developer, software tester, software, personal website, projects, blog, contact, distributed systems, microservices, docker, cloud computing, hadoop, hive, azure, ansible, golang, java, typescript, linux, snowflake, react, cloudera, ceph, aws, iceberg, databricks, snowflake, kafka, terraform"
        />
        <meta name="author" content="Tom Molotnikoff" />
        <meta
          property="og:title"
          content="Experience | Tom Molotnikoff's Personal Website"
        />
        <meta
          property="og:description"
          content="Learn more about my professional experience, roles, and technical skills in software development and testing. Explore my expertise in distributed systems, cloud platforms like AWS and Azure, and technologies such as Hive, Hadoop, Databricks, and more. View projects, read the blog, and connect today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tom-molotnikoff.github.io/" />
        <meta
          property="og:image"
          content="https://tom-molotnikoff.github.io/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Experience | Tom Molotnikoff's Personal Website"
        />
        <meta
          name="twitter:description"
          content="Learn more about my professional experience, roles, and technical skills in software development and testing. Explore my expertise in distributed systems, cloud platforms like AWS and Azure, and technologies such as Hive, Hadoop, Databricks, and more. View projects, read the blog, and connect today."
        />
        <meta
          name="twitter:image"
          content="https://tom-molotnikoff.github.io/og-image.png"
        />
      </Helmet>
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
    </>
  );
}

export default Experience;
