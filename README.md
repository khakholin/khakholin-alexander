## Установка

```bash
$ npm install
```

## Запуск приложения

```bash
# development
$ export "API_URL"="<адресс_бэкэнда>"
$ npm run start
```

## Упаковка в Docker

```bash
# build
# метка для докер образа выставляется на свое усмотрение 
$ docker build -t khakholin-alexander:1.0 .
```

## Создание и запуск докер контейнера с проектом

```bash
# просмотр запущенных контейнеров 
$ docker ps
```

```bash
# просмотр всех контейнеров
$ docker ps -a
```

```bash
# остановить контейнер
$ docker stop <имя_контейнера>
```

```bash
# удалить контейнер
$ docker rm <имя_контейнера>
```

```bash
$ docker run --name khakholin-alexander-front -d --restart=always -p 9000:80 khakholin-alexander:1.0
```

Пример: <br>
<адресс_бэкэнда> = 'http://192.168.1.83:8081' <br>
<имя_контейнера> = interview-tool-front