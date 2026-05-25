import StarDivider from "./StarDivider";

export default function Hero() {
  return (
    <header
      id="page-top"
      className="bg-gradient-to-br from-primary to-secondary text-white text-center pt-32 pb-16 md:pt-44 md:pb-24"
    >
      <div className="max-w-4xl mx-auto px-4">
        <img
          src="/img/profile.JPG"
          alt="profile-pic"
          className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-full mx-auto mb-6 border-4 border-white/50 shadow-lg"
        />
        <h1 className="font-heading font-bold text-4xl md:text-7xl uppercase tracking-wide">
          Efa's Personal Projects
        </h1>
        <StarDivider light />
        <p className="font-body text-xl md:text-2xl font-light">
          Computer Science Graduate | University of Sheffield
        </p>
      </div>
    </header>
  );
}
