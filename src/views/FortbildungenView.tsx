import React from "react"
import {Card} from "primereact/card";
import {Accordion, AccordionTab} from "primereact/accordion";

export const FortbildungenView = () => {
  return (
      <div>
        <h2>Auszug der Fachfortbildungen und Seminare:</h2>
        <Card className="my-3">
          <ul>
            {trainings.map((training, index) => {
              return <li key={"training-" + index}>{training}</li>
            })}
          </ul>
        </Card>
        <h2>Häufige Krankheitsbilder und Anwendungsbereiche in der Praxis:</h2>
        {getTherapyCategories()}
      </div>
  )
}

const trainings: Training[] = [
  "2-jährige Fachausbildung Klassische Homöopathie (Akademie für Naturheilverfahren)",
  "Supervisionen",
  "Darmerkrankungen",
  "Hauterkrankungen (Clemens von Bönninghausen – Akademie)",
  "Allergien (Clemens von Bönninghausen – Akademie)",
  "Kinderhomöopathie (Tjado Galic, H. Pfeiffer, F. Master, R. Petrucci)",
  "Impfkrankheiten und Impfsymposien",
  "Nosoden (Ravi Roy)",
  "Miasmatik-Ausbildung (Yves Laborde)",
  "Miasmatik Meisterkurs (Clemens von Bönninghausen – Akademie)",
  "Multiple Sklerose (Yves Laborde)",
  "Autoimmunerkrankungen (Paul Herscue)",
  "Fußreflexzonentherapie (Hanne Marquardt)",
  "Progressive Muskelentspannung (AHAB)",
  "Basenfasten (Sabine Wacker)"
]

const homoeopathicTherapies: Therapy[] = [
  "Allergien, auch Heuschnupfen",
  "Chronische Kopfschmerzen",
  "Darmerkrankungen",
  "Dellwarzen",
  "Haarausfall bei Frauen",
  "Hauterkrankungen, auch Neurodermitis",
  "Impfkrankheiten",
  "Infektanfälligkeit",
  "Migräne",
  "Prüfungsangst",
  "Long Covid",
  "Schwindel"
]

const reflexZoneTherapies = [
  "Statisch muskuläre Belastungen",
  "Verdauungsbeschwerden",
  "Regelstörungen",
  "Lymphatische Belastungen",
  "Chronische Kopfschmerzen/Migräne"
]

const fastingTherapies = [
  "Einstieg in eine Ernährungsumstellung",
  "Gesundheitsvorsorge",
  "Umstellung bei vielen chronischen Erkrankungen",
  "Gewichtsabnahme"
]

const therapyCategories: TherapyCategory[] = [
  {
    name: "Homöopathie",
    therapies: homoeopathicTherapies
  },
  {
    name: "Fußreflexzonentherapie",
    therapies: reflexZoneTherapies
  },
  {
    name: "Basenfasten",
    therapies: fastingTherapies
  }
]

const getTherapyCategories = () => {
  return (
      <Accordion multiple activeIndex={[0, 1, 2]}>
        {therapyCategories.map((category, index) => {
          return <AccordionTab header={category.name} key={"tab-" + index}>
            <ul>
              {category.therapies.map((therapy, index) => {
                return <li key={"therapy-" + index}>{therapy}</li>
              })}
            </ul>
          </AccordionTab>
        })}
      </Accordion>
  )
}

type Training = string
type TherapyCategory = {
  name: string,
  therapies: Therapy[]
}
type Therapy = string

