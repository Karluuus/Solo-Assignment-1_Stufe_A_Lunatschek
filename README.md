Projektstruktur

```text
src/
├── assets/
│   └── counter.css
├── components/
│   └── Counter.vue
├── composables/
│   └── counterLogic.ts
├── App.vue
├── main.ts
└── style.css
```

Umsetzung

Die Logik ist in der Composable-Datei counterLogic.ts ausgelagert. Dadurch bleibt die Komponente übersichtlich und die Logik kann unabhängig vom Template verwaltet werden.

In Counter.vue wird die Logik als Objekt aufgerufen:
const counter = counterLogic()

Im Template werden die Werte und Funktionen über das Objekt verwendet:

<p>Zählerstand: {{ counter.count }}</p>
<p>Doppelt: {{ counter.doubled }}</p>

<button @click="counter.increment">+1</button>
<button @click="counter.decrement">-1</button>

Verwendete Vue-Konzepte:

ref() für den reaktiven Zählerstand
computed() für die Berechnung des doppelten Werts
Composable zur Trennung von Logik und Darstellung
Vue-Events mit @click für die Buttons
TypeScript durch <script setup lang="ts">


Installation und Start:

Abhängigkeiten installieren: npm install
Entwicklungsserver starten: npm run dev

Danach kann die Anwendung über die angezeigte lokale URL im Browser geöffnet werden.
