    FROM eclipse-temurin:17-jdk AS build

    # Install Maven
    RUN apt-get update && apt-get install -y maven
    
    WORKDIR /app
    
    # Copy all project files
    COPY . .
    
    # Build the application
    RUN mvn clean package -DskipTests
    
    # -------- STAGE 2: Run the app --------
    FROM eclipse-temurin:17-jdk
    
    WORKDIR /app
    
    # Copy JAR from previous stage
    COPY --from=build /app/target/*.jar app.jar
    
    EXPOSE 8080
    
    ENTRYPOINT ["java", "-jar", "app.jar"]
    