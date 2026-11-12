# portfolio

Portfolio-Website von Sarah Böning: reines HTML, CSS und ein wenig JavaScript, ohne Build-Schritt.
Ein Push auf `main` lädt alles per SFTP zu Strato (siehe `.github/workflows/deploy_strato.yml`).

## Aufbau

```
index.html                    Startseite (DE)
projekte/pfotenfinder.html    Case Study (DE)
lebenslauf.html               Lebenslauf (DE)
impressum.html                Impressum (DE, rechtlich maßgeblich)
datenschutz.html              Datenschutz (DE, rechtlich maßgeblich)
en/                           dieselben Seiten auf Englisch
  index.html, projects/pfotenfinder.html, cv.html, legal-notice.html, privacy.html
assets/css/style.css          alle Styles, Design-Tokens ganz oben
assets/js/theme-init.js       setzt Hell/Dunkel vor dem ersten Zeichnen
assets/js/main.js             Hell/Dunkel-Knopf, mobiles Menü, Einblenden beim Scrollen
assets/fonts/                 Quicksand + Shantell Sans, selbst gehostet (SIL OFL, Lizenzen liegen bei)
assets/img/                   Bilder und Favicon
```

Jede deutsche Seite hat ein englisches Gegenstück; der DE/EN-Schalter im Header verlinkt sie gegenseitig.
Wenn du Header oder Footer änderst, bitte in allen zehn Seiten.

## Gestaltung

- Farben, Abstände, Radien und die Bewegungskurve stehen als CSS-Variablen in `:root` in `style.css`.
  Der Dunkelmodus überschreibt dieselben Variablen.
- Karten mit Doppelrand: `.shell` (Schale) + `.core` (Kern). Varianten `.shell--b`, `.shell--c` für andere Radien.
- Buttons: `.btn` + `.btn--primary | --ink | --soft | --light | --outline-ink`, mit Icon-Insel `.btn--icon` + `<span class="btn__icon">`.
- Elemente mit `.reveal` blenden beim Scrollen ein (nicht bei „Bewegung reduzieren“).

## Datenschutz

- Keine Cookies, kein Tracking, keine externen Schriften, Skripte oder Bilder.
- Nur wenn jemand den Hell/Dunkel-Knopf drückt, speichert der Browser die Wahl lokal (`localStorage`, Schlüssel `theme`).
- Das SiteLock-Siegel ist ein reiner Textlink; das Siegelbild würde sonst bei jedem Aufruf von einem fremden Server geladen.

## Offen (im Code als `TODO` markiert)

- [ ] Persönlicher Satz im Abschnitt „Über mich“
- [ ] Nächste Case Study
- [ ] Ergebnisse des Usability-Tests in der Pfotenfinder-Case-Study
- [ ] Datenschutzerklärung prüfen lassen, Firmierung und Anschrift von STRATO und die Speicherdauer der Logfiles ergänzen
- [ ] Postfach `info@sarahboening.de` einrichten, falls noch nicht geschehen
