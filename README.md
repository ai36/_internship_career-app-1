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

### Task 5

Create a detailed vacancy card according to the [layout](https://www.figma.com/design/VYUI4nmYxe4uIcwd1d4GQ3/Career-App.-1-sprint.-5-task?m=auto&t=5IxYMpyV8TeDAo4h-6), using data from the [API](https://dev.hh.ru/).

Below the detailed description, display similar vacancies — 6 cards at a time — using the [API](https://dev.hh.ru/). 

- When the user clicks the “Show More” button, load 6 additional cards. While similar vacancies are loading, show skeletons.
- When a user clicks on a vacancy, display detailed information for that specific vacancy.
- The company info card is a sticky element that includes the logo, company name, and address. It stays fixed at the top during scroll and moves down until it reaches the similar vacancies block.
- Implement the ability to return to the previous search results page, as shown in the layout.
- When returning to the vacancy search page, the user should land on the same page they came from.
- Implement the ability to hide a vacancy card:
- When the user clicks the "hide" icon in the vacancy list, that card should no longer appear.

If the user clicks "hide" inside the detailed vacancy view and then returns to the previous step, the vacancy should not appear in the list either.

The hiding functionality should be implemented locally — meaning hidden cards can appear again after the page or app is reloaded.

### Task 4

Update the `VacancyList` component on the job search page. The list should display pagination according to the [layout](https://www.figma.com/design/Lo2AXtYSyoMUE0vlAGhZuK/Career-App.-1-sprint.-4-task?m=auto&t=5IxYMpyV8TeDAo4h-6).

- A maximum of 18 job cards should be shown per page.
- Pagination should appear if there are more than 18 cards.
- Pagination should be shared across all date blocks.

Make sure the pagination component can be reused on other pages.

When the user changes the page through pagination, a new request must be sent to the API to load the corresponding page of vacancies.

### Task 3

To request and receive a list of vacancies, use the open HeadHunter API. No registration is required.

- The documentation is available via the provided [link](https://api.hh.ru/openapi/redoc#tag/Poisk-vakansij/operation/get-vacancies).
- Example request: `https://api.hh.ru/vacancies?text=frontend ${city}&only_with_salary=true&per_page=100`
- Add sorting by publication date to the request. The most recent vacancies should appear first. The year is shown only for previous years — for the current year, display the date without the year.

When the page loads, send the request and save the received data in a state manager (Zustand). Display the vacancies grouped by date.

- If there are vacancies with different publication dates, show multiple blocks with the corresponding date.
- If all vacancies have the same publication date, show a single block.

Based on the saved data in the state manager, display job cards according to the [layout](https://www.figma.com/design/Gg5551ZnkWqX4rmsymLeZi/Career-App.-1-sprint.-3-task?m=auto&t=5IxYMpyV8TeDAo4h-6).

Add skeletons (loading placeholders) according to the layout while the data is being fetched from the API.
The application should send a request to the HeadHunter API when it opens.

There’s **no need** to store the fetched data after a page reload.

**Important**: Filter functionality is not required for this task.

### Task 2

According to the [layout](https://www.figma.com/design/g5BMgCayMBLgUkNHhc4M1Y/Career-App.-1-sprint.-2-task?m=auto&t=5IxYMpyV8TeDAo4h-6), create a filter block with options for city, employment type, and additional filters. The filter data should be taken from the layout.

- Implement the logic for opening and closing the filter section.
- Make sure that only one option can be selected in radio button groups, and multiple options can be selected in checkbox groups.
- Add a custom-styled scrollbar inside the additional filters section.

Important: You don’t need to implement saving the selected filters in the state or the logic for the “clear all filters” button.

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