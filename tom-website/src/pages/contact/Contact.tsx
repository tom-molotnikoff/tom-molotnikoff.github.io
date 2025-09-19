import ContactForm from "./ContactForm";
import PageMetadata from "@/meta/PageMetadata";

function Contact() {
  return (
    <>
      <PageMetadata
        title="Contact | Tom Molotnikoff's Personal Website"
        description="Get in touch with Tom Molotnikoff, a software developer and distributed computing enthusiast. Reach out for collaborations, enquiries, or just to connect."
        keywords="Tom Molotnikoff, contact"
        author="Tom Molotnikoff"
        url="https://tom-molotnikoff.github.io/contact"
      />

      <div className="mt-10 flex-col flex flex-1 justify-center items-center ml-3 mr-3 md:ml-10 md:mr-10 ">
        <ContactForm />
        <div className="mt-8 mb-10">
          <div className="flex flex-col items-center mt-8">
            <span className="mb-2 text-lg font-medium">
              Connect with me on social media
            </span>
            <div className="flex flex-row gap-4">
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
                  className="h-10 w-10 rounded-full bg-white hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
