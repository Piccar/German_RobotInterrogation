# Stage 1: Build
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build

# Install Node.js 12.x (Debian-based)
RUN curl -fsSL https://deb.nodesource.com/setup_12.x | bash - && \
    apt-get update && \
    apt-get install -y nodejs && \
    node -v && npm -v

WORKDIR /app

# Copy project files
COPY . .

# Restore NuGet packages
RUN dotnet restore

# Publish the backend
RUN dotnet publish -c Release -o /out

# Stage 2: Runtime image
FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS runtime
WORKDIR /app
COPY --from=build /out ./

# Set ASP.NET Core environment (optional)
#ENV ASPNETCORE_ENVIRONMENT=Production
#ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=false
ENV ASPNETCORE_URLS=http://+:8080

# Expose HTTP port (adjust if needed)
EXPOSE 8080

ENTRYPOINT ["dotnet", "RobotInterrogation.dll"]
