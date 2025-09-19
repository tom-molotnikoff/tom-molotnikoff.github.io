import Introduction from "@/pages/home/IntroductionText";
import TextWithCatCarousel from "@/pages/home/TextWithCatCarousel";
import { useIsMobile } from "@/hooks/use-mobile";
import PageMetadata from "@/meta/PageMetadata";

function Home() {
  const isMobile = useIsMobile();
  const desktopAdditionalPadding = isMobile ? "py-0" : "mt-10";

  return (
    <>
      <PageMetadata
        title="Home | Tom Molotnikoff's Personal Website"
        description="Welcome to my personal website! I'm Tom Molotnikoff, a software developer and tester. Check out my latest projects, read my blog, and feel free to get in touch."
        keywords="Tom Molotnikoff, software developer, distributed computing, cloud computing, user acceptance testing, Cirata, Sheffield, Hadoop, AWS, Azure, Google Cloud, Databricks, Snowflake, programming, personal website"
        author="Tom Molotnikoff"
        url="https://tom-molotnikoff.github.io/"
      />

      <div
        className={`pt-5 px-10 flex flex-col items-center min-h-screen gap-y-10 ${desktopAdditionalPadding}`}
      >
        <div className="w-full max-w-6xl">
          <Introduction />
        </div>
        <div className="w-full max-w-6xl">
          <TextWithCatCarousel />
        </div>
      </div>
    </>
  );
}

export default Home;
