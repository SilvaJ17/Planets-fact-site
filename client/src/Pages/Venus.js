import PlanetImage from "../components/PlanetImage";
import PlanetLink from "../components/PlanetLink";
import PlanetDes from "../components/PlanentDes";
import venus from "../assets/planet-venus.svg";
import venusInternal from "../assets/planet-venus-internal.svg";
import venusSurface from "../assets/geology-venus.svg";
import PlanetCards from "../components/PlanetCard";
import { useContext } from "react";
import { PlanetContext } from "../Context/AppContext";

const Venus = () => {
   const {
     togglePlanetDescription,
     toggleStructureDescription,
     toggleSurfaceDescription,
     Overview,
     Structure,
     Surface,
   } = useContext(PlanetContext);

  return (
    <div className="page-container">
      {" "}
      <div className="button-container">
        <button
          className="planet-btn"
          onClick={() => togglePlanetDescription(!togglePlanetDescription)}
        >
          Overview
        </button>
        <button
          className="planet-btn"
          onClick={() =>
            toggleStructureDescription(!toggleStructureDescription)
          }
        >
          Structure
        </button>
        <button
          className="planet-btn"
          onClick={() => toggleSurfaceDescription(!toggleSurfaceDescription)}
        >
          Surface
        </button>
      </div>
      {(Overview === true && <PlanetImage image={venus} />) ||
        (Structure === false && <PlanetImage image={venusInternal} />) ||
        (Surface === true && <PlanetImage image={venusSurface} />)}
      {(Overview === true && (
        <PlanetDes
          title="Venus"
          des="Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight."
        />
      )) ||
        (Structure === false && (
          <PlanetDes
            title="Venus"
            des="The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate. similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate."
          />
        )) ||
        (Surface === true && (
          <PlanetDes
            title="Venus"
            des="Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii."
          />
        ))}
      {(Overview === true && (
        <PlanetLink href="https://en.wikipedia.org/wiki/Mercury_(planet)" />
      )) ||
        (Structure === false && (
          <PlanetLink href="https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure" />
        )) ||
        (Surface === true && (
          <PlanetLink href="https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology" />
        ))}
      <PlanetCards title="Rotation Time" des="243 Days" />
      <PlanetCards title="Revolution Time" des="224.7 Days" />
      <PlanetCards title="Radius" des="6,051.8 Km" />
      <PlanetCards title="Average Temp." des="471 c" />
    </div>
  );
};

export default Venus;
