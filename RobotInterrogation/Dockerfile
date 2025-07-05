# Stage 1: Build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Install Node.js 20.x (Debian-based)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get update && \
    apt-get install -y nodejs && \
    node -v && npm -v

WORKDIR /app

# Copy project files
COPY . .

# Restore NuGet packages
RUN dotnet restore

# Publish the backend
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN dotnet publish -c Release -o /out

# Stage 2: Runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /out ./

# Set ASP.NET Core environment (optional)
#ENV ASPNETCORE_ENVIRONMENT=Production
#ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=false
ENV ASPNETCORE_URLS=http://+:8080

# Expose HTTP port (adjust if needed)
EXPOSE 8080

ENTRYPOINT ["dotnet", "RobotInterrogation.dll"]
