# Multi-Step Form

This project implements a multi-step form using React.js, featuring animations and transitions between each step. The form collects personal information, address details, and provides a confirmation step before submission.

## Overview
The project is structured to provide a seamless user experience with smooth transitions between form steps using CSS animations. It utilizes React's state management to handle form data and navigation between steps. Local storage is employed to persist form data across page refreshes or revisits.

**Porject Link**
https://multipageapp.vercel.app/

## Functionalities

- Multi-step form with three distinct stages: Personal Information, Address Information, and Confirmation.
- Responsive design that adapts to various screen sizes (desktop, tablet, mobile).
- Client-side validation to ensure all fields are filled correctly before advancing to the next step.
- CSS animations for smooth transitions between form steps.
- Error handling for form submissions and network requests (simulated with setTimeout).
- Unit tests for critical components and validation functions.

## Screenshots

![image](https://github.com/user-attachments/assets/36cbf095-b94e-4840-a23e-062bea5e9ec3)
![image](https://github.com/user-attachments/assets/089f0469-ec74-4aa6-93e4-c3b9fd7561ed)
![image](https://github.com/user-attachments/assets/c6cb8f1e-462d-43ac-b7a9-6446ee9f6ba7)


## Getting Started

To get started with this project, follow these steps:

1. Fork this repository

1. Clone this repository to your local machine:

```bash
https://github.com/ishanvisrivastavaa/Ishanvi-srivastava.git
```

2. Install the required dependencies:

```bash
cd Ishanvi-srivastava
npm install
npm run dev
```
3. Access the application in your web browser at [http://localhost:3000](http://localhost:3000).
   
## Components
The project is structured with reusable components responsible for different sections of the multi-step form:

- Step1.js: Component for collecting personal information.
- Step2.js: Component for collecting address information.
- Step3.js: Component for confirming entered data and submitting the form.
- Navigation.js: Component for navigating between form steps.

## Assumptions and Decisions
- CSS Animations: CSS animations (fade-enter and fade-exit) are used for transitions between form steps, providing a smoother user experience without relying on JavaScript for animations.

- Local Storage: Data entered in the form is stored in local storage to persist across page refreshes or browser sessions. Assumption is made that this behavior enhances user experience by retaining partially filled forms.

- Error Handling: Errors related to form submission or network requests are simulated using setTimeout. This approach ensures that users receive feedback on form submission status.

