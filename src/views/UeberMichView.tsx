import React, {CSSProperties} from "react"
import {Card} from "primereact/card";
import {Image} from "primereact/image";

export const UeberMichView = () => {
  return (
      <div>
        <h2>Über mich</h2>
        <div className="grid">
          <div className="col-8">
            <Card className="my-3">
              <p>
                Nach meiner abgeschlossenen Ausbildung zur Krankenschwester und anschließender
                mehrjähriger Berufsausübung habe ich eine 3-jährige Weiterbildung zur
                Heilpraktikerin
                im
                Vollzeitunterricht absolviert. Hier lernte ich ein breites Spektrum an alternativen
                Behandlungsmethoden kennen, die ich heute noch teilweise ergänzend zur Klassischen
                Homöopathie einfließen lasse.
              </p>
              <p>
                Später erlernte ich bei Frau Hanne Marquardt die Fußreflexzonentherapie, bei der
                AHAB die Progressive Muskelentspannung nach Jacobsen und bei Frau Sabine Wacker
                Basenfasten
              </p>
              <p>
                Seit Januar 2004 arbeite ich selbstständig in eigener Praxis mit Schwerpunkt
                Klassische
                Homöopathie, die ich in einer 2-jährigen Zusatzausbildung erlernt habe. Anschließend
                habe ich im Rahmen von zahlreichen Fachfortbildungen sowie Seminaren meine
                Kenntnisse
                in
                der Klassischen Homöopathie weiter vertieft. Seit dem Jahr 2007 bin ich zusätzlich
                nach
                den Richtlinien der Stiftung Homöopathie Zertifikat (SHZ) zertifiziert, welches
                ebenfalls eine qualifizierte homöopathische Behandlung garantiert.
              </p>
              <p>
                Ich bin Mitglied des Verbands Klassischer Homöopathen Deutschlands e.V.(VKHD)
              </p>
            </Card>
          </div>
          <div className="col-4">
            <div className="my-3">

            </div>
            <Image
                src="/simone-binder.jpeg"
                imageStyle={{width: "-webkit-fill-available"} as CSSProperties}
            />
          </div>

        </div>


      </div>
  )
}