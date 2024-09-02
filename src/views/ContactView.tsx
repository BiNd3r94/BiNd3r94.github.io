import React from "react"
import {Card} from "primereact/card";

export const ContactView = () => {
  return (
      <div>
        <h2>Kontaktdaten</h2>
        <Card>
          <h3>Adresse</h3>
          <p>
            Mörikestraße 5<br/>
            71679 Asperg<br/>
            Tel.: 07141-9747240<br/>
          </p>

          <b>Sprechstunde nur nach telefonischer Vereinbarung<br/></b>
        </Card>
        <Card>
          <h3>Wegbeschreibung</h3>
          <h4>Von der Autobahn kommend:</h4>
          {getList(autobahnRoute)}
          <h4>Von Tamm kommend:</h4>
          {getList(tammRoute)}
          <h4>Von Markgröningen kommend:</h4>
          {getList(markroeningenRoute)}
        </Card>

        Qualitätssiegel für Klassische Homöopathie der Stiftung Homöopathie-Zertifikat (SHZ) <br/>
        Mitglied des Verbands Klassischer Homöopathen Deutschlands e.V. (VKHD)

      </div>
  )

}

const autobahnRoute: string[] = [
  "verlassen Sie die Autobahn an der Anschlussstelle Ludwigsburg-Süd.",
  "biegen Sie nach der Ausfahrt links ab in Richtung Möglingen.",
  "die nächste Möglichkeit rechts nach Möglingen einfahren",
  "erste Möglichkeit wieder rechts",
  "dem Straßenverlauf bis zum Ende der Straße folgen",
  "jetzt rechts abbiegen und der Straße nach Asperg folgen",
  "den Kreisverkehr am Ortseingang von Asperg an der zweiten Ausfahrt verlassen",
  "anschließend die 4. Möglichkeit links abbiegen",
  "nächste Möglichkeit rechts in die Mörikestraße einbiegen"
]

const tammRoute: string[] = [
  "in der Ortsmitte von Asperg rechts abbiegen Richtung Markgröningen",
  "den folgenden Kreisverkehr an der 2. Ausfahrt verlassen",
  "nächste Möglichkeit rechts abbiegen",
  "dann wieder rechts in die Mörikestraße einbiegen"
]

const markroeningenRoute: string[] = [
  "nach dem Ortseingang von Asperg der Straße bis zum Kreisverkehr folgen",
  "den Kreisverkehr an der 1. Ausfahrt verlassen",
  "nächste Möglichkeit rechts abbiegen",
  "dann wieder rechts in die Mörikestraße einbiegen"
]

const getList = (list: string[]) => {
  return (<ul>
    {list.map((listItem) => {
      return <li>{listItem}</li>
    })}
  </ul>)
}