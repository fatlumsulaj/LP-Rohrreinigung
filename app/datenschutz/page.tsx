import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | LP-Konstruktion Hausmeisterservice'
}

export default function DatenschutzPage() {
  return (
    <main className='px-4 md:px-8 lg:px-10 py-14 md:py-20 lg:py-24'>
      <div className="max-w-screen-xl mx-auto">
        <h1 className='font-semibold text-2xl md:text-3xl lg:text-4xl'>Datenschutzerklärung</h1>
        <div className='max-w-screen-xl mx-auto mt-6'>
          <h2 className='font-semibold text-xl md:text-2xl lg:text-3xl mt-4 mb-2'>1. Datenschutz auf einen Blick</h2>
          <h3 className='text-xl font-medium md:text-2xl mt-4 mb-1'>Allgemeine Hinweise</h3>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
            Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
            identifiziert werden können. Ausführliche Informationen zum Thema
            Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
            Datenschutzerklärung.
          </p>
          <h3 className='text-xl font-medium md:text-2xl mt-4 mb-1'>Datenerfassung auf dieser Website</h3>
          <h4 className='font-medium text-lg md:text-xl mt-2 mb-1'>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
            Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen
            Stelle“ in dieser Datenschutzerklärung entnehmen.
          </p>
          <h4 className='font-medium text-lg md:text-xl mt-2 mb-1'>Wie erfassen wir Ihre Daten?</h4>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
            Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein
            Kontaktformular eingeben.
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der
            Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten
            (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website
            betreten.
          </p>
          <h4 className='font-medium text-lg md:text-xl mt-2 mb-1'>Wofür nutzen wir Ihre Daten?</h4>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
            Website zu gewährleisten. Andere Daten können zur Analyse Ihres
            Nutzerverhaltens verwendet werden. Sofern über die Website Verträge
            geschlossen oder angebahnt werden können, werden die übermittelten Daten
            auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen
            verarbeitet.
          </p>
          <h4 className='font-medium text-lg md:text-xl mt-2 mb-1'>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
            Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.
            Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu
            verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
            können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem
            haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
            Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht
            Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
            jederzeit an uns wenden.
          </p>
          <h3 className='text-xl font-medium md:text-2xl mt-4 mb-1'>Analyse-Tools und Tools von Dritt­anbietern</h3>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet
            werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der
            folgenden Datenschutzerklärung.
          </p>

          <h2 className='font-semibold text-xl md:text-2xl lg:text-3xl mt-4 mb-2 lg:mt-8'>2. Hosting</h2>
          <p className='typography-body text-black/80 my-2 lg:my-3'>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
          <h3 className='text-xl font-medium md:text-2xl mt-4 mb-1'>Amazon Web Services (AWS)</h3>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Anbieter ist die Amazon Web Services EMEA SARL, 38 Avenue John F. Kennedy,
            1855 Luxemburg (nachfolgend AWS).
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Wenn Sie unsere Website besuchen, werden Ihre personenbezogenen Daten auf
            den Servern von AWS verarbeitet. Hierbei können auch personenbezogene Daten
            an das Mutterunternehmen von AWS in die USA übermittelt werden. Die
            Datenübertragung in die USA wird auf die EU-Standardvertragsklauseln
            gestützt. Details finden Sie hier:
            <br />
            <a
              className='text-black underline typography-body'
              href="https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/
            </a>
            .
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Weitere Informationen entnehmen Sie der Datenschutzerklärung von AWS:
            <br />
            <a
              className='text-black underline typography-body'
              href="https://aws.amazon.com/de/privacy/?nc1=f_pr"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://aws.amazon.com/de/privacy/?nc1=f_pr
            </a>
            .
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Die Verwendung von AWS erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen
            Darstellung unserer Website. Sofern eine entsprechende Einwilligung
            abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von
            Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung
            die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät
            des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TDDDG umfasst.
            Die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data
            Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der
            Europäischen Union und den USA, der die Einhaltung europäischer
            Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll.
            Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
            Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie
            vom Anbieter unter folgendem Link:
            <br />
            <a
              className='text-black underline typography-body'
              href="https://www.dataprivacyframework.gov/participant/5776"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.dataprivacyframework.gov/participant/5776
            </a>
            .
          </p>
          <h2 className='font-semibold text-xl md:text-2xl lg:text-3xl mt-4 mb-2 lg:mt-8'>3. Allgemeine Hinweise und Pflicht­informationen</h2>
          <h3 className='text-xl font-medium md:text-2xl mt-4 mb-1'>Datenschutz</h3>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr
            ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
            entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerklärung.
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten
            erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich
            identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert,
            welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
            und zu welchem Zweck das geschieht.
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei
            der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
            lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </p>
          <h3 className='text-xl font-medium md:text-2xl mt-4 mb-1'>Hinweis zur verantwortlichen Stelle</h3>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            LP-Konstruktion Hausmeisterservice
            <br />
            Bibereckerweg 4
            <br />
            94036 Passau
            <br />
            Deutschland
          </p>
          <p className='typography-body text-neutral-800 mt-2'>
            Telefon: +49 174 9634925
            <br />
            E-Mail: lp.konstruktion1@gmail.com
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Verantwortliche Stelle ist die natürliche oder juristische Person, die
            allein oder gemeinsam mit anderen über die Zwecke und Mittel der
            Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen
            o. Ä.) entscheidet.
          </p>
          <h3 className='text-xl font-medium md:text-2xl mt-4 mb-1'>Speicherdauer</h3>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer
            genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der
            Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes
            Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung
            widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich
            zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben
            (z.&nbsp;B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
            letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
          </p>
          <h3 className='text-xl font-medium md:text-2xl mt-4 mb-1'>
            Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser
            Website
          </h3>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
            personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw.
            Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9
            Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung
            in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die
            Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO.
            Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf
            Informationen in Ihr Endgerät (z.&nbsp;B. via Device-Fingerprinting)
            eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage
            von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre
            Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
            erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1
            lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur
            Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage
            von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf
            Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO
            erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird
            in den folgenden Absätzen dieser Datenschutzerklärung informiert.
          </p>
          <h3 className='text-xl font-medium md:text-2xl mt-4 mb-1'>Empfänger von personenbezogenen Daten</h3>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen
            Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von
            personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben
            personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im
            Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu
            verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an Steuerbehörden), wenn
            wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der
            Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe
            erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene
            Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über
            Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird
            ein Vertrag über gemeinsame Verarbeitung geschlossen.
          </p>
          <h3 className='text-xl font-medium md:text-2xl mt-4 mb-1'>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
            Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
            jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
            Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>
          <h3 className='text-xl font-medium md:text-2xl mt-4 mb-1'>
            Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen
            Direktwerbung (Art. 21 DSGVO)
          </h3>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F
            DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS
            IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER
            PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF
            DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF
            DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG.
            WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN
            DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE
            SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN,
            RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER
            GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH
            NACH ART. 21 ABS. 1 DSGVO).
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU
            BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
            VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER
            WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER
            DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE
            PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER
            DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
          </p>
          <h3 className='text-xl font-medium md:text-2xl mt-4 mb-1'>Beschwerde­recht bei der zuständigen Aufsichts­behörde</h3>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
            Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
            Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des
            Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet
            anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
          </p>
          <h3 className='text-xl font-medium md:text-2xl mt-4 mb-1'>Recht auf Daten­übertrag­barkeit</h3>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
            Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen
            Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
            Sofern Sie die direkte Übertragung der Daten an einen anderen
            Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar
            ist.
          </p>
          <h3 className='text-xl font-medium md:text-2xl mt-4 mb-1'>Auskunft, Berichtigung und Löschung</h3>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das
            Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen
            Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und
            ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
            weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit
            an uns wenden.
          </p>
          <h3 className='text-xl font-medium md:text-2xl mt-4 mb-1'>Recht auf Einschränkung der Verarbeitung</h3>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an
            uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
            folgenden Fällen:
          </p>
          <ul className='list-disc ml-6 body text-neutral-800 space-y-2 my-2 lg:my-4'>

            <li>
              Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen
              Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen.
              Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
              geschah/geschieht, können Sie statt der Löschung die Einschränkung der
              Datenverarbeitung verlangen.
            </li>
            <li>
              Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch
              zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen
              benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss
              eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden.
              Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das
              Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
              verlangen.
            </li>
          </ul>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben,
            dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer
            Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von
            Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder
            juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses
            der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
          </p>
          <h3 className='text-xl font-medium md:text-2xl mt-4 mb-1'>SSL- bzw. TLS-Verschlüsselung</h3>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
            vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie
            an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine
            verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
            Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in
            Ihrer Browserzeile.
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die
            Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
          </p>
          <h2 className='font-semibold text-xl md:text-2xl lg:text-3xl mt-4 mb-2 lg:mt-8'>4. Datenerfassung auf dieser Website</h2>
          <h3 className='text-xl font-medium md:text-2xl mt-4 mb-1'>Cookies</h3>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine
            Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden
            entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder
            dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
            Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht.
            Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese
            selbst löschen oder eine automatische Löschung durch Ihren Webbrowser
            erfolgt.
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen
            stammen (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die
            Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von
            Webseiten (z.&nbsp;B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch
            notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren
            würden (z.&nbsp;B. die Warenkorbfunktion oder die Anzeige von Videos).
            Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu
            Werbezwecken verwendet werden.
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur
            Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.&nbsp;B. für
            die Warenkorbfunktion) oder zur Optimierung der Website (z.&nbsp;B. Cookies
            zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden
            auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine
            andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein
            berechtigtes Interesse an der Speicherung von notwendigen Cookies zur
            technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern
            eine Einwilligung zur Speicherung von Cookies und vergleichbaren
            Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung
            ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO
            und § 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies
            informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von
            Cookies für bestimmte Fälle oder generell ausschließen sowie das
            automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei
            der Deaktivierung von Cookies kann die Funktionalität dieser Website
            eingeschränkt sein.
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie
            dieser Datenschutzerklärung entnehmen.
          </p>
          <h3 className='text-xl font-medium md:text-2xl mt-4 mb-1'>Kontaktformular</h3>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
            Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
            Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
            Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
            Einwilligung weiter.
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
            DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt
            oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen
            übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an
            der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1
            lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
            sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis
            Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
            widerrufen oder der Zweck für die Datenspeicherung entfällt (z.&nbsp;B. nach
            abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
            Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
          </p>
          <h3 className='text-xl font-medium md:text-2xl mt-4 mb-1'>Anfrage per E-Mail, Telefon oder Telefax</h3>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
            Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name,
            Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und
            verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
            DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt
            oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen
            übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an
            der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1
            lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
            sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei
            uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
            widerrufen oder der Zweck für die Datenspeicherung entfällt (z.&nbsp;B. nach
            abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche
            Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben
            unberührt.
          </p>
          <h2 className='font-semibold text-xl md:text-2xl lg:text-3xl mt-4 mb-2 lg:mt-8'>5. Plugins und Tools</h2>
          <h3 className='text-xl font-medium md:text-2xl mt-4 mb-1'>Nutzung von Google Analytics</h3>
          <p className='typography-body text-black/80 my-2 lg:my-3'>Wir verwenden Google Analytics, um die Website-Nutzung zu analysieren. Die daraus gewonnenen Daten werden genutzt, um unsere Website sowie Werbemaßnahmen zu optimieren. Google verarbeitet die Daten zur Website-Nutzung in unserem Auftrag und verpflichtet sich vertraglich zu Maßnahmen, um die Sicherheit und Vertraulichkeit der verarbeiteten Daten zu gewährleisten.</p>
          <p className="typography-body text-black/80 my-2 lg:my-3">
            Während Ihres Website-Besuchs werden u.a. folgende Daten an Google übermittelt:
          </p>
          <ul className='list-disc ml-6 text-black/80 space-y-2 my-2 lg:my-4 typography-body'>
            <li>Aufgerufene Seiten</li>
            <li>Bestellungen inkl. des Umsatzes und der bestellten Produkte</li>
            <li>Die Erreichung von "Website-Zielen" (z.B. Kontaktanfragen und Newsletter-Anmeldungen)</li>
            <li>Ihr Verhalten auf den Seiten (beispielsweise Verweildauer, Klicks, Scrolltiefe)</li>
            <li>Ihr ungefährer Standort (Land und Stadt)</li>
            <li>Ihre Internetadresse (IP-Adresse)</li>
            <li>Technische Informationen wie Browser, Internetanbieter, Endgerät und Bildschirmauflösung</li>
            <li>Herkunftsquelle Ihres Besuchs (d.h. über welche Website bzw. über welches Werbemittel Sie zu uns gekommen sind)</li>
            <li>Eine zufallsgenerierte User-ID</li>
          </ul>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Es werden keine persönlichen Daten wie Name, Anschrift oder Kontaktdaten an Google Analytics übertragen.
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>Diese Daten werden an Server von Google in den USA übertragen. Wir weisen darauf hin, dass in den USA datenschutzrechtlich nicht das gleiche Schutzniveau wie innerhalb der EU garantiert werden kann. Google Analytics speichert Cookies in Ihrem Webbrowser für die Dauer von zwei Jahren seit Ihrem letzten Besuch. Diese Cookies enthaltene eine zufallsgenerierte User-ID, mit der Sie bei zukünftigen Website-Besuchen wiedererkannt werden können. Die aufgezeichneten Daten werden zusammen mit der zufallsgenerierten User-ID gespeichert, was die Auswertung pseudonymer Nutzerprofile ermöglicht. Diese nutzerbezogenen Daten werden automatisch nach 14 Monaten gelöscht. Sonstige Daten bleiben in aggregierter Form unbefristet gespeichert.</p>
          <p className="typography-body text-black/80 my-2 lg:my-3">
            Sollten Sie mit der Erfassung nicht einverstanden sein, können Sie diese mit der einmaligen Installation des Browser-Add-ons zur Deaktivierung von Google Analytics unterbinden oder durch das Ablehnen der Cookies über unseren Cookie-Einstellungs-Dialog.
          </p>
          <h3 className='text-xl font-medium md:text-2xl mt-4 mb-1'>Google Fonts (lokales Hosting)</h3>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte
            Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind
            lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht
            statt.
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Weitere Informationen zu Google Fonts finden Sie unter:
            <br />
            <a
              className='text-black underline typography-body'
              href="https://developers.google.com/fonts/faq"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://developers.google.com/fonts/faq
            </a>
            und in der Datenschutzerklärung von Google:
            <br />
            <a
              className='text-black underline typography-body'
              href="https://policies.google.com/privacy?hl=de"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy?hl=de
            </a>
            .
          </p>
          <p className='typography-body text-black/80 my-2 lg:my-3'>
            Quelle: <a
              className='text-black underline typography-body' href="https://www.e-recht24.de">https://www.e-recht24.de</a>
          </p>
        </div>

      </div>

    </main>
  )
}