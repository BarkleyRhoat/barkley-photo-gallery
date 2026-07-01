# barkley-photo-gallery

## Description

A React single-page app for browsing a personal photo gallery. Photos are
displayed in a carousel, and you can add new photos (by URL or file upload),
delete them, and "like" the ones you love to save them to a Favorites page.
The app is backed by a small [json-server](https://github.com/typicode/json-server)
REST API.

## Built With

- [React](https://react.dev/) (Create React App)
- [React Router](https://reactrouter.com/)
- [json-server](https://github.com/typicode/json-server)

## Demo

![Application Demo](./my-app/public/assets/reactApp.gif)

## Features

- Browse all photos in a carousel on the Gallery page (`/`)
- Add a photo by entering an image URL or uploading a file
- Delete a photo from the gallery
- Like a photo to save it to your Favorites
- Unlike a photo to remove it from Favorites (`/favorites`)
- Learn about the project on the About page (`/about`)

## Project Structure

The application lives in the `my-app/` directory:

## Setup

### 1. Clone the repo via SSH

```bash
git clone git@github.com:BarkleyRhoat/barkley-photo-gallery.git
cd barkley-photo-gallery/my-app
```

### 2. Install dependencies

This installs React and `json-server` (both are listed in `package.json`, so no
global install is required):

```bash
npm install
```

### 3. Start the API server

In one terminal, start `json-server` (serves the API on
`http://localhost:3001`):

```bash
npm run server
```

### 4. Start the React app

In a second terminal, start the development server (opens the app on
`http://localhost:3000`):

```bash
npm start
```

## Available Scripts

Run these from the `my-app/` directory:

- `npm start` — Run the React app in development mode on port 3000.
- `npm run server` — Run the `json-server` API on port 3001 (watches `db.json`).

## API & Data

The backend is a [json-server](https://github.com/typicode/json-server)
instance reading from `my-app/db.json`. It exposes a single `photos` resource:

- `GET /photos` — list all photos
- `GET /photos?liked=true` — list liked photos (Favorites)
- `POST /photos` — add a photo
- `PATCH /photos/:id` — update a photo (e.g. toggle `liked`)
- `DELETE /photos/:id` — remove a photo

Each photo has the following shape:

```json
{
  "id": 1,
  "url": "https://example.com/photo.jpg",
  "liked": false
}
```

> **Note:** When you add a photo via file upload, the image is stored as a
> base64 data URL directly in `db.json`, which can make that file grow large.

## License

This project is licensed under the [MIT License](./LICENSE).
