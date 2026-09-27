import Image from "next/image";
import Title from "./Components/Title";
import LinkButton from "./Components/LinkButton";
import PostButtons from "./Components/PostComponents/PostButtons";
import { news } from "./data/news";

const profileLinks = [
  { label: "Email", href: "mailto:mounir.lbath.2024@polytechnique.org" },
  { label: "GitHub", href: "https://github.com/mounirLbath" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mounir-lbath/" },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Background circle at the bottom of the page */}
      <div className="pointer-events-none absolute -bottom-68 -right-24 sm:-right-40 rounded-full w-80 h-64 sm:w-100 sm:h-80 bg-gradient-to-br from-blue-100 to-blue-400 opacity-60 blur-3xl -z-10 dark:from-blue-900 dark:to-blue-600 dark:opacity-40"></div>

      <section className="relative flex flex-col-reverse sm:flex-row gap-8 items-start pt-6">
        {/* Background circle behind the name */}
        <div className="pointer-events-none absolute -top-6 -left-24 sm:-left-44 rounded-full w-44 h-44 bg-gradient-to-br from-blue-100 to-blue-300 opacity-70 blur-3xl -z-10 dark:from-blue-900 dark:to-blue-700 dark:opacity-40"></div>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold tracking-tight mb-5">
            Mounir Lbath
          </h1>
          <p className="mb-4">
            I am a third-year student at{" "}
            <LinkButton href="https://www.polytechnique.edu/en" target="blank">
              École Polytechnique
            </LinkButton>{" "}
            in Paris, after two years of preparatory classes at{" "}
            <LinkButton
              href="https://en.wikipedia.org/wiki/Lyc%C3%A9e_Louis-le-Grand"
              target="blank"
            >
              Louis-Le-Grand
            </LinkButton>
            . I currently work with Prof. Maks Ovsjanikov at LIX on functional maps and the spectral geometry of attention.
          </p>
          <p className="mb-5">
            I am interested in geometry and machine learning: shape
            correspondence, spectral methods, 3D computer vision and neural
            rendering, and more generally in deep learning for the 3D world.
          </p>
          <p className="text-sm">
            {profileLinks.map((link, index) => (
              <span key={link.label}>
                {index > 0 ? (
                  <span className="text-gray-400 mx-2">/</span>
                ) : null}
                <LinkButton
                  href={link.href}
                  target={link.href.startsWith("http") ? "blank" : ""}
                >
                  {link.label}
                </LinkButton>
              </span>
            ))}
          </p>
        </div>
        <Image
          src="/profile.jpg"
          alt="Portrait of Mounir Lbath"
          width={640}
          height={800}
          priority
          className="w-36 sm:w-44 h-auto shrink-0"
        />
      </section>

      <Title>News</Title>
      <ul className="list-none! pl-0! m-0!">
        {news.map((item) => (
          <li key={item.text} className="flex gap-4 sm:gap-6 text-[0.95rem]">
            <span className="text-gray-500 w-28 shrink-0">{item.date}</span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>

      <Title>Posts</Title>
      <PostButtons />

      <Title>Honors</Title>
      <ul className="list-none! pl-0! m-0! text-[0.95rem]">
        <li className="flex gap-4 sm:gap-6">
          <span className="text-gray-500 w-28 shrink-0">2025</span>
          <span>
            Gold Medal,{" "}
            <LinkButton
              target="blank"
              href="https://www.imc-math.org.uk/?act=results&by=sum&year=2025"
            >
              International Mathematics Competition
            </LinkButton>{" "}
            (IMC), Blagoevgrad, Bulgaria
          </span>
        </li>
        <li className="flex gap-4 sm:gap-6">
          <span className="text-gray-500 w-28 shrink-0">2025</span>
          <span>
            ICPC SWERC: selected in the 3 teams representing École
            Polytechnique
          </span>
        </li>
        <li className="flex gap-4 sm:gap-6">
          <span className="text-gray-500 w-28 shrink-0">2025</span>
          <span>
            Prologin (French National Algorithmic Contest): 21st nationwide
          </span>
        </li>
        <li className="flex gap-4 sm:gap-6">
          <span className="text-gray-500 w-28 shrink-0">2023</span>
          <span>
            Silver Medal,{" "}
            <LinkButton
              href="https://ipho-unofficial.org/timeline/2023/individual"
              target="blank"
            >
              International Physics Olympiad
            </LinkButton>{" "}
            (IPhO), Tokyo, Japan
          </span>
        </li>
        <li className="flex gap-4 sm:gap-6">
          <span className="text-gray-500 w-28 shrink-0">2022</span>
          <span>
            Concours Général (French national academic contest): 6th
            nationwide in Mathematics, Honorable Mention in Physics
          </span>
        </li>
        <li className="flex gap-4 sm:gap-6">
          <span className="text-gray-500 w-28 shrink-0">2021</span>
          <span>
            Gold Medal,{" "}
            <LinkButton
              target="blank"
              href="https://www.animath.fr/resultats-des-olympiades-nationales-de-mathematiques-2021/"
            >
              French Mathematics Olympiad
            </LinkButton>
          </span>
        </li>
        <li className="flex gap-4 sm:gap-6">
          <span className="text-gray-500 w-28 shrink-0">2021</span>
          <span>
            Algorea (France&apos;s largest student algorithmic competition):
            14th out of 200,000+
          </span>
        </li>
      </ul>

      <Title>Teaching &amp; service</Title>
      <ul className="text-[0.95rem]">
        <li>
          President, École Polytechnique AI Student Association (Binet IA)
        </li>
        <li>
          Volunteer teacher,{" "}
          <LinkButton href="https://maths-olympiques.fr/" target="blank">
            French Olympic Mathematics Preparation
          </LinkButton>{" "}
          and{" "}
          <LinkButton
            href="https://math.univ-lyon1.fr/~lass/club.html"
            target="blank"
          >
            Lyon Math Circle
          </LinkButton>
        </li>
      </ul>
    </div>
  );
}
