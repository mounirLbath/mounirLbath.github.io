import Image from "next/image";
import NavBar from "./Components/NavBar";
import { TypeAnimation } from "react-type-animation";
import TypeText from "./Components/TypeText";

export default function Home() {
  return (
    <div>
      <NavBar currentPath="/" />
      <main className="px-50">
        <h1 className="font-mono text-3xl p-5 text-blue-500">About me</h1>
        <p className="font-black text-3xl">
          My name is Mounir Lbath. I am currently studying Math, Computer
          Science & Physics at Ecole Polytechnique in Paris.
          <br />
        </p>
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
      </main>
    </div>
  );
}
