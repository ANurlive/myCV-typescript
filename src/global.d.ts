//Это скажет TypeScript, что при импорте файлов с расширением .module.css
// он может ожидать объект с ключами-строками и значениями-строками (классы CSS).
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
