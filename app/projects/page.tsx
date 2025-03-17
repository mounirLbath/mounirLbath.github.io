import React from "react";
import ProjectTile from "../Components/ProjectTile";
import LinkButton from "../Components/LinkButton";

const page = () => {
  return (
    <div>
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
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
      </div>
    </div>
  );
};

export default page;
