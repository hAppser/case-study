# Test Assignment: Next.js Application

## Overview
The goal is to create a simple web application using **Next.js** with specific features that demonstrate your ability to handle modern web development tools and integrations. This assignment will assess your ability to set up authentication, display and visualize data, and integrate third-party tools.

## Requirements

### 1. **Authentication**
- Implement user authentication using **Clerk**.
- Configure authentication to allow login through **Google provider**.

### 2. **Data Display**
- Fetch metrics data from the **server-side route** located at `src/app/api/metrics/route.ts`.
- Display the fetched metrics in a **table format** using any table library of your choice, such as [**TanStack Table**](https://tanstack.com/table/latest) x [**Shadcn Data Table**](https://ui.shadcn.com/docs/components/data-table), [**AG Grid**](https://www.ag-grid.com/), or similar alternatives.
![Table Example](https://github.com/user-attachments/assets/236e692a-0a8d-49d0-b124-7329424efa33)

### 3. **Data Visualization**
- Create a **chart or graph** to visualize the metrics data.
- Use a library such as [**Chart.js**](https://www.chartjs.org/docs/latest), [**Shadcn Beautiful Charts**](https://ui.shadcn.com/charts) or any suitable charting tool.
![Bar Chart Example](https://github.com/user-attachments/assets/0969ad6f-eb8c-4ade-85a9-585d2436d6a0)

### 4. **Create New Metric Records**
- Allow users to create new metric records through a simple form.
- Submit the form using [**TanStack Query**](https://tanstack.com/query/latest) and update the displayed data dynamically.
- Implement `POST` route for adding new metrics into local array.

### 5. **Code Submission**
- Ensure the repository is well-organized.

---

## Deliverables
- A functional Next.js application meeting the requirements.

## Evaluation Criteria
- Clean and maintainable code.
- Successful implementation of the specified features.
- UI/UX quality and responsiveness.
- Effective use of **TanStack Query** for fetching and mutating data.
- Proper code documentation.

## Additional Notes
- The `GET` route for fetching metrics is located at `src/app/api/metrics/route.ts`.
- The `POST` route for adding new metrics is to be implemented as part of the task.
- Time expected for the task: 3–5 hours.
- If any challenges arise, document your assumptions and approach.

---

Good luck! 🎉
