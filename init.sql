GRANT ALL PRIVILEGES ON DATABASE partner_finder TO evaaldo;

\connect partner_finder;

CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE IF NOT EXISTS partner (
    id SERIAL PRIMARY KEY,
    trading_name VARCHAR(255),
    owner_name VARCHAR(255),
    document VARCHAR(50),
    coverage_area GEOMETRY(MULTIPOLYGON, 4326),
    address GEOMETRY(POINT, 4326)
);