export const apiDoc = {
  LOGIN: {
    title: "Аутентификация в приложении",
    description: `Для аутентификации, отправте данные 
    пользователя этим запросом`
  },
  GET_WEATHER: {
    title: "Получение погоды для заданных координат",
    description: `Принимает географические координаты в градусах,
    и возвращает данные о погоде с сервиса OpenWeatherMap для 
    данной локации`
  },
  LOGOUT: {
    title: "Выход из приложеня",
    description: `Простой запрос который удаляет пользовательскую
    сессию в БД`
  },
  SIGNAL: {
    title: "Проверка на аутентификацию",
    description: `Проверка на наличие серверной сессии у пользователя`
  }
};
