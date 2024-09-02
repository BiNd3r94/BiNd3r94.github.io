import React from "react"
import {Card} from "primereact/card";

export const HomeView = () => {
  return (
      <div>
        <h2>Meine Praxis:</h2>
        <Card className="my-3">
          <p>
            Auf der Suche nach einer Heilmethode, die den Menschen als Ganzheit betrachtet und
            berücksichtigt,
            dass jede Person ganz einzigartig reagiert und sich eine Krankheit auch bei Jedem
            individuell äußert,
            bin ich auf die Klassische Homöopathie gestoßen.
          </p>
          <p>
            Als ich 1991 diese Behandlungsmethode kennen lernte, war ich spontan begeistert.
            Auch heute bin ich immer noch tief beeindruckt, wieviel man mit der Klassischen
            Homöopathie bewirken kann.
            Ich freue mich über jeden Patienten, den ich mit dieser Methode auf seinem Weg zur
            Gesundung begleiten darf.
          </p>
          <p>
            Im Laufe der letzten Jahre habe ich meine Praxis um die Reflexzonentherapie am Fuß nach
            Hanne Marquardt, die Progressive Muskelentspannung nach Jacobsen, sowie Basenfasten nach
            Sabine Wacker erweitert.
          </p>
          <p>
            Falls Sie Fragen haben oder einen Termin vereinbaren möchten, rufen Sie einfach unter
            07141/9747240 an.
          </p>
        </Card>
        <h2>Qualifikationen:</h2>
        <Card className="my-3">

          <p>Qualitätssiegel für klassiche Homöopathie der Stiftung Homöopathie-Zertifikat(SHZ)</p>
          <p>Mitglied des Verbands klassischer Homöpathen Deutschlands e.V.(VKHD)</p>

        </Card>

      </div>
  )
}