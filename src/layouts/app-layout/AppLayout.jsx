import { Search, Favorites } from "@pages";

export function AppLayout({ page = "search"}) {
    const pages = {
        "search": <Search page={page} />,
        "favorites": <Favorites page={page} />
    }

    return pages[page];
}
