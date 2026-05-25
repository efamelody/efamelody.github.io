import StarDivider from "./StarDivider";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gradient-to-br from-primary to-secondary text-white"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-heading font-bold text-4xl md:text-5xl uppercase">About Me</h2>
        <StarDivider light />
        <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
          <p className="font-body text-lg leading-relaxed">
            Hi. I am Nur Izfarwiza, but people call me Efa. I&apos;m a fresh Computer Science
            graduate from the University of Sheffield. And I am from Malaysia.
          </p>
          <p className="font-body text-lg leading-relaxed">
            This page showcases some of the personal and academic projects I&apos;ve built —
            from data-driven research and embedded systems to web development. I&apos;m
            passionate about using technology to solve real-world problems and am always
            eager to learn more.
          </p>
        </div>
      </div>
    </section>
  );
}
