    FROM eclipse-temurin:17-jdk AS build

    # Install Maven
    RUN apt-get update && apt-get install -y maven
    
    # Set working directory
    WORKDIR /app
    
    # Copy all files into the image
    COPY . .
    
    # Build the Spring Boot project
    RUN mvn clean package -DskipTests
    
    FROM eclipse-temurin:17-jdk
    
    # Set working directory
    WORKDIR /app
    
    # Copy the jar from the build stage
    COPY --from=build /app/target/*.jar app.jar
    
    # Expose the port your app runs on
    EXPOSE 8080
    
    # Run the jar
    ENTRYPOINT ["java", "-jar", "app.jar"]
    