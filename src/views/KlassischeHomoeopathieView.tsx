import React from "react"
import {Accordion, AccordionTab} from "primereact/accordion";

export const KlassischeHomoeopathieView = () => {
  return (
      <div className="">
        <h2>Klassische Homöopathie</h2>
        <Accordion multiple activeIndex={[0, 1, 2]}>
          <AccordionTab header="Was ist klassische Homöopathie?">
            <p>
              Die Homöopathie gehört in Deutschland zu den populärsten der alternativen
              Therapieverfahren. Man muss weder an Homöopathie glauben, noch sich besonders
              ernähren,
              um erfolgreich behandelt zu werden.
            </p>
            <p>
              Homöopathie wird weltweit mit Erfolg angewendet und sehr geschätzt. Sie ist eine
              spezifische Reiztherapie, welche die Selbstheilungskräfte des Organismus mobilisiert.
              Die Homöopathie wirkt auf den ganzen Menschen, nicht nur auf einzelne
              Krankheitserscheinungen regulierend ein und wird individuell auf den Einzelnen
              abgestimmt verordnet.<br/>
              Sie ist ein in sich geschlossenes Heilsystem.
            </p>
          </AccordionTab>
          <AccordionTab header="Homöopathie wie wirkt sie">
            <p>
              Nur jenes Arzneimittel vermag eine Krankheit zu heilen, das selbst beim Gesunden die
              der
              Krankheit ähnlichsten Symptome hervorzubringen imstande ist. Beispiel: Allium cepa (
              die
              Zwiebel).
            </p>
            <p>
              Wenn ein gesunder Mensch Allium cepa in homöopathischer Dosierung mehrfach einnimmt,
              so
              entwickelt er Symptome, wie sie uns allen bekannt sind, da jeder von uns weiß, was
              beim
              Zwiebel schneiden mit uns passiert. Gibt man aber einem Patienten, der unter reichlich
              mildem Tränenfluss und reichlich wässrigen und äußerst scharfen Absonderungen der Nase
              leidet, Allium cepa homöopathisch aufbereitet, so vermag dieser Kranke mit diesem
              Mittel
              gesund zu werden.
            </p>
            <p>
              So wie die Zwiebel, wurden und werden an die 2000 Mittel aus dem Tier-, Pflanzen-, und
              Mineralienreich an freiwilligen Gesunden geprüft. Die körperlichen, seelischen und
              geistigen Krankheitszeichen die diese Menschen entwickeln, werden genau aufgezeichnet
              und bei Kranken die diese Symptome aufweisen, wie sie beim Gesunden als
              Arzneikrankheit
              vorübergehend auftraten, eingesetzt.
            </p>
            <p>
              Das den Krankheitszeichen des Patienten entsprechendste Mittel wird als Einzelmittel
              gegeben. Indem der Kranke nun seine Arzneikrankheit besiegt, heilt er seine natürliche
              Krankheit aus. Diese Wirkungen können jedoch nur erzielt werden, wenn die Arzneimittel
              homöopathisch aufbereitet sind.
            </p>
            <p>
              Man nennt dies Potenzierung. Die Kombination aus Verdünnung und Verschüttelung oder
              Verreibung fördert dynamische Kräfte zutage. Bei der Potenzierung oder Dynamisation
              wird
              das Materielle verringert und die Kraft gesteigert. Samuel Hahnemann (1755-1843), der
              Begründer der Klassischen Homöopathie, fand heraus, dass durch das Potenzieren eine
              deutliche Wirkungsverstärkung erreicht werden kann.
            </p>
          </AccordionTab>
          <AccordionTab header="Die homöopatische Behandlung">
            <p>
              Die homöopathische Behandlung beginnt mit der Erfassung der Krankengeschichte
              (Erstanamnese), die – vor allem bei chronischen Fällen- unter Umständen mehrere
              Stunden
              dauern kann.
            </p>
            <p>
              Dabei werden alle Ebenen des menschlichen Seins berücksichtigt: Körper – Seele –
              Geist.
              Alles was der Patient an sich beobachtet ist von Bedeutung. Oftmals gibt es eine
              Ursache, spezielle Empfindungen oder Begleitumstände.
            </p>
            <p>
              Auch Erkrankungen, die in der Familie liegen und bereits durchgemachte Erkrankungen,
              werden erfragt. Die Homöopathie eignet sich für alle Altersklassen, auch für
              Schwangere,
              Babys und Kinder.
            </p>
            <p>
              Anwendung findet sie bei chronischen und wiederkehrenden, aber auch bei akuten
              Erkrankungen
            </p>
          </AccordionTab>
        </Accordion>
      </div>
  )
}