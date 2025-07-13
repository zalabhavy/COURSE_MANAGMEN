    FROM eclipse-temurin:17-jdk AS build

    # Install Maven
    RUN apt-get update && apt-get install -y maven
    
    # Create app directory
    WORKDIR /app
    
    # Copy everything into the image
    COPY . .
    
    # Build the app
    RUN mvn clean package -DskipTests
    
    FROM eclipse-temurin:17-jdk
    
    WORKDIR /app
    
    # Copy only the JAR from build stage
    COPY --from=build /app/target/*.jar app.jar
    
    # Expose the port your app runs on
    EXPOSE 8089
    
    # Run the app
    ENTRYPOINT ["java", "-jar", "app.jar"]
    