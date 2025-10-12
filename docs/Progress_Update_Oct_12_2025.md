Progress Update — Oct 12, 2025

This is a quick progress update for the "Meri Journey Planner" capstone project. It covers: accomplishments to date, challenges and mitigations, and a beginner-friendly plan for the upcoming week.

1. What I have accomplished so far

- Project scaffolding and basic UI
  - Initialized the frontend with Vite and React. Project root contains `package.json`, `vite.config.js`, and `index.html`.
  - Implemented main app entry points: `src/main.jsx`, `src/App.jsx`, and base styles in `src/index.css`.
- Core components and pages
  - Built components under `src/components/`: `MapDisplay.jsx`, `NavigationBar.jsx`, `SearchLocation.jsx`, `DropdownSuggestions.jsx`, `RouteStats.jsx`, `ElevationChart.jsx`, `LiveNavigation.jsx`.
  - Implemented pages under `src/pages/`: `HomePage.jsx`, `Dashboard.jsx`, `RideLog.jsx`, `NotFound.jsx`.
- Services and hooks
  - Added API wrappers in `src/api/` for geocoding and route services (`geocodeService.js`, `routeService.js`).
  - Created custom hooks for app logic: `useDebounce.js`, `useGeocodeQuery.js`, `useRouteCalculation.js`.
- State management
  - Implemented global store hook `src/store/useMapStore.js` for central state like selected locations and route info.
- Basic routing and integration
  - Configured client routing for pages and wired up core interactions (search → suggestions → route calculation → map display).
- Small validation & linting
  - Project runs with Vite dev server locally. Basic linting config present (`eslint.config.js`).

2. Challenges faced and how I handled them

- Handling asynchronous geocoding and debouncing
  - Challenge: Avoiding excessive API calls while keeping UI responsive when the user types location queries.
  - Solution: Implemented `useDebounce` to delay queries, and `useGeocodeQuery` to manage request lifecycle and cancellation.

- Map rendering and integrating route data
  - Challenge: Converting route coordinates to the map component and rendering elevation/profile data correctly.
  - Solution: Normalized API route data in `routeService.js`, and separated concerns by having `MapDisplay.jsx` handle only rendering while `RouteStats.jsx` and `ElevationChart.jsx` handle data formatting and display.

- State synchronization across components
  - Challenge: Multiple components (search, map, live nav) needed to read and update selected route/location state.
  - Solution: Added `useMapStore.js` to centralize state and used shallow selectors for performance.

- Time constraints and prioritization
  - Challenge: Several nice-to-have features (route saving, offline support, advanced UI polish) vs. core features required for demo.
  - Solution: Prioritized core features: reliable search, route calculation, and map display. Flagged extras as future work.

3. What’s next? – Beginner-friendly plan for the upcoming week

Here is a simple, step-by-step plan you can follow even if you're new to the codebase.

Day 1 — Make route calculation more reliable
- Goal: Handle cases where the routing API returns multiple route options or missing elevation data.
- Steps:
  1. Open `src/api/routeService.js` and look for the function that fetches routes.
  2. Add a check: if the API returns multiple routes, pick the first one and log a note for the user (or show a simple message).
  3. If elevation data is missing, set a default value (e.g., zeros) so charts won't break.
- How to test: Run the app (`npm run dev`) and try searching two points that produce routes.

Day 2 — Add loading indicators
- Goal: Make it clear when the app is waiting for API data.
- Steps:
  1. Add a simple `loading` state to `useRouteCalculation.js` or the central store `useMapStore.js`.
  2. In `MapDisplay.jsx` or `RouteStats.jsx`, conditionally show "Loading..." or a spinner when loading is true.
- How to test: Trigger route calculations and verify the loading indicator appears.

Day 3 — Improve search UX (keyboard & suggestions)
- Goal: Make `SearchLocation` and `DropdownSuggestions` easier to use.
- Steps:
  1. Ensure users can navigate suggestions with up/down arrow keys and press Enter to select.
  2. If not implemented, add basic keyboard handlers to `DropdownSuggestions.jsx`.
- How to test: Type in the search box, use arrow keys, and press Enter to select a suggestion.

Day 4 — Save recent searches locally
- Goal: Keep a short list of recent searches using `localStorage` so users can quickly reuse them.
- Steps:
  1. Add a small helper `saveRecentSearch(term)` that stores a list of up to 5 searches in `localStorage`.
  2. Show recent searches above suggestions when the search box is focused and empty.
- How to test: Search a few terms and refresh the page to see the recent list.

Day 5 — Add basic tests for hooks
- Goal: Prevent regressions by testing `useDebounce` and `useRouteCalculation`.
- Steps:
  1. Add a test runner (the project likely uses Vitest or Jest — check `package.json`).
  2. Write one test for `useDebounce` to confirm it delays calls, and one for `useRouteCalculation` for the happy path.
- How to test: Run the test command (usually `npm test` or `npm run test`).

Day 6–7 — Polish and demo prep
- Goal: Fix small UI issues and prepare a short demo script.
- Steps:
  1. Walk through the app and note any UI glitches; fix 2–3 small issues (spacing, button text, or error messages).
  2. Create 3 screenshots and write 3 bullet points describing the demo flow.

Extra notes for beginners
- Where to run the app: In the project root run:

```bash
npm install
npm run dev
```

- Useful files to open first: `src/components/SearchLocation.jsx`, `src/components/DropdownSuggestions.jsx`, `src/api/routeService.js`, `src/hooks/useRouteCalculation.js`, and `src/store/useMapStore.js`.
- Ask for help: If you get stuck, paste relevant code snippets and the failing behavior and I can guide the fix.

---

Generated on Oct 12, 2025
