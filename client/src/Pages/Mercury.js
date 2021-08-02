
// import Button from "../components/Button";
import PlanetImage from "../components/PlanetImage";
import PlanetDes from "../components/Card";
import mercury from "../assets/planet-mercury.svg";
import mercuryInternal from "../assets/planet-mercury-internal.svg";
import mercurySurface from "../assets/geology-mercury.svg";
import PlanetFactCards from "../Layout/PlanetFactCards";
import { useState } from "react";
// import { PlanetContext } from "../Context/AppContext";

const Mercury = ( props ) => {
  // const {
  //   togglePlanetDescription,
  //   toggleStructureDescription,
  //   toggleSurfaceDescription,
  //   Overview,
  //   Structure,
  //   Surface,
  // } = useContext(PlanetContext);
      const [Overview, setOverview] = useState(true);
      const [Structure, setStructure] = useState(true);
      const [Surface, setSurface] = useState(true);

      const togglePlanetDescription = () => {
        Overview ? setOverview(true) : setOverview(true);
        Structure ? setStructure(true) : setStructure(true);
        Surface ? setSurface(false) : setSurface(false);
      };

      const toggleStructureDescription = () => {
        Overview ? setOverview(false) : setOverview(false);
        Structure ? setStructure(false) : setStructure(false);
        Surface ? setSurface(false) : setSurface(false);
      };

      const toggleSurfaceDescription = () => {
        Overview ? setOverview(false) : setOverview(false);
        Structure ? setStructure(true) : setStructure(true);
        Surface ? setSurface(true) : setSurface(true);
      };

  return (
    <div className="page-container">
      <div
        // onClick={() => setPlanetDescription(!planetDescription)}
        name="Overview"
      >
        <button
          onClick={() => togglePlanetDescription(!togglePlanetDescription)}
        >
          Overview
        </button>
        <button
          onClick={() =>
            toggleStructureDescription(!toggleStructureDescription)
          }
        >Structure</button>
        <button
          onClick={() => toggleSurfaceDescription(!toggleSurfaceDescription)}
        >
          Surface
        </button>
      </div>

      {/* {(Overview === true && <PlanetImage image={mercury} />) ||
        (Structure === false && <PlanetImage image={mercuryInternal} />) ||
        (Surface === true && <PlanetImage image={mercurySurface} />)} */}

      {(Overview === true && <PlanetImage image={mercury} />) ||
        (Structure === false && <PlanetImage image={mercuryInternal} />) ||
        (Surface === true && <PlanetImage image={mercurySurface} />)}

      {(Overview === true && (
        <PlanetDes
          title="Mercury"
          des="Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth"
        />
      )) ||
        (Structure === false && (
          <PlanetDes
            title="Mercury"
            des="Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."
          />
        )) ||
        (Surface === true && (
          <PlanetDes
            title="Mercury"
            des="Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s."
          />
        ))}

      <PlanetFactCards />
    </div>
  );
};

export default Mercury;
