# HTML5 & CSS3 – Grundlagen

Dieses Repository enthält Unterrichtsmaterialien, Codebeispiele und Übungen zu den Grundlagen von **HTML5 und CSS3**.

Die Beispiele begleiten den Unterricht und vermitteln schrittweise den Aufbau und die Gestaltung von Webseiten.

## Kursinhalte

### HTML5

- HTML-Grundgerüst und Dokumentstruktur
- Texte, Überschriften und Listen
- Hyperlinks und Bilder
- Tabellen und Formulare
- Semantische HTML-Elemente
- Grundlagen der Barrierefreiheit
- Validierung von HTML-Dokumenten

### CSS3

- CSS einbinden und grundlegende Syntax
- Element-, Klassen- und ID-Selektoren
- Kaskade, Vererbung und Spezifität
- Farben und Hintergrundgestaltung
- Schriftgestaltung und Maßeinheiten
- Boxmodell, Abstände und Rahmen
- Gestaltung von Tabellen und Formularen

## Entwicklungsumgebung

Die Beispiele sind für die Arbeit mit **Visual Studio Code** vorgesehen.

Die HTML-Dateien können direkt im Browser geöffnet werden. Eine zusätzliche Entwicklungsumgebung oder ein Webserver ist für die meisten Beispiele nicht erforderlich.

### Kursnavigation

Unten rechts auf jeder Seite stehen Links zur vorigen und nächsten Seite sowie eine Sprungauswahl mit den Dateinamen. Mit **−** lässt sich die Leiste einklappen und mit **↔** wieder öffnen. Beim Drucken wird sie ausgeblendet. Die nummerierten Kursseiten und die Zusatzmaterialien bilden jeweils eine eigene Reihenfolge.

Mit Live Server genügt es, eine Seite einmal zu öffnen. Alle weiteren Seiten werden über die Navigation im selben Tab geladen. Die Navigation funktioniert auch beim direkten Öffnen der HTML-Dateien ohne Server.

Jede HTML-Datei bindet nur `js/kurs-navigation.js` ein. Das Skript erzeugt die Navigation und lädt `css/kurs-navigation.css` in einem abgeschirmten Bereich (Shadow DOM), damit die CSS-Beispiele und die Navigation sich nicht gegenseitig gestalten.

Für neue Kursseiten, etwa die gemeinsam erstellten Dateien 01 und 02:

1. Den Dateinamen in `js/kurs-navigation.js` in der Liste `lessons` an der gewünschten Position ergänzen.
2. Im `<head>` der neuen Datei die Zeile `<script src="js/kurs-navigation.js" defer></script>` ergänzen. In Unterordnern lautet der Pfad entsprechend `../js/kurs-navigation.js`.

## Weiterführende Kursmodule

Die weiterführenden Themen werden in eigenen Repositories behandelt:

- Flexbox
- CSS Grid
- Sass (SCSS)
- Bootstrap 5.3

## Hinweise

Die Beispiele sind teilweise bewusst vereinfacht, um einzelne HTML- und CSS-Techniken verständlich zu demonstrieren.

Die Materialien dienen Unterrichts- und Übungszwecken.

---

**JAderBass web'n'more**  
Unterrichtsmaterialien zur Webentwicklung
