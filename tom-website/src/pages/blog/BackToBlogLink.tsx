import { Link } from "react-router";

function BackToBlogLink() {
  return (
    <Link
      to="/blog"
      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
    >
      <span aria-hidden="true">←</span>
      <p className="underline underline-offset-4 hover:font-bold ">
        Back to all posts
      </p>
    </Link>
  );
}

export default BackToBlogLink;
