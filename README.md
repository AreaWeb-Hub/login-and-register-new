# Регистрация и авторизация на PHP

#### HTML шаблон находится в ветке [layout](https://github.com/AreaWeb-Hub/login-and-register-new/tree/layout)

### База данных

В текущем проекте уже существует готовый SQL для создания таблицы `users`. Создайте
базу данных и импортируйте в неё файл `db/users.sql`

### Конфигурация

В конфигурационном файле `src/config.php` вы можете настроить подключение к базе данных.

- `DB_HOST` - хост, по которому доступна база данных
- `DB_PORT` - порт базы данных
- `DB_NAME` - название базы данных
- `DB_USERNAME` - логин пользователя для управления базой
- `DB_PASSWORD` - пароль

### Запуск

Вы можете использовать любой локальный сервер для разработки:

- [OpenServer](https://ospanel.io/)
- [XAMPP](https://www.apachefriends.org/)
- [Laragon](https://www.mamp.info/)
- [Mamp](https://laragon.org/)

Примечание: для работы сайта необходима версия PHP 8.0+

Также для текущего проекта подготовлена готовая [Docker](https://www.docker.com/) инфраструктура, которая позволит легко запустить приложение. 
Достаточно выполнить команду:

```shell
docker-compose up -d
```

- http://localhost:5000 - сайт
- http://localhost:5001 - PhpMyAdmin

Доступ в PhpMyAdmin:

- логин - `root`
- пароль - `password`

В `src/config.php`:

```php
<?php

const DB_HOST = 'db';
const DB_PORT = '3306';
const DB_NAME = '<название базы данных>';
const DB_USERNAME = 'root';
const DB_PASSWORD = 'password';
```

Если возникнет ошибка `Permission denied for mkdir()`, то введите команду:

```shell
sudo chmod 777 src/helpers.php
```

### CSS фреймворк

В качестве CSS фреймворка используется [picocss](https://picocss.com/). 
Вы можете применить темную или светлую тему изменив атрибут `data-theme` у тега `<html>`.

```html
<!-- светлая -->
<html data-theme="light">
<!-- темная -->
<html data-theme="dark">
```

### Изображения

![Регистрация](https://i.imgur.com/7i1S9Pn.png)
![Вход](https://i.imgur.com/6UKc4Lu.png)
![Домашняя страница](https://i.imgur.com/sNrwTxE.png)