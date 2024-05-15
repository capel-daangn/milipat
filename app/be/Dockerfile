FROM openjdk:17-alpine
ARG JAR_FILE=/build/libs/be-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} /be.jar
ENTRYPOINT ["java","-jar","-Dspring.profiles.active=prod", "/be.jar"]