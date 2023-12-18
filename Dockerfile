FROM --platform=linux/amd64 openjdk:21
LABEL maintainer="team.cinefish"
EXPOSE 8080
ADD backend/target/cinefish.jar cinefish.jar
CMD [ "sh", "-c", "java -jar /cinefish.jar" ]