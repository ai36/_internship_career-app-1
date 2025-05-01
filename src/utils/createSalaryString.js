const currencySymbols = {
    "ru-RU": "₽",
    "en-US": "$",
    "de-DE": "€",
};

export function createSalaryString(salaryMin, salaryMax = null, locale = "ru-RU") {
    const formatterNumber = new Intl.NumberFormat(locale, { style: "decimal", useGrouping: true });
    const symbol = currencySymbols[locale] || "₽";

    return salaryMax
        ? [formatterNumber.format(Number(salaryMin)), "-", formatterNumber.format(Number(salaryMax)), symbol].join(" ")
        : ["от", formatterNumber.format(Number(salaryMin)), symbol].join(" ");
}
