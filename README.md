# To do List

A simple to do list app built with React, Express, and MySQL.

## Preview

![preview](https://user-images.githubusercontent.com/54428874/161387172-953ebe42-aa72-4c70-9025-c90766cb95de.gif)

## Usage

If you want to use this for yourself, do the following:

1. Clone this repo to your machine.
2. Start MySQL and create a database called `to-do-list-app`.
3. Run `npm install` in both the frontend and the backend folder.
4. Run `npm install -g db-migrate` to install node-db-migrate, which is a neat CLI tool to manage database migrations. You can skip this step if you have it installed already.
5. Run `db-migrate up`. This will set up the database including the tables.
6. Use two CMDs and run `npm run start` on both the frontend and the backend.
7. Go to `localhost:3000` to use!

## Outcomes

Here are some of the things I learned while developing this application:

1. Making REST APIs with Express + MySQL.
2. Doing multiple-table queries with node-mysql.
3. The fact that you can't deploy mysql databases for free ;-; at least easily.
4. Using [Tailwind CSS](https://tailwindcss.com/) for styling.
5. Form handling with validation in react with react-hook-form.
6. Front-end pagination with [react-paginate](https://github.com/AdeleD/react-paginate).
7. Nested routes in react-router.
8. Modals in React.
9. More CSS.
