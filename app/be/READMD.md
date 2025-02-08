# Profile

# local

docker for redis

```sh
docker volume create redis_data

docker run -d --name redis-container \
-v redis_data:/data \
-p 6379:6379 \
redis:latest \
--save 60 1 --appendonly yes \
--requirepass "localconnection0104"
```

docker for mongo

```sh
docker volume create mongo_data

docker run --name mongo-container \
-p 27017:27017 \
-v mongo_data:/etc/mongo \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=localconnection0104 \
-d mongo
```

docker for mysql

```sh
docker volume create mysql_data

docker run \
--name mysql-container \
 -p 3306:3306 \
 -e MYSQL_ROOT_PASSWORD=localconnection0104 \
 -v mysql_data:/var/lib/mysql \
 -d mysql
```

