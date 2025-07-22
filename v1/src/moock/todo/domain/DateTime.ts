export class DateTime{
  private readonly date: string;
  private readonly time: string;

  constructor(private readonly dateTime: string) {
    const date = new Date(dateTime);

    if (isNaN(date.getTime())) {
      throw new Error(`Invalid date string: ${dateTime}`);
    }

    this.date = date.toLocaleDateString('en-CA'); // ISO-like format YYYY-MM-DD
    this.time = date.toLocaleTimeString('en-US', { hour12: false }); // 24h format
  }

  getDate(): string {
    return this.date;
  }

  getTime(): string {
    return this.time;
  }

  toString(): string {
    return `${this.date} ${this.time}`;
  }
}