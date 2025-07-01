export const ErrorMessage = ({ message = 'Что-то пошло не так ¯_(ツ)_/¯' }) => {
  return (
    <>
      <h1>Ой... Ошибка...</h1>
      <h3>{message}</h3>
    </>
  );
};
