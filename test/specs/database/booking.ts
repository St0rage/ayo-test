import { db } from "../../utils/database";
import dayjs from "dayjs";

describe("Booking", () => {
  afterEach(async () => {
    await db.query("DELETE FROM bookings");
  });

  it("User Berhasil Melakukan Booking pada Satu Venue untuk Slot 09:00 - 11:00 - BOOK_001", async () => {
    const userId = 1;
    const venueId = 1;
    const startTime = "09:00";
    const endTime = "10:00";

    let result = await db.query(
      `INSERT INTO bookings (user_id, venue_id, booking_date, start_time, end_time) VALUES (${userId}, ${venueId}, '${dayjs().format("YYYY-MM-DD")}', '${startTime}', '${endTime}');`,
    );

    expect(result.rowCount).toBe(1);
  });

  it("User Berhasil Melakukan Booking pada Satu Venue untuk Dua Slot Berbeda (09:00 - 11:00 dan 13:00 - 15:00) - BOOK_002", async () => {
    const userId = 1;
    const venueId = 1;
    const startTime1 = "09:00";
    const startTime2 = "13:00";
    const endTime1 = "11:00";
    const endTime2 = "15:00";

    let result = await db.query(
      `INSERT INTO bookings (user_id, venue_id, booking_date, start_time, end_time) 
        VALUES 
        (${userId}, ${venueId}, '${dayjs().format("YYYY-MM-DD")}', '${startTime1}', '${endTime1}'), 
        (${userId}, ${venueId}, '${dayjs().format("YYYY-MM-DD")}', '${startTime2}', '${endTime2}');
    `,
    );

    expect(result.rowCount).toBe(2);
  });

  it("User Berhasil Melakukan Booking pada Dua Venue Berbeda untuk Slot 09:00 - 11:00 - BOOK_003", async () => {
    const userId = 1;
    const venueId1 = 1;
    const venueId2 = 2;
    const startTime = "09:00";
    const endTime = "10:00";

    let result = await db.query(
      `INSERT INTO bookings (user_id, venue_id, booking_date, start_time, end_time) 
        VALUES 
        (${userId}, ${venueId1}, '${dayjs().format("YYYY-MM-DD")}', '${startTime}', '${endTime}'), 
        (${userId}, ${venueId2}, '${dayjs().format("YYYY-MM-DD")}', '${startTime}', '${endTime}');
    `,
    );

    expect(result.rowCount).toBe(2);
  });

  it("User Gagal Melakukan Booking pada Venue yang Sama untuk Slot yang Sudah Dibooking (09:00 - 11:00) - BOOK_004", async () => {
    const userId = 1;
    const venueId = 1;
    const startTime = "09:00";
    const endTime = "10:00";

    let result = await db.query(
      `INSERT INTO bookings (user_id, venue_id, booking_date, start_time, end_time)
            VALUES
            (${userId}, ${venueId}, '${dayjs().format("YYYY-MM-DD")}', '${startTime}', '${endTime}');
        `,
    );

    let error: Error | undefined;

    try {
      await db.query(
        `INSERT INTO bookings (user_id, venue_id, booking_date, start_time, end_time)
            VALUES
            (${userId}, ${venueId}, '${dayjs().format("YYYY-MM-DD")}', '${startTime}', '${endTime}');
        `,
      );
    } catch (e) {
      error = e as Error;
    }

    expect(error).toBeDefined();

    result = await db.query(`SELECT * FROM bookings WHERE user_id = ${userId};`);

    expect(result.rows.length).toBe(1);
  });

  it("Dua User Berhasil Melakukan Booking pada Venue yang Sama dengan Slot Waktu Berbeda - BOOK_005", async () => {
    const userId1 = 1;
    const userId2 = 2;
    const venueId = 1;
    const startTime1 = "09:00";
    const startTime2 = "11:00";
    const endTime1 = "11:00";
    const endTime2 = "13:00";

    let result = await db.query(
      `INSERT INTO bookings (user_id, venue_id, booking_date, start_time, end_time) 
        VALUES 
        (${userId1}, ${venueId}, '${dayjs().format("YYYY-MM-DD")}', '${startTime1}', '${endTime1}'), 
        (${userId2}, ${venueId}, '${dayjs().format("YYYY-MM-DD")}', '${startTime2}', '${endTime2}');
    `,
    );

    expect(result.rowCount).toBe(2);
  });

  it("User Kedua Gagal Melakukan Booking pada Venue dan Slot Waktu yang Sudah Dibooking oleh User Lain - BOOK_006", async () => {
    const userId1 = 1;
    const userId2 = 2;
    const venueId = 1;
    const startTime = "09:00";
    const endTime = "10:00";

    let result = await db.query(
      `INSERT INTO bookings (user_id, venue_id, booking_date, start_time, end_time)
            VALUES
            (${userId1}, ${venueId}, '${dayjs().format("YYYY-MM-DD")}', '${startTime}', '${endTime}');
        `,
    );

    let error: Error | undefined;

    try {
      await db.query(
        `INSERT INTO bookings (user_id, venue_id, booking_date, start_time, end_time)
            VALUES
            (${userId2}, ${venueId}, '${dayjs().format("YYYY-MM-DD")}', '${startTime}', '${endTime}');
        `,
      );
    } catch (e) {
      error = e as Error;
    }

    expect(error).toBeDefined();

    result = await db.query(`SELECT * FROM bookings WHERE user_id = ${userId1};`);
    expect(result.rows.length).toBe(1);
    result = await db.query(`SELECT * FROM bookings WHERE user_id = ${userId2};`);
    expect(result.rows.length).toBe(0);
  });
});
