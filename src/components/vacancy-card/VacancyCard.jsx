import { Icon } from "@components";
import { createSalaryString } from "@utils";
import styles from "./vacancyCard.module.css";

export function VacancyCard({
    title = "Junior Frontend-разработчик",
    salaryMin = 35000,
    salaryMax = 50000,
    company = "Интернет Люди",
    city = "Москва",
    fits = [{ "experience": "Опыт от 1 года до 3 лет" }],
}) {
    return (
        <article className={styles.box}>
            <button className={styles.button} type="button">
                <Icon iconName="eyeSlashSolid" width={16} />
            </button>
            <div className={styles.head}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.salaryRange}>
                    {createSalaryString(salaryMin, null, navigator.language || "ru-RU")}
                </p>
            </div>
            <div className={styles.body}>
                <div className={styles.desc}>
                    <p className={styles.company}>{company}</p>
                    <p className={styles.city}>{city}</p>
                </div>
                <ul className={styles.fits}>
                    {fits.map((item, index) => (
                        <li className={styles.fitsItem} key={index}>
                            <Icon iconName={Object.keys(item)[0]}/>
                            {Object.values(item)[0]}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}
