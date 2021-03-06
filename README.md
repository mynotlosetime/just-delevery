## Описание

В тестовом задании используется фреймворк Nest на сервере. React.js, Redux, Redux-saga на клиенте.
Для отображения карт и геокодинга используется Yandex Maps, для получения погоды Open Weather Map.

## Установка

1.  Установить Node.js
2.  Для запуска сервeра: в корневой папке выполнить команды
    <code>npm i</code>, затем <code>npm start</code>.
3.  Для запуска клиента: в папке front-end выполнить команды
    <code>npm i</code>, затем <code>npm start</code>.
4.  После запуска клиета приложение будет доступно через браузер по адресу http://localhost:8888/

## Тесты

Для тестирования клиента и сервера используется Jest.
Разработаны unit тесты отдельных компонентов и end2end тесты серверного api.

1.  Для запуска тестов сервeра: в корневой папке выполнить команду <code>npm run test</code>
2.  Для запуска тестов клиента: в папке front-end выполнить команду <code>npm run test</code>

## Документация

1.  Внешний API. Разработана документация для серверных точек входа, на основе Swagger. Документация доступна (при запущеном сервере) через браузер по адресу http://localhost:3000/doc/#/.

2.  Программный API. Разработана на tsdoc. Для генерации документации выполнить <code>npm run doc:generate</code>. Для просмотра открыть сгенерированную папку <code>./doc</code> файл index.html.

## Доп информация

Создано 2 тестовых пользователя.

1.  Логин: alice@mail.com Пароль: 123
2.  Логин: bob@mail.com Пароль: 321

Все действия пользователей логируются в папку <code>./logs</code>.

Приложение поддерживает как выбор локации для определения погоды как кликом на карте, так и вводом в текстовое поле.
