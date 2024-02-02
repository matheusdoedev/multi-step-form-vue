# Multi Step Form Vue

- A multi step form made in Vue with Pinia, SCSS, and Tailwindcss.

- This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ).

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

## Installation

### 0. Clone the project

```sh
git clone git@github.com:matheusdoedev/multi-step-form-vue.git
```

## Running project in development mode

### 0. Install dependencies

```sh
npm install

# or

yarn
```

### 1. Run project

```sh
npm run dev

yarn dev
```

## Running project in production mode with Docker & Docker Compose

### 0. Build image

```sh
docker build -t multi-step-form-vue .
```

### 1. Run container

```sh
docker run -d -p 4173:4173 --name multi-step-form-vue multi-step-form-vue
```

## Running project in production mode without Docker

### 0. Install dependencies

```sh
npm install

# or

yarn
```

### 1. Build project

```sh
npm run build

yarn build
```

### 2. Run project

```sh
npm preview

yarn preview
```

## Technologies

- [Vue](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/docs)
- [SCSS](https://sass-lang.com/)

## Contributing

1. Fork it (<git@github.com:matheusdoedev/multi-step-form-vue.git>)
2. Create your feature branch (`git checkout -b feat/fooBar`)
3. Commit your changes following conventional commits pattern (`git commit -am 'feat: add some feature'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
