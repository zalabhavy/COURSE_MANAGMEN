    FROM eclipse-temurin:17-jdk AS build

    WORKDIR /app
    
    # Copy all project files
    COPY . .
    
    # Build the application
    RUN ./mvnw clean package -DskipTests
    
    # -------- STAGE 2: Run the app --------
    FROM eclipse-temurin:17-jdk
    
    WORKDIR /app
    
    # Copy JAR from previous stage
    COPY --from=build /app/target/*.jar app.jar
    
    EXPOSE 8080
    
    ENTRYPOINT ["java", "-jar", "app.jar"]
    