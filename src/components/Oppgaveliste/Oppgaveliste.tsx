import React from "react";
import {VilkårsvurderingType} from "../../types/SakType";

const Oppgaveliste = ({vilkårsliste}:{vilkårsliste:VilkårsvurderingType[]}):JSX.Element => {
  return <>{vilkårsliste.length}</>;
};

export {Oppgaveliste};
