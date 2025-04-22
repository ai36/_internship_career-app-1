import { Header } from "@components/header/Header";
import { Main } from "@components/main/Main";
import { Footer } from "@components/footer/Footer";

export function Search({ page }) {
    return (
        <>
            <Header page={page} />
            <Main page={page} />
            <Footer />
        </>
    );
}
