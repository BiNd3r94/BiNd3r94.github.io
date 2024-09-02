import React from "react"
import {StiftungHomoeopathie} from "../../components/StiftungHomoeopathie";
import {VerbandKlassischerHomoeopathen} from "../../components/VerbandKlassischerHomoeopathen";

export const LinksView = () => {
  return (
      <div className="mx-auto my-3 md:mx-8">
        <StiftungHomoeopathie/>
        <VerbandKlassischerHomoeopathen/>
      </div>
  )
}