const getData = async (url) => {
  // проверяем ответ сервера
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  } else {
    throw `Ошибка товарищ, ${response.status}`;
  }
};

export default getData;
