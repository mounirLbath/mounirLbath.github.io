import React from "react";
import ProjectTile from "../Components/ProjectTile";
import LinkButton from "../Components/LinkButton";
import Title from "../Components/Title";

const page = () => {
  return (
    <div>
      <div className="lg:columns-2 gap-5">
        <ProjectTile
          title="Steady Box"
          tags={["Unity", "C#"]}
          websiteLink="http://steady-box-game.42web.io/"
          youtubeLink="https://www.youtube.com/shorts/--9WWweBhEM"
          imageSrc="/projects/steady_box.png"
          description={
            <>
              A mobile game published on the{" "}
              <LinkButton
                href="https://play.google.com/store/apps/details?id=com.AandMstudios.SteadyBox"
                target="blank"
              >
                Play Store
              </LinkButton>{" "}
              with 100+ downloads. I created this back in 10th grade alongside{" "}
              <LinkButton
                href="https://www.linkedin.com/in/amine-lbath"
                target="blank"
              >
                my brother Amine.
              </LinkButton>
            </>
          }
        />

        <ProjectTile
          title="Sky Delivery"
          tags={["Unity", "C#"]}
          link="https://play.google.com/store/apps/details?id=com.AandMstudios.SkyDelivery"
          websiteLink="http://skydelivery-game.epizy.com/"
          youtubeLink="https://www.youtube.com/watch?v=A3SGwCVOcGs"
          imageSrc="/projects/sky_delivery.png"
          description={
            <>
              A mobile game published on the{" "}
              <LinkButton
                href="https://play.google.com/store/apps/details?id=com.AandMstudios.SkyDelivery"
                target="blank"
              >
                Play Store
              </LinkButton>{" "}
              with 3k+ downloads. Co-created in 9th grade with{" "}
              <LinkButton
                href="https://www.linkedin.com/in/amine-lbath"
                target="blank"
              >
                my brother Amine
              </LinkButton>
              .
            </>
          }
        />
        <ProjectTile
          title="Instant Listing"
          tags={["Dart", "Flutter", "Gemini AI"]}
          youtubeLink="https://www.youtube.com/watch?v=HS4V52jAG9s"
          description={
            <>
              An AI-powered mobile app for generating online listings, coming
              soon to the Apple Store and Google Play Store. Co-built with{" "}
              <LinkButton
                href="https://www.linkedin.com/in/amine-lbath"
                target="blank"
              >
                my brother Amine
              </LinkButton>{" "}
              originally for the{" "}
              <LinkButton
                target="blank"
                href="https://ai.google.dev/competition/projects/listing-ai"
              >
                Gemini API competition.
              </LinkButton>
            </>
          }
        />
        <ProjectTile
          title="Minesweeper"
          tags={["Python", "Pygame", "OOP"]}
          imageSrc="/projects/minesweeper.png"
          ghLink="https://github.com/mounirLbath/Minesweeper-game"
          description={<>A minesweeper game. </>}
        />
        <ProjectTile
          title="Conway's Game of Life"
          tags={["Python", "Pygame"]}
          imageSrc="/projects/conway.png"
          ghLink="https://github.com/mounirLbath/Conway_game_of_life"
          description={
            <>
              <LinkButton
                href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
                target="blank"
              >
                Conway&apos;s game of life
              </LinkButton>{" "}
              simulation with a functional GUI.{" "}
            </>
          }
        />

        <ProjectTile
          title="Raytracer"
          tags={["Python", "OOP"]}
          imageSrc="/projects/BallAnimation.gif"
          ghLink="https://github.com/mounirLbath/Raytracer"
          description={
            <>
              A{" "}
              <LinkButton
                target="blank"
                href="https://en.wikipedia.org/wiki/Ray_tracing_(graphics)"
              >
                raytracer
              </LinkButton>{" "}
              built from scratch with the help of{" "}
              <LinkButton
                target="blank"
                href="https://perso.liris.cnrs.fr/nicolas.bonneel/ENS.html"
              >
                this course (number II).
              </LinkButton>
            </>
          }
        />

        <ProjectTile
          title="Multiplayer Agar.io"
          tags={["Python", "Sockets", "OOP"]}
          ghLink="https://github.com/mounirLbath/Multiplayer_CellEating"
          description={
            <>
              A multiplayer{" "}
              <LinkButton
                target="blank"
                href="https://en.wikipedia.org/wiki/Agar.io"
              >
                Agar.io
              </LinkButton>{" "}
              implementation in Python. I got the idea for this project from
              this{" "}
              <LinkButton
                target="blank"
                href="https://www.youtube.com/watch?v=SR8xeaRXLcg"
              >
                youtube video
              </LinkButton>
              .
            </>
          }
        />

        <ProjectTile
          title="Physics Engine"
          tags={["Python", "Pygame", "OOP"]}
          ghLink="https://github.com/mounirLbath/Physics_Engine"
          imageSrc="/projects/physics_engine.png"
          description={
            <>
              A Physics engine built from scratch using{" "}
              <LinkButton
                href="https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion"
                target="blank"
              >
                Newton&apos;s laws
              </LinkButton>{" "}
              and{" "}
              <LinkButton
                target="blank"
                href="https://en.wikipedia.org/wiki/Euler_method"
              >
                Euler&apos;s method for differential equations.
              </LinkButton>{" "}
              It can be used for many simulations, such as a small basketball
              game you will find on the GitHub repository.
            </>
          }
        />

        <ProjectTile
          title="Minimax Ultimate Tic-Tac-Toe"
          tags={["Python", "Minimax"]}
          ghLink="https://github.com/mounirLbath/Minimax-Ultimate-Tic-Tac-Toe"
          description={
            <>
              A{" "}
              <LinkButton
                href="https://en.wikipedia.org/wiki/Minimax"
                target="blank"
              >
                minimax
              </LinkButton>{" "}
              AI agent that plays at the{" "}
              <LinkButton
                href="https://en.wikipedia.org/wiki/Ultimate_tic-tac-toe"
                target="blank"
              >
                Ultimate Tic-Tac-Toe
              </LinkButton>{" "}
              (awesome game by the way).
            </>
          }
        />

        <ProjectTile
          title="Snake"
          tags={["C++"]}
          ghLink="https://github.com/mounirLbath/snake"
          description={
            <>
              A{" "}
              <LinkButton
                href="https://en.wikipedia.org/wiki/Snake_(video_game_genre)"
                target="blank"
              >
                Snake
              </LinkButton>{" "}
              console implementation in C++.
            </>
          }
        />
        <ProjectTile
          title="Fractals"
          tags={["Python", "Blender"]}
          ghLink="https://github.com/mounirLbath/Mandelbrot-set-and-Fractals"
          imageSrc="/projects/fractals.png"
          description={
            <>
              A python script to draw the{" "}
              <LinkButton
                href="https://en.wikipedia.org/wiki/Mandelbrot_set"
                target="blank"
              >
                Mandelbrot set
              </LinkButton>{" "}
              and a Blender python screen to generate a 3D{" "}
              <LinkButton
                href="https://en.wikipedia.org/wiki/Menger_sponge"
                target="blank"
              >
                Menger sponge.
              </LinkButton>
            </>
          }
        />
        <ProjectTile
          title="ML experiments"
          tags={["Python", "Jupyter"]}
          ghLink="https://github.com/mounirLbath/ML_experiments"
          description={
            <>
              Various machine learning experiments after reading Standford CS229
              course. Includes a neural network for digit recognition (with a
              Pygame GUI to draw digits on the screen) built from scratch
              following{" "}
              <LinkButton
                href="http://neuralnetworksanddeeplearning.com/"
                target="blank"
              >
                this book.
              </LinkButton>
            </>
          }
        />
        <ProjectTile
          title="Gift Generator"
          tags={["NextJS", "Tailwind"]}
          link="https://mounirlbath.github.io/gift-generator"
          ghLink="https://github.com/mounirLbath/gift-generator"
          imageSrc="/projects/gift_generator.png"
          description={
            <>
              A very cool website to make your friends smile. You can generate
              gifts on{" "}
              <LinkButton
                href="https://mounirlbath.github.io/gift-generator/generate"
                target="blank"
              >
                this page
              </LinkButton>{" "}
              or directly send the basic &quot;Happy Birthday&quot; gift on{" "}
              <LinkButton
                href="https://mounirlbath.github.io/gift-generator"
                target="blank"
              >
                this page
              </LinkButton>
              .
            </>
          }
        />
        <ProjectTile
          title="This Website"
          tags={["NextJS", "Tailwind"]}
          link="https://mounirlbath.github.io/"
          ghLink="https://github.com/mounirLbath/mounirLbath.github.io"
          description={
            <>
              This website was built with NextJS and Tailwind CSS. I had fun
              thinking at the designs from scratch.
            </>
          }
        />
        <ProjectTile
          title="Sports Game"
          tags={["JS", "p5.js"]}
          link="https://www.khanacademy.org/computer-programming/sports/6347487175573504"
          imageSrc="/projects/sports.png"
          description={
            <>
              One of my very first computer programs. My brother and I created
              the first version, which only featured the soccer game, in just
              two weeks on Khan Academy. I was 8 years old, and he was 12 at the
              time. The code itself has a cute and naive style, with variable
              names like TheScene, scene, sceneb, SCENE, ScEnE, sCeNe, and
              ScenE. Despite the playful approach to coding, the game still
              remains awesome even 12 years later.
            </>
          }
        />
      </div>
    </div>
  );
};

export default page;
