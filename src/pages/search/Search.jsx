import { Header, Main, Footer } from "@components";

export function Search({ page }) {
    return (
        <>
            <Header page={page} />
            <Main page={page} />
            <Footer />
        </>
    );
}
