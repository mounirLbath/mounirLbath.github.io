import NavBar from "./Components/NavBar";
import TypeText from "./Components/TypeText";
import Math from "./Components/Math";

export default function Home() {
  return (
    <>
      <NavBar currentPath="/" />
      <main className="px-[10%]">
        <h1 className="font-mono text-3xl p-5">Who am I?</h1>
        <p className="font-black text-3xl">
          My name is Mounir Lbath. I am a student at Ecole Polytechnique in
          Paris.
          <br />
        </p>
        <h1 className="font-mono text-3xl p-5">What do I like?</h1>

        <TypeText
          sequence={[
            "I love Math.",
            1000,
            "I love Computer Science.",
            1000,
            "I love Physics.",
            1000,
          ]}
        />
        <br />
        <Math className="text-2xl flex justify-center">
          {"\\displaystyle{\\frac{\\pi^2}6=\\sum_{i=1}^\\infty \\frac{1}{i^2}}"}
        </Math>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
      </main>
    </>
  );
}
