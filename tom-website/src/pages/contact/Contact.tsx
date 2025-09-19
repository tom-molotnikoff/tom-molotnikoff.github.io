import { pageContainerClass } from "../Pages";
import ConnectWithMe from "./ConnectWithMe";
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

      <div className={pageContainerClass}>
        <ContactForm />
        <ConnectWithMe />
      </div>
    </>
  );
}

export default Contact;
