import React, { Fragment } from "react";
import TechnologySlider from "../../CommonComponents/TechnologySlider";
import Ratting from "../../CommonComponents/Ratting";
import Cookie from "../../CommonComponents/Cookie";
import Newsletter from "../../CommonComponents/Newsletter";
import MetaTag from "../../CommonComponents/MetaTag";
import TechnologyStack from "../../CommonComponents/TechnologyStackComponent/TechnologyStack";
import ServicesTab from "../../CommonComponents/ServicesTab";
import StatisticssH from "../../CommonComponents/StatisticssH";
import CustomerSay from "../../CommonComponents/CustomerSay";
import NewsAtV2stech from "../../CommonComponents/NewsAtV2stech";
import Associated from "../../CommonComponents/Associated";

export function Home({ pageName }) {
  return (
    <Fragment>
      <MetaTag metaId="PYTHON-META" pageName={pageName} />
      <TechnologySlider pageName={pageName} />
      <Ratting pageName={pageName} />
      <ServicesTab pageName={pageName} />
      <StatisticssH pageName={pageName} />
      <TechnologyStack pageName={pageName} />
      <CustomerSay pageName={pageName} />
      <NewsAtV2stech pageName={pageName} />
      <Associated pageName={pageName} />
      <Newsletter pageName={pageName} />
      <Cookie />
      {/* <Cookie /> */}
    </Fragment>
  );
}