# CareerApp

<br>

Live demo - [https://internship-career-app-1.vercel.app](https://internship-career-app-1.vercel.app)

<br>

## Install

```sh
npm install
```
or
```sh
npm i
```

## Run in dev mode

```sh
rsbuild dev --open
```
or
```sh
npm run dev
```

<br>

## Sprint 1

**Objective**:

Create a job search application. Development from the ground up and working with existing code

**Settings**:
+ Solo, Legacy
+ Estimated time: 31 hours
+ Number of task: 8
+ Technology: React, RSBuild, Zustand, HTML, CSS, JS

### Task 1

Translate the application page layout according to the [mockup](https://www.figma.com/file/6HkVxXvjbAj2X5Og4p2GAM/Career-App.-4-sprint.-1-task?type=design&node-id=1-2&mode=design&t=5DXgio77tNd2KKBV-0).

Create 8 components: Main, Header, Filterlist, FilterItem, VacancyCard, VacancyList, VacancyBlock, Footer. Move component styles to module.css files.

The VacancyList component may consist of multiple VacancyBlocks, which in turn consist of VacancyCard and group them by date.

Implement the vacancy cards block. Use mockup data for layout (only 1 variant of vacancy card from the mockup may be used).

When hovering over a vacancy card, an additional icon and card shadow should appear.

The site header should stick to the top edge of the screen when scrolling.

When clicking a link in the footer, a new tab should open with URL https://preax.ru.

Implement only desktop version. Minimum screen width 1024 px. Screen width from 1280 px and above 1600 px according to the mockup.

**Important**: do not implement tab click handlers in the header or filter functionality for this task - layout only.