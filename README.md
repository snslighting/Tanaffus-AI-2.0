# Tanaffus

A teacher-controlled grading prototype for the AICA & AI Alliance Case A competition.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Use **Grade new assignment** to demonstrate the complete flow, or **Help & getting started** for guidance. Open `/pitch.html` for the 18-slide browser presentation. The business plan and criteria map are in `submission/BUSINESS_PLAN.md`.

## Build and test

```sh
npm run build
npm test
```

The browser test expects the development server at `http://127.0.0.1:5173` and installed Microsoft Edge. It checks assignment creation, bulk approval, manual-review gating, editing, persistence, report download, all primary routes and mobile overflow. The production build includes TypeScript checking. To test a different browser, change the Playwright launch channel in `tests/flow.test.mjs`.

## Architecture

React 19, TypeScript, Vite, Framer Motion, Lucide, and lazily loaded Recharts. Responsive CSS uses a shared light-blue, white and yellow design system. `src/App.tsx` owns assignment state and hash navigation. Domain types and synthetic data live in `src/data.ts`. Dashboard, creation, review, analytics and secondary screens are split into reusable components. Local storage persists demo state; Settings resets it. Dialogs trap focus and support Escape. Motion respects reduced-motion preferences.

## Honest prototype boundaries

All grades, confidence scores, papers and learning patterns are synthetic. Selecting files demonstrates intake only: their contents are not read, uploaded or retained. Analysis always uses sample mathematics data, even if another subject is selected. There is no real AI, OCR, server authentication, student messaging, or eMaktab connection. Reports download locally; simulated sync changes no external school record. Do not enter real student data into this demonstration.

The time-saving dashboard metric is an illustrative scenario. Assignment completion estimates use a 4-minute manual baseline minus 30 seconds assisted review per paper, excluding setup and exceptional cases. These are not measured claims. Confidence is a sample prioritization indicator, not a calibrated probability.

## Production next steps

Build secure consented upload and deletion flows, identity/role controls, a real rubric-scoring backend, teacher audit history, and an evaluated local handwriting dataset before pilots. Proposed market, rollout, financial assumptions, and release gates are documented in the business plan.
