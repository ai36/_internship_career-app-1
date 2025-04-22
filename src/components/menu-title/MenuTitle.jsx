import styles from "./menuTitle.module.css";

export function MenuTitle({ active, children }) {
    return (
        <>
            <a className={styles.link} active={active} href="#">
                {children}
            </a>
        </>
    );
}
