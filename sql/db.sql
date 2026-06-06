-- Create Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create Venues Table
CREATE TABLE venues (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create Bookings Table
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,

    user_id INTEGER NOT NULL,
    venue_id INTEGER NOT NULL,

    booking_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,

    CONSTRAINT fk_booking_user
        FOREIGN KEY (user_id)
        REFERENCES users(id),

    CONSTRAINT fk_booking_venue
        FOREIGN KEY (venue_id)
        REFERENCES venues(id),

    CONSTRAINT uq_booking_slot
        UNIQUE (
            venue_id,
            booking_date,
            start_time
        )
);

-- Seed Venues
INSERT INTO venues (name)
VALUES
    ('Basketball Court'),
    ('Futsal Field'),
    ('Padel Court');

-- Seed Users
INSERT INTO users (name)
VALUES
    ('Dani'),
    ('John'),
    ('Jane');

-- Sample Bookings
--INSERT INTO bookings (
--    user_id,
--    venue_id,
--    booking_date,
--    start_time,
--    end_time
--)
--VALUES
--    (1, 1, '2026-06-06', '09:00', '10:00');
--    (1, 1, '2026-06-07', '09:00', '10:00');
