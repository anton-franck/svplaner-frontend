# SV-Planer Frontend

Ein modernes Next.js-Projekt zur Anzeige des HTML Vertretungsplans des SV Planers.

## Übersicht

Dieses Frontend holt Vertretungsdaten von URLs, parst sie mit Cheerio und zeigt sie übersichtlich an. Es nutzt React, TypeScript, Tailwind CSS und verschiedene UI-Bibliotheken.

## Features

- Dynamisches Laden von Vertretungsdaten für heute und morgen
- HTML-Parsing der Vertretungspläne
- Komponentenbasiertes UI
- Styling mit Tailwind CSS
- Icons mit Lucide und FontAwesome

## Voraussetzungen

- Node.js ≥ 18
- npm / yarn / pnpm

## Installation & Entwicklung

1. Repository klonen
   ```bash
   git clone https://github.com/antonfrAntonanck/svplaner-frontend.git
   cd svplaner-frontend
   ```
2. Abhängigkeiten installieren
   ```bash
   npm install
   # oder
   yarn install
   ```
3. Umgebungsvariablen konfigurieren  
   Kopiere `.env.local.example` nach `.env.local` und passe an:
   ```env
   TODAY_URL=https://meineseite.de/intern/PH_1.html
   TOMORROW_URL=meineseite.de/intern/PH_2.html
   SITE_NAME=Name der Seite
   SITE_DESCRIPTION=SEO Beschreibung
   SCHOOL_WEBSITE=Website der Seite
   ```
4. Entwicklung starten
   ```bash
   npm run dev
   # öffnet http://localhost:3000
   ```

## Projektstruktur

```
├── public/                 # Statische Assets (z.B. logo.jpg)
├── src/
│   ├── app/
│   │   ├── page.tsx        # Einstiegspunkt
│   │   └── api/            # API-Routen
│   ├── components/         # Wiederverwendbare UI-Bausteine
│   └── lib/                # Helferfunktionen, Services
├── .env.local              # Umgebungsvariablen
├── next.config.ts          # Next.js-Konfiguration
├── postcss.config.mjs      # Tailwind CSS Konfiguration
├── tsconfig.json           # TypeScript-Einstellungen
└── package.json            # Scripts & Abhängigkeiten
```

## Wichtige Dateien

- [`package.json`](package.json) – Skripte:
  - `dev`: startet Next.js im Dev-Mode
  - `build`: erstellt das Production-Build
  - `start`: startet den Production-Server
- [`tsconfig.json`](tsconfig.json) – Pfade und Compiler-Optionen
- [`next.config.ts`](next.config.ts) – Next.js-Einstellungen
- [`postcss.config.mjs`](postcss.config.mjs) – Tailwind CSS Plugin
- [`src/app/page.tsx`](src/app/page.tsx) – Hauptseite
- [`src/components/representation-card.tsx`](src/components/representation-card.tsx) – Beispielkomponente

## Deployment

Für die Produktion empfiehlt sich Vercel:

1. GitHub-Repository verbinden
2. Environment-Variables in Vercel setzen (`TODAY_URL`, `TOMORROW_URL`, ...)
3. Automatisches Build & Deploy anschalten

## Lizenz

MIT © Anton Franck
