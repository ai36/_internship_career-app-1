import { Search } from "@pages/Search";
import { Favorites } from "@pages/Favorites";

export function AppLayout({ page = "search"}) {
    const pages = {
        "search": <Search page={page} />,
        "favorites": <Favorites page={page} />
    }

    return pages[page];
}
