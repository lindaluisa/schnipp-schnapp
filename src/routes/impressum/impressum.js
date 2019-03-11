"use strict";

import './impressum.scss';
import '../home/home.scss';

import imageBackground from '../../assets/impressum3.jpg';

let Impressum = {
  render : async () => {
    let view = `
      <section class="impressum">
          <div class="impressum-header">
            <div class="impressum-header_title">
              <h1>
                <span class="impressum-plus">+</span>
                Impressum
              </h1>
            </div>
            <img src="${imageBackground}" alt="">
          </div>
          <div class="impressum-content">
            <h2>Angaben gemäß § 5 TMG:</h2>
            <p>Petra &amp; Anna Heckmann<br />Hello Gorgeous<br />Mauritiussteinweg 67<br />50676 Köln</p>
            <p>Telefon:&nbsp;+49 (0) 221 169 29 571</p>
            <p>E-Mail: hellogorgeous-cgn@web.de</p>
            <p>Umsatzsteuer-Identifikationsnummer gem. § 27a UStG: DE20351170356</p>
            <p>Inhaltlich Verantwortlicher gem. § 55 II RStV:<br />Petra Heckmann (Anschrift s.o.)</p>
            <h2>1. Haftungsbeschränkung</h2>
            <p>Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte der Website erfolgt auf eigeneGefahr des Nutzers. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Mit der reinen Nutzung der Website des Anbieters kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande.</p>
            <h2>2. Externe Links</h2>
            <p>Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.</p>
            <h2>3. Urheber- und Leistungsschutzrechte</h2>
            <p>Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung</p>
            <p>bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers.&nbsp;Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.</p>
            <p>Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.</p>
            <h2>4. Datenschutz[1]</h2>
            <p>Durch den Besuch der Website des Anbieters können Informationen über den Zugriff (Datum, Uhrzeit, betrachtete Seite) gespeichert werden. Diese Daten gehören nicht zu den personenbezogenen Daten, sondern sind anonymisiert. Sie werden ausschließlich zu statistischen Zwecken ausgewertet. Eine Weitergabe an Dritte, zu kommerziellen oder nichtkommerziellen Zwecken, findet nicht statt.</p>
            <p>Der Anbieter weist ausdrücklich darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen und nicht lückenlos vor dem Zugriff durch Dritte geschützt werden kann.</p>
            <p>Die Verwendung der Kontaktdaten des Impressums zur gewerblichen Werbung ist ausdrücklich nicht erwünscht, es sei denn der Anbieter hatte zuvor seine schriftliche Einwilligung erteilt oder es besteht bereits eine Geschäftsbeziehung. Der Anbieter und alle auf dieser Website genannten Personen widersprechen hiermit jeder kommerziellen Verwendung und Weitergabe ihrer Daten.</p>
            <h2>5. Besondere Nutzungsbedingungen[2]</h2>
            <p>Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Nummern 1. bis 4. abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.</p>
            <p>Quelle: Muster-Disclaimer vom <a href="http://www.juraforum.de/">Juraforum.de</a>&nbsp;in Kooperation mit <a href="http://www.uebersetzer.eu/">Übersetzer</a>.eu und der Anwaltssuche von <a href="http://www.experten-branchenbuch.de/">Experten-Branchenbuch.de</a></p>
          </div>
      </section>
    `
    return view
  },
  after_render: async () => {}
}

export default Impressum;