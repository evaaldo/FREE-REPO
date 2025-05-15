# Etapa 1: Build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

COPY API.PARTNER.FINDER.sln .
COPY API.PARTNER.FINDER/API.PARTNER.FINDER.csproj ./API.PARTNER.FINDER/

RUN dotnet restore

COPY . .
# Stage 2: Publish
WORKDIR /app/API.PARTNER.FINDER
RUN dotnet publish -c Release -o /app/out
# Stage 3: Run
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

COPY --from=build /app/out .
EXPOSE 8080

ENTRYPOINT [ "dotnet", "API.PARTNER.FINDER.dll" ]