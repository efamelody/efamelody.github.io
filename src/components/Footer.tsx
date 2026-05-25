"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { siteConfig, socialLinks } from "@/data/portfolio";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const brandIcons: Record<string, typeof faLinkedin> = {
  linkedin: faLinkedin,
  github: faGithub,
};

export default function Footer() {
  const scrollTo = useSmoothScroll();

  return (
    <footer className="text-white">
      <div className="bg-gradient-to-r from-primary/90 to-secondary/90 py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 uppercase">Location</h3>
            <p className="font-body">{siteConfig.location}</p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 uppercase">Email</h3>
            <p className="font-body">{siteConfig.email}</p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 uppercase">Around the Web</h3>
            <div className="flex justify-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all"
                >
                  <FontAwesomeIcon
                    icon={brandIcons[link.title] || faLinkedin}
                    className="text-xl"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-6 text-center text-sm font-body">
        <div className="max-w-6xl mx-auto px-4">
          Copyright &copy; {siteConfig.copyright} {new Date().getFullYear()}
        </div>
      </div>
      <button
        onClick={() => scrollTo("page-top")}
        className="fixed right-[2%] bottom-[2%] w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-secondary transition-colors z-40"
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </footer>
  );
}
