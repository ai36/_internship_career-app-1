// Команда для быстрого создания компонента
//
// По умолчанию компонент создается в 'src/components' (редактировать в generalPath)
// Команда создаст папку, jsx и module.css с шаблонным кодом внутри
// Шаблонный код можно редактировать в объекте templates
// Папка компонента и его файлы будут автоматически с большой буквы
// По умолчанию расширение .jsx, но его можно прописать явно
//
// Примеры команд:
// npm run CC Header
// npm run CC card.jsx
// npm run CC UI/checkbox.tsx

const fs = require("fs");
const path = require("path");
const minimist = require("minimist");

const toCapitalize = (text) => text.replace(/./, (u) => u.toUpperCase());

const argumentsObject = minimist(process.argv);
const generalPath = [__dirname, "..", "src/components"];
const stockPath = argumentsObject.path.split(".");
const folders = stockPath[0].split("/");
const componentPath = [...generalPath, ...folders];
const componentName = toCapitalize(folders[folders.length - 1]);
const extention = stockPath[1] ?? "jsx";

const templates = {
  jsx: `import styles from './${componentName}.module.css';

export default function ${componentName}() {
  return (
    <div className={styles.container}></div>
  );
};`,
  css: `.container {

}`,
};

// Создаем указанные папки
const currentArray = [];
folders.forEach((element, index) => {
  index + 1 === folders.length
    ? currentArray.push(toCapitalize(element))
    : currentArray.push(element);
  const currentResolvePath = path.resolve(...generalPath, ...currentArray);
  !fs.existsSync(currentResolvePath) && fs.mkdirSync(currentResolvePath);
});

// Создаем файлы и записываем в них шаблон
fs.writeFileSync(
  path.resolve(...componentPath, `${componentName}.${extention}`),
  templates.jsx
);
fs.writeFileSync(
  path.resolve(...componentPath, `${componentName}.module.css`),
  templates.css
);
