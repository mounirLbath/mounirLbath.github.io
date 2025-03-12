import NavBar from "./Components/NavBar";
import TypeText from "./Components/TypeText";
import Math from "./Components/Math";

export default function Home() {
  return (
    <>
      <main className="mx-[10%] sm:mx-[20%]">
        <div className="absolute top-15 left-0 rounded-full w-50 h-50 bg-gradient-to-r from-blue-50 to-blue-400 blur-3xl -z-10"></div>
        <div className="absolute top-60 left-70 sm:left-90 lg:left-150 rounded-full w-100 h-80 bg-gradient-to-r from-blue-50/50 to-blue-400/50 blur-xl -z-10"></div>

        <div className="mt-[35vh] mb-20">
          <p className="text-5xl">Hi, my name is</p>
          <p className="font-mono text-7xl">Mounir Lbath</p>
        </div>

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

        <br />
      </main>
    </>
  );
}
