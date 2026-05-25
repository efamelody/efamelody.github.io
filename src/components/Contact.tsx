import { siteConfig } from "@/data/portfolio";
import StarDivider from "./StarDivider";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-gray-800 uppercase">
          Contact Me
        </h2>
        <StarDivider />
        <p className="font-body text-lg text-gray-600 mb-8">
          You can email me directly at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-primary font-semibold hover:text-secondary transition-colors"
          >
            {siteConfig.email}
          </a>
          , or simply use the form below and I&apos;ll get back to you!
        </p>

        <form
          action="https://formspree.io/f/mblkjkoy"
          method="POST"
          className="text-left"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
              Your name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Your name"
              className="w-full border-0 border-b-2 border-gray-200 pb-2 text-lg bg-transparent focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Your email"
              className="w-full border-0 border-b-2 border-gray-200 pb-2 text-lg bg-transparent focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
              Your message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              placeholder="Your message"
              className="w-full border-0 border-b-2 border-gray-200 pb-2 text-lg bg-transparent focus:border-primary focus:outline-none transition-colors resize-none"
            />
          </div>
          <input type="hidden" name="_subject" value="New contact submission!" />
          <input type="text" name="_gotcha" className="hidden" />

          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg px-10 py-3 rounded hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
