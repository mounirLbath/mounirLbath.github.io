import TypeText from "./Components/TypeText";
import Title from "./Components/Title";
import LinkButton from "./Components/LinkButton";
import DevTools from "./Components/Tools/DevTools";
import SoftwareTools from "./Components/Tools/SoftwareTools";
import ButtonScrollToSection from "./Components/ButtonScrollToSection";

export default function Home() {
  return (
    <>
      <div className="absolute top-15 left-0 rounded-full w-50 h-50 bg-gradient-to-r from-blue-50 to-blue-400 blur-3xl -z-10"></div>
      <div className="absolute top-60 left-70 sm:left-90 lg:left-150 rounded-full w-100 h-80 bg-gradient-to-r from-blue-50/50 to-blue-400/50 blur-xl -z-10"></div>

      <div id="landingPage">
        <div className="pt-[22vh] mb-0">
          <p className="text-5xl">Hi, my name is</p>
          <p className="font-mono text-7xl mb-15">Mounir Lbath</p>

          <TypeText
            sequence={[
              "I love coding.",
              1000,
              "I love math.",
              1000,
              "I love physics.",
              1000,
              "I love problem solving.",
              1000,
            ]}
          />
        </div>
        <ButtonScrollToSection sectionId="aboutMe" className="mt-10">
          About me ▼
        </ButtonScrollToSection>
      </div>

      <div id="aboutMe" className="pt-10">
        <Title>About me</Title>
        <p>
          I am a second year student at{" "}
          <LinkButton href="https://www.polytechnique.edu/en" target="blank">
            Ecole Polytechnique
          </LinkButton>{" "}
          in Paris. I was accepted there after passing a highly competitive
          entrance exam following two years of preparatory classes at{" "}
          <LinkButton
            href="https://en.wikipedia.org/wiki/Lyc%C3%A9e_Louis-le-Grand"
            target="blank"
          >
            Louis-Le-Grand
          </LinkButton>
          {", "}
          an intensive science undergraduate program. I have a deep passion for
          computer science, mathematics and physics. I love to solve problems
          and to learn new things. I&apos;ve always been fascinated by how
          science and technology can improve lives, and I&apos;m eager to
          contribute to that progress. You can check some of my coolest projects{" "}
          <LinkButton href="/projects">here</LinkButton>.
          <br /> <br />
          My notable achievements include a silver medal at the{" "}
          <LinkButton
            href="https://ipho-unofficial.org/timeline/2023/individual"
            target="blank"
          >
            International Physics Olympiad
          </LinkButton>{" "}
          in 2023, a First Prize at the{" "}
          <LinkButton
            target="blank"
            href="https://www.imc-math.org.uk/?act=results&by=sum&year=2025"
          >
            International Mathematics Competition
          </LinkButton>{" "}
          in 2025 and a Gold Medal at the{" "}
          <LinkButton
            target="blank"
            href="https://www.animath.fr/resultats-des-olympiades-nationales-de-mathematiques-2021/"
          >
            French National Mathematics Olympiad
          </LinkButton>{" "}
          in 2021. I also got selected for various competitive programming, math
          and physics camps. I now volunteer at the{" "}
          <LinkButton href="https://maths-olympiques.fr/" target="blank">
            French Olympic Mathematics Preparation
          </LinkButton>{" "}
          and the{" "}
          <LinkButton
            href="https://math.univ-lyon1.fr/~lass/club.html"
            target="blank"
          >
            Lyon Math Circle
          </LinkButton>
          .
        </p>
      </div>

      <div id="projects">
        <Title>My projects</Title>{" "}
        <LinkButton className="" href="/projects">
          Check out out some of my best projects here!
        </LinkButton>
      </div>
      <div id="contactMe">
        <Title>Contact me</Title>
        You can reach out to me on{" "}
        <LinkButton
          href="https://www.linkedin.com/in/mounir-lbath/"
          target="blank"
        >
          LinkedIn
        </LinkButton>{" "}
        or{" "}
        <LinkButton
          href="mailto:mounir.lbath.2024@polytechnique.org"
          target="blank"
        >
          by email.
        </LinkButton>
      </div>
      <div id="tools">
        <Title>Tools</Title>
        <p>Here is a list of some of the development tools I have used:</p>
        <DevTools />
        <p>And here are the softwares I use:</p>

        <SoftwareTools />
      </div>

      <div id="school">
        <Title>School</Title>
        <p>
          Here is a list of the courses I have taken or subjects I have studied
          so far:
        </p>
        <ul className="list-disc list-inside pl-5">
          <li>Computer Science</li>
          <ul className="list-disc list-inside pl-5">
            <li>Algorithms and Data Structures</li>
            <li>Object Oriented Programming</li>
            <li>Functional Programming (in OCaml)</li>
            <li>Machine Learning</li>
            <li>Introduction to Automata Theory</li>
          </ul>
          <li>Mathematics</li>
          <ul className="list-disc list-inside pl-5">
            <li>Linear Algebra</li>
            <li>Probability and Statistics</li>
            <li>Real Analysis</li>
            <li>Number Theory</li>

            <li>Galois Theory</li>
            <li>Complex Analysis</li>
            <li>Topology</li>
            <li>Olympic Math (Geometry, Combinatorics, ...)</li>
          </ul>

          <li>Physics</li>
          <ul className="list-disc list-inside pl-5">
            <li>Mechanics</li>
            <li>Quantum Mechanics</li>
            <li>Electromagnetism</li>
            <li>Thermodynamics</li>
            <li>Optics</li>
            <li>Special Relativity (IPhO level)</li>
          </ul>
          <li>Economics</li>
          <ul className="list-disc list-inside pl-5">
            <li>Introduction to microeconomics and macroeconomics</li>
          </ul>
        </ul>
      </div>
    </>
  );
}
