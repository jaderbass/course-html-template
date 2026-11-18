// Kursnavigation: Die Reihenfolge und die Sprungauswahl werden hier gepflegt.
(() => {
  "use strict";

  const root = new URL("../", document.currentScript.src);
  const lessons = [
    "03-textstruktur-2.html",
    "04-maskieren.html",
    "05-aufzaehlungen.html",
    "06-nummerierungen.html",
    "07-definitionslisten.html",
    "08-medien.html",
    "09-hyperlinks.html",
    "10-ziel.html",
    "11-meta.html",
    "12-tabellen.html",
    "13-formulare.html",
    "14-internes-css.html",
    "15-shorthand.html",
    "16-bereiche.html",
    "17-klassen-und-ids.html",
    "18-farben.html",
    "19-abstaende.html",
    "20-zentrieren.html",
    "21-tabellen-css.html",
    "21a-hintergrundbilder.html",
    "21b-hintergrundbild-mit-img.html",
    "22-selektor-typen.html",
    "23-positionierung.html",
    "24-menu.html",
    "25-css-box-modell.html",
    "26-floating-boxes.html",
    "27-masseinheiten.html",
    "28-fonts-extern.html",
    "29-fonts-intern.html",
    "30-responsive.html",
    "31-padding-border-overflow.html"
  ];
  const extras = [
    "useful-links.html",
    "markdown-viewer.html",
    "infos/infos.html",
    "uebungen/kartoffelpuffer_invalid.html"
  ];
  const isCurrent = (file) => new URL(file, root).pathname === location.pathname;
  const sequence = lessons.some(isCurrent) ? lessons : extras;
  const currentIndex = sequence.findIndex(isCurrent);
  if (currentIndex === -1) return;

  // Shadow DOM verhindert, dass Selektoren aus den Übungen die Navigation stylen.
  const host = document.createElement("kurs-navigation");
  const shadow = host.attachShadow({ mode: "open" });
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = new URL("css/kurs-navigation.css", root).href;
  shadow.append(stylesheet);

  const bar = document.createElement("div");
  bar.className = "bar";
  const nav = document.createElement("nav");
  nav.id = "seiten";
  nav.setAttribute("aria-label", "Kursseiten");

  function createLink(file, direction, label, arrow) {
    const link = document.createElement(file ? "a" : "span");
    link.className = "step";
    if (file) {
      link.href = new URL(file, root).href;
      link.rel = direction;
      link.title = `${label}: ${file}`;
      link.setAttribute("aria-label", link.title);
    } else {
      link.setAttribute("aria-disabled", "true");
      link.title = direction === "prev" ? "Erste Seite" : "Letzte Seite";
    }
    const icon = document.createElement("span");
    icon.textContent = arrow;
    icon.setAttribute("aria-hidden", "true");
    const text = document.createElement("span");
    text.className = "step-label";
    text.textContent = label;
    link.append(...(direction === "prev" ? [icon, text] : [text, icon]));
    return link;
  }

  const select = document.createElement("select");
  select.setAttribute("aria-label", "Zu einer Kursseite springen");
  select.title = "Seite auswählen";
  for (const [label, files] of [["Kursseiten", lessons], ["Zusatzmaterial", extras]]) {
    const group = document.createElement("optgroup");
    group.label = label;
    for (const file of files) {
      const option = document.createElement("option");
      option.value = new URL(file, root).href;
      option.textContent = file;
      option.selected = isCurrent(file);
      group.append(option);
    }
    select.append(group);
  }
  select.addEventListener("change", () => location.assign(select.value));
  nav.append(
    createLink(sequence[currentIndex - 1], "prev", "Vorige", "←"),
    select,
    createLink(sequence[currentIndex + 1], "next", "Nächste", "→")
  );

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.setAttribute("aria-controls", nav.id);
  function updateToggle() {
    toggle.textContent = nav.hidden ? "↔" : "−";
    toggle.title = nav.hidden ? "Kursnavigation einblenden" : "Kursnavigation ausblenden";
    toggle.setAttribute("aria-label", toggle.title);
    toggle.setAttribute("aria-expanded", String(!nav.hidden));
  }
  toggle.addEventListener("click", () => {
    nav.hidden = !nav.hidden;
    updateToggle();
  });
  updateToggle();
  bar.append(nav, toggle);
  shadow.append(bar);
  document.body.append(host);
})();
