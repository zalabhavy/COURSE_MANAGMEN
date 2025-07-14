    FROM eclipse-temurin:17-jdk AS build

    RUN apt-get update && apt-get install -y maven
    
    WORKDIR /app
    
    COPY CURD_API/ ./CURD_API/
    
    WORKDIR /app/CURD_API
    
    RUN mvn clean package -DskipTests
    
    FROM eclipse-temurin:17-jdk
    
    WORKDIR /app
    
    COPY --from=build /app/CURD_API/target/*.jar app.jar
    
    EXPOSE 8089
    
    ENTRYPOINT ["java", "-jar", "app.jar"]
    