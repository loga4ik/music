import React from "react";
import { Advertising } from "../Components/Blocks/Advertising/Advertising";
import { AboutUs } from "../Components/Blocks/AboutUs/AboutUs";
import { Catalog } from "../Components/Blocks/Catalog/Catalog";
import { OurJob } from "../Components/Blocks/OurJob/OurJob";
import { RequestForm } from "../Components/Blocks/RequestForm/RequestForm";
import { Sponsors } from "../Components/Blocks/Sponsors/Sponsors";
// import { PopUp } from "components/PopUp/PopUp";
import { PopUp } from "../Components/Blocks/PopUp/PopUp";
export const Home = () => {
  return (
    <div>
      <PopUp />
      <Advertising />
      <AboutUs />
      <Catalog />
      <OurJob />
      <RequestForm />
      <Sponsors />
    </div>
  );
};
// module "c:/myProjects/ReactProjects/music/src/UI/Components/Blocks/PopUp/PopUp"
// module "c:/myProjects/ReactProjects/music/src/UI/Components/Blocks/PopUp/PopUp"
