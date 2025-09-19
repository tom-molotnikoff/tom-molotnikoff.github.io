import { TypographyH4 } from "@/components/typography";

function ConnectWithMe() {
  return (
    <div className="flex flex-col items-center">
      <TypographyH4>Connect with me on social media</TypographyH4>

      <div className="flex flex-row gap-4 mt-4">
        <a
          href="https://www.linkedin.com/in/tom-molotnikoff/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/contact-logos/linkedin-logo.png"
            alt="LinkedIn"
            className="h-10 w-10 rounded hover:scale-110 transition-transform"
          />
        </a>
        <a
          href="https://github.com/tom-molotnikoff"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/contact-logos/github.png"
            alt="GitHub"
            className="h-10 w-10 hover:scale-110 transition-transform"
          />
        </a>
      </div>
    </div>
  );
}

export default ConnectWithMe;
