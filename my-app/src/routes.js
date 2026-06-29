import AboutPage from "./pages/AboutPage";
import FavoritesPage from "./pages/FavoritesPage";
import GalleryPage from "./pages/GalleryPage";
import ErrorPage from "./pages/ErrorPage";

const routes = [
	{
		path: "/",
		element: <GalleryPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/favorites",
		element: <FavoritesPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/about",
		element: <AboutPage />,
		errorElement: <ErrorPage />,
	},
];

export default routes;
