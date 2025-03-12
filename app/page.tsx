"use client";
import { useRef } from "react";
import TypeText from "./Components/TypeText";
import Button from "./Components/Button";
import Title from "./Components/Title";
import LinkButton from "./Components/LinkButton";
import NavBarButton from "./Components/NavBarButton";
import Tool from "./Components/Tool";

export default function Home() {
  const sectionRef = useRef<null | HTMLDivElement>(null);

  // Function to scroll to the next section
  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <main className="mx-[10%] sm:mx-[20%]">
        <div className="absolute top-15 left-0 rounded-full w-50 h-50 bg-gradient-to-r from-blue-50 to-blue-400 blur-3xl -z-10"></div>
        <div className="absolute top-60 left-70 sm:left-90 lg:left-150 rounded-full w-100 h-80 bg-gradient-to-r from-blue-50/50 to-blue-400/50 blur-xl -z-10"></div>

        <div className="min-h-dvh">
          <div className="pt-[35vh] mb-0">
            <p className="text-5xl">Hi, my name is</p>
            <p className="font-mono text-7xl mb-15">Mounir Lbath</p>

            <TypeText
              sequence={[
                "I love Math.",
                1000,
                "I love coding.",
                1000,
                "I love Physics.",
                1000,
                "I love Problem Solving.",
                1000,
              ]}
            />
          </div>
          <Button onClick={scrollToSection} className="mt-20">
            About me ▼
          </Button>
        </div>
        <div ref={sectionRef}>
          <Title>About me</Title>
          <p>
            I am a first year student at{" "}
            <LinkButton href="https://www.polytechnique.edu/en" target="blank">
              Ecole Polytechnique
            </LinkButton>{" "}
            in Paris. I got admitted there after 2 years of preparatory classes
            at{" "}
            <LinkButton
              href="https://en.wikipedia.org/wiki/Lyc%C3%A9e_Louis-le-Grand"
              target="blank"
            >
              Louis-Le-Grand
            </LinkButton>{" "}
            (intensive science undergraduate program). I am passionate about
            mathematics, computer science and physics. I define myself as a
            problem solver and I love to learn new things. I am currently
            interested in Machine Learning, Software Engineering, Astrophysics
            and of course pure Math. I deeply value the capibility of science &
            technology to enhance people's lives. You can check some of my
            coolest projects <LinkButton href="/projects">here</LinkButton>.
            <br /> <br />
            My notable achievements include a silver medal at the{" "}
            <LinkButton
              href="https://ipho-unofficial.org/timeline/2023/individual"
              target="blank"
            >
              International Physics Olympiad
            </LinkButton>{" "}
            in 2023 and a Gold Medal at the{" "}
            <LinkButton
              target="blank"
              href="https://www.education.gouv.fr/les-olympiades-nationales-de-mathematiques-5732"
            >
              French National Mathematics Olympiad
            </LinkButton>{" "}
            in 2021. I also participated in various Math, Physics and coding
            camps to prepare for different competitions. I now volunteer at the{" "}
            <LinkButton href="https://maths-olympiques.fr/" target="blank">
              French Olympic Mathematics Preparation
            </LinkButton>{" "}
            and the{" "}
            <LinkButton
              href="https://math.univ-lyon1.fr/~lass/club.html"
              target="blank"
            >
              Lyon Math circle
            </LinkButton>
            .
          </p>
        </div>

        <div>
          <Title>Tools</Title>
          <p>Here is a list of some of the tools I use:</p>
          <br />
          <div className="flex flex-wrap space-x-3 space-y-3">
            <Tool
              logoSrc="/logos/react.svg"
              name="React"
              link="https://react.dev/"
            />
            <Tool
              logoSrc="/logos/cpp.svg"
              name="C++"
              link="https://cplusplus.com/"
            />
            <Tool
              logoSrc="/logos/js.png"
              name="JavaScript"
              link="https://developer.mozilla.org/docs/Web/JavaScript"
            />
            <Tool
              logoSrc="/logos/html.png"
              name="HTML"
              link="https://developer.mozilla.org/docs/Web/HTML"
            />
            <Tool
              logoSrc="/logos/php.png"
              name="PHP"
              link="https://www.php.net/"
            />
            <Tool
              logoSrc="/logos/css.svg"
              name="CSS"
              link="https://developer.mozilla.org/docs/Web/CSS"
            />
            <Tool
              logoSrc="/logos/python.svg"
              name="Python"
              link="https://www.python.org/"
            />
            <Tool
              logoSrc="/logos/c_sharp.svg"
              name="C#"
              link="https://dotnet.microsoft.com/en-us/languages/csharp"
            />
            <Tool
              logoSrc="/logos/latex.svg"
              link="https://www.latex-project.org/"
            />
            <Tool logoSrc="/logos/ocaml.svg" link="https://ocaml.org/" />
            <Tool name="SQL" link="https://www.mysql.com/" />
          </div>
        </div>
        <div className="py-16"></div>
      </main>
    </>
  );
}
