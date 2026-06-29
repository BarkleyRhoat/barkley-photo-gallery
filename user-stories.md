# Stories

## Feature 1 - Display Photo Gallery

User story: As a user, I want to see all my photos displayed in a carousel on the Gallery page so that I can brwose through them.

### Feature 1 Acceptance Criteria

- The gallery page is displayed at the route /
- Photos are fetched from the JSON server on page load
- Photos are displayed in a carousel format
- The carousel allows the user to navigate between photos

## Feature 2 - Add a photo

User story: As a user, I want to click an Add Photo button on the Gallery page and enter an image URL so that i can add a new photo to my gallery

### Feature 2 Acceptance Criteria

- An Add Photo button is visible on the Gallery page
- Clicking the button reveals an input form for an image URL
- Submitting the form posts the new photo to the JSON server
- The new photo appears in the galler carousel without a page refresh

## Feature 3 - Delete a Photo

User story: As a user, I want to click a delete button on a photo in the Gallery so that i can remove photos I no Longer want.

### Feature 3 Acceptance Criteria

- Each photo in the Gallery has a delete button
- Clicking Delete removes the photo from the JSON server
- The photo is removed from the carousel without a page refresh

## Feature 4 - Like a photo

User story: As a user, I want to click a like button on a photo in the Gallery so that it gets saved to my Favorites

### Feature 4 Acceptance Criteria

- Each photo in the Gallery has a like button
- Clickiing like updates the photos liked status in the JSON server
- Liked photos appear in the Favorites page carousel
- The like button is not present on the Favorites page

## Feature 5 - Unlike/Remove from Favorites

User story: As a user, I want to click an unlike button on a photo in the Favorites page so thtat i can remove it from the Favorites

### Feature 5 Acceptance Criteria

- Each photo in the Favorites carousel has an unlike button
- clicking unlike updates the photos liked status in the JSON server
- The photo is removed from the Favorites carousel without a page refresh

## Feature 6 - About Page

User story: As a user, I want to visit the About page so that I can learn who made the gallery and why

### Feature 6 Acceptance Criteria

- The About page is displayed at the /about route
- The page displays information about the creator and the purpose of the gallery
- The About page is accessible from the nav bar
