# Use Eclipse Temurin OpenJDK base image
FROM eclipse-temurin:17-jdk

# Set working directory inside container
WORKDIR /app

# Copy the built jar file into the container
COPY target/CURD_API-0.0.1-SNAPSHOT.jar app.jar

# Expose the port your Spring Boot app runs on
EXPOSE 8089

# Command to run the app
ENTRYPOINT ["java", "-jar", "app.jar"]
