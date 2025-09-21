import Introduction from "@/pages/home/IntroductionText";
import TextWithCatCarousel from "@/pages/home/TextWithCatCarousel";
import PageMetadata from "@/meta/PageMetadata";
import ConnectWithMe from "../contact/ConnectWithMe";
import { GetPageStyle } from "../Pages";
import AboutThisSite from "./AboutThisSite";

function Home() {
  return (
    <>
      <PageMetadata
        title="Home | Tom Molotnikoff's Personal Website"
        description="Welcome to my personal website! I'm Tom Molotnikoff, a software developer and tester. Check out my latest projects, read my blog, and feel free to get in touch."
        keywords="Tom Molotnikoff, software developer, distributed computing, cloud computing, user acceptance testing, Cirata, Sheffield, Hadoop, AWS, Azure, Google Cloud, Databricks, Snowflake, programming, personal website"
        author="Tom Molotnikoff"
        url="https://tom-molotnikoff.github.io/"
      />

      <div className={GetPageStyle()}>
        <div className="w-full max-w-6xl gap-y-10 flex flex-col">
          <Introduction />
          <AboutThisSite />
          <TextWithCatCarousel />
          <ConnectWithMe />
        </div>
      </div>
    </>
  );
}

export default Home;
