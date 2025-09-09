import Introduction from "@/content/introduction-text";
import TextWithCatCarousel from "@/content/text-with-cat-carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { Helmet } from "@dr.pogodin/react-helmet";

function Home() {
  const isMobile = useIsMobile();
  const desktopAdditionalPadding = isMobile ? "py-0" : "mt-10";

  return (
    <>
      <Helmet>
        <title>
          Tom Molotnikoff | Software Developer & Distributed Computing
          Enthusiast
        </title>
        <meta
          name="description"
          content="Welcome to my personal website! I'm Tom Molotnikoff, a software developer and tester. Check out my latest projects, read my blog, and feel free to get in touch."
        />
        <meta
          name="keywords"
          content="Tom Molotnikoff, software developer, distributed computing, cloud computing, user acceptance testing, Cirata, Sheffield, Hadoop, AWS, Azure, Google Cloud, Databricks, Snowflake, programming, personal website"
        />
        <meta name="author" content="Tom Molotnikoff" />
        <meta
          property="og:title"
          content="Tom Molotnikoff | Software Developer & Distributed Computing Enthusiast"
        />
        <meta
          property="og:description"
          content="Explore Tom Molotnikoff's work in distributed computing, cloud automation, and software testing. View projects, read the blog, and connect."
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
          content="Tom Molotnikoff | Software Developer & Distributed Computing Enthusiast"
        />
        <meta
          name="twitter:description"
          content="Explore Tom Molotnikoff's work in distributed computing, cloud automation, and software testing. View projects, read the blog, and connect."
        />
        <meta
          name="twitter:image"
          content="https://tom-molotnikoff.github.io/og-image.png"
        />
      </Helmet>
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
