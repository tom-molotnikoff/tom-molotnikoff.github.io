import { Helmet } from "@dr.pogodin/react-helmet";

interface PageMetadataProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  url?: string;
  image?: string;
}

function PageMetadata(props: PageMetadataProps) {
  const defaultProps = {
    title: "Tom Molotnikoff's Personal Website",
    description:
      "Welcome to Tom Molotnikoff's personal website, where you can explore my projects, blog posts, and get in touch with me. I'm a software developer and distributed computing enthusiast.",
    keywords:
      "Tom Molotnikoff, personal website, software developer, distributed computing, blog, projects, contact",
    author: "Tom Molotnikoff",
    url: "https://tom-molotnikoff.github.io/",
    image: "https://tom-molotnikoff.github.io/og-image.png",
  };

  return (
    <Helmet>
      <title>{props.title || defaultProps.title}</title>
      <meta
        name="description"
        content={props.description || defaultProps.description}
      />
      <meta name="keywords" content={props.keywords || defaultProps.keywords} />
      <meta name="author" content="Tom Molotnikoff" />
      <meta property="og:title" content={props.title || defaultProps.title} />
      <meta
        property="og:description"
        content={props.description || defaultProps.description}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.url || defaultProps.url} />
      <meta property="og:image" content={props.image || defaultProps.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title || defaultProps.title} />
      <meta
        name="twitter:description"
        content={props.description || defaultProps.description}
      />
      <meta name="twitter:image" content={props.image || defaultProps.image} />
    </Helmet>
  );
}

export default PageMetadata;
