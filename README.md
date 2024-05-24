# Form Validation with Formik, Yup, and Bootstrap

This repository contains a simple form validation example using Formik, Yup, and Bootstrap, built with React and Vite. The form collects user details including name, email, and password, and validates the input fields based on the defined schema.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **Formik**: For handling form state and submission.
- **Yup**: For schema-based form validation.
- **Bootstrap**: For styling the form.

## Features

- **Validation**: Real-time validation feedback for name, email, and password fields.
- **Formik Integration**: Efficiently manage form state and handle form submission.
- **Responsive Design**: The form is styled using Bootstrap for a responsive and modern UI.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Kholik-Muzaki/Validation-Form.git
    ```

2. Navigate to the project directory:

    ```sh
    cd Validation-Form
    ```

3. Install the dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

### Running the Application

1. Start the development server:

    ```sh
    npm run dev
    # or
    yarn dev
    ```

2. Open your browser and navigate to the URL provided by Vite (usually `http://localhost:3000`).

## Form Validation Details

### Name Field

- **Required**: Yes
- **Minimum Length**: 3 characters
- **Maximum Length**: 10 characters

### Email Field

- **Required**: Yes
- **Validation**: Must be a valid email format

### Password Field

- **Required**: Yes
- **Validation**:
  - Minimum 8 characters
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one number
  - At least one special character (e.g., !@#$%^&*)

## Usage

### Handling Form Submission
In the `Dashboard` component, the form is submitted using the `registerUser` function, which currently displays an alert. This can be replaced with actual submission logic as needed.

### Displaying Validation Errors
Formik's `touched` and `errors` properties are used to display validation errors. Bootstrap's `is-invalid` class is applied to input fields with errors to style them accordingly.

## Contributions
This guide is created to help developers who want to implement form validation with Formik, Yup, and Bootstrap in their React applications.

You are free to contribute by adding information, fixing errors, or suggesting changes.

Happy coding!

