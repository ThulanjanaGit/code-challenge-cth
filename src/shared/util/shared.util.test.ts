import { calculateTimeLeft } from "./shared.util";

describe("calculateTimeLeft", () => {
  it("should return 0 for all values if date is in the past", () => {
    const pastDate = new Date(Date.now() - 10000).toISOString(); // 10 seconds ago
    const result = calculateTimeLeft(pastDate);

    expect(result).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it("should return correct time left for a future date (1 day ahead)", () => {
    const futureDate = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(); // 1 day ahead
    const result = calculateTimeLeft(futureDate);

    expect(result.days).toBe(1);
    expect(result.hours).toBeLessThanOrEqual(0);
    expect(result.minutes).toBeLessThanOrEqual(59);
    expect(result.seconds).toBeLessThanOrEqual(59);
  });

  it("should return correct time left for a few seconds in the future", () => {
    const futureDate = new Date(Date.now() + 5000).toISOString(); // 5 seconds ahead
    const result = calculateTimeLeft(futureDate);

    expect(result.days).toBe(0);
    expect(result.hours).toBe(0);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBeGreaterThanOrEqual(4); // allow slight delay
  });

  it("should return full values for exactly 2 hours from now", () => {
    const futureDate = new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(); // 2 hours ahead
    const result = calculateTimeLeft(futureDate);

    expect(result.days).toBe(0);
    expect(result.hours).toBe(2);
    expect(result.minutes).toBeLessThanOrEqual(0);
    expect(result.seconds).toBeLessThanOrEqual(59);
  });
});
