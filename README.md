# Node Sum App

This is a simple Node.js application that performs the sum of two numbers. It includes unit tests, a Dockerfile, and a CI pipeline for automated testing, building, and pushing to DockerHub, along with SonarCloud integration for code quality analysis.

## Features

- **Sum Function**: Adds two numbers and validates that the inputs are valid numbers.
- **Unit Tests**: Tests for different cases such as valid numbers, invalid inputs, negative numbers, and decimal numbers.
- **Docker**: A Dockerfile is provided to containerize the application.
- **CI/CD Pipeline**: A GitHub Actions workflow for testing, building, and pushing the Docker image to DockerHub, and analyzing the code using SonarCloud.

## Project Structure

- `sum.js`: Contains the logic for adding two numbers.
- `sum.test.js`: Unit tests for the `sum` function.
- `Dockerfile`: Defines the environment for running the Node.js application in a Docker container.
- `.github/workflows/node.js-ci-workflow.yml`: Defines the CI/CD pipeline for testing, building, pushing the Docker image, and running SonarCloud analysis.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v20.17.0 or higher)
- [Docker](https://docs.docker.com/get-docker/) (if you want to build the Docker image)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

### Installing

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/your-username/node-sum-app.git
cd node-sum-app
```

Install dependencies:

```bash
npm install
```

### Running the Application

Run the application locally:

```bash
node sum.js
```

This will output :

```bash
The sum of the numbers is: 15
```

### Running Tests

Run the unit tests using:

```bash
npm test
```

### Building and Running with Docker

To build and run the Docker container:

1. Build the Docker image:

```bash
docker build -t node-sum-app .
```

2. Run the Docker container:

```bash
docker run node-sum-app
```

This will execute the application inside a container and output the sum result.

### CI/CD Pipeline

This project includes a GitHub Actions workflow for automated testing, building, and pushing the Docker image to DockerHub, as well as performing SonarCloud code quality analysis.

The pipeline is triggered on pull requests to the develop branch and performs the following steps:

1. Checkout the repository.
2. Set up Node.js.
3. Install dependencies.
4. Run unit tests.
5. Run the application.
6. Build and push Docker image to DockerHub.
7. SonarCloud scan for code quality.

### DockerHub

The Docker image is automatically built and pushed to DockerHub under the following tag:

```bash
docker pull gabrielgrc/node-sum-app:latest
```

### SonarCloud

SonarCloud is used to analyze code quality and security. The scan is run automatically as part of the CI pipeline.

### Environment Variables

To run the CI pipeline, make sure to configure the following secrets in your GitHub repository:

DOCKERHUB_USERNAME: Your DockerHub username.
DOCKERHUB_TOKEN: Your DockerHub access token.
SONAR_TOKEN: Your SonarCloud access token.
