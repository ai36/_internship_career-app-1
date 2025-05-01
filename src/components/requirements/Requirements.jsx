import { Icon } from "@components";
import styles from "./requirements.module.css";

export function Requirements({ iconName, text, size = "small" }) {
    const sizes = {
        smail: 12,
    };

    return (
        <figure className={styles.requirements}>
            <Icon iconName={iconName} width={sizes[size]} height={sizes[size]} />
            <figcaption className={styles.text}>{text}</figcaption>
        </figure>
    );
}
