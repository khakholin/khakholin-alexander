## Установка

```bash
$ npm install
```

## Запуск приложения

```bash
# development
$ npm run start
```

## Упаковка в Docker

```bash
# build
# метка для докер образа выставляется на свое усмотрение 
$ docker build -t khakholin-alexander:1.0 .
```

```bash
# tag
$ docker tag khakholin-alexander:1.0 khakholin/khakholin-alexander:1.0
```

```bash
# push
$ docker push khakholin/khakholin-alexander:1.0
```

## Создание и запуск докер контейнера с проектом

```bash
# просмотр запущенных контейнеров 
$ docker pull khakholin/khakholin-alexander:1.0
```

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
$ docker run --name khakholin-alexander-front -d --restart=always -p 80:80 khakholin/khakholin-alexander:1.0
```