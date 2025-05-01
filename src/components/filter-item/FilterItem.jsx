import { Icon } from "@components";
import styles from "./filterItem.module.css";

export function FilterItem({ itemType = "input", iconName = "location", text = "Город" }) {
    return (
        <fieldset className={styles.box}>
            <div className={styles.pic}>
                <Icon iconName={iconName} />
            </div>
            {itemType !== "input" && (
                <>
                    <div className={styles.secondPic}>
                        <Icon iconName={"chevron"} />
                    </div>
                    <details className={styles.details}>
                        <summary className={styles.summary}>{text}</summary>
                        <ul className={styles.optionList}>
                            <li className={styles.optionItem}>Полная занятость</li>
                            <li className={styles.optionItem}>Частичная занятость</li>
                            <li className={styles.optionItem}>В офисе</li>
                            <li className={styles.optionItem}>Гибрид</li>
                            <li className={styles.optionItem}>Удаленно</li>
                        </ul>
                    </details>
                </>
            )}
            {itemType === "input" && <input className={styles.input} placeholder={text} />}
        </fieldset>
    );
}
