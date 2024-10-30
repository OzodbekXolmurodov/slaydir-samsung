import React from "react";
import Header from "../header/Header";
import Pags from "../pags/Pags";
import photo from "../../assets/Без названия1.jpg";
import photo2 from "../../assets/lg-tv-oled.jpg";
import photo3 from "../../assets/REF-Vplus-SxS-Q-Best-BS-InstaView-Basic-Hygiene-06-1-1-UltraSleek-Door-D.jpg";
import Carusel from "../carusel/Carusel";

const Main = () => {
  return (
    <>
      <Header />
      <Carusel />
      <Pags
        tatle="Mobile & Computing"
        items={[
          "Galaxy S24 Ultra",
          " Galaxy Z Fold6",
          " Galaxy Z Flip6",
          " Galaxy Tab S10 Series",
          " Galaxy Watch Ultra",
        ]}
        clasNamE="pags__heder"
        image={photo}
        tatle2="Galaxy S24 Ultra"
        post="s 24 ultra ha bu usha salom dunyo helo vord sadasd adadwda adddddadw"
        btn="Buy now"
      />
      <Pags
        tatle="TV & Audio"
        items={["OLED S95D", "  Music Frame", " Samsung Neo QLED 4K QN85D"]}
        clasNamE="pags__heder3"
        image={photo2}
        tatle2="Brigth white ush tug'zi"
        post="s 24 ultra ha bu usha salom dunyo helo vord"
        btn="Buy now"
      />
      <Pags
        tatle="Home Appliances"
        items={[
          "Early Black Friday",
          "Refrigerators",
          "Bespoke Laundry",
          "Cooking Power Pair",
        ]}
        clasNamE="pags__heder2"
        image={photo3}
        tatle2="Get the best deals of the season"
        post="Make the holidays brighter with early Black Friday deals on Bespoke appliances and save $1,700."
        btn="Buy now"
      />
    </>
  );
};

export default Main;
