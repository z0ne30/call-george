import { CalAPIClient } from '@calcom/api-client';

export class CalendarService {
  private client: CalAPIClient;

  constructor() {
    this.client = new CalAPIClient({
      apiKey: process.env.CAL_API_KEY!,
    });
  }

  async scheduleInspection({
    date,
    customerName,
    customerEmail,
    propertyAddress,
    propertyType,
    squareFootage,
  }: {
    date: Date;
    customerName: string;
    customerEmail: string;
    propertyAddress: string;
    propertyType: string;
    squareFootage: number;
  }) {
    try {
      const booking = await this.client.createBooking({
        eventTypeId: 1, // Update with your event type ID
        start: date,
        end: new Date(date.getTime() + 2 * 60 * 60 * 1000), // 2 hour duration
        name: customerName,
        email: customerEmail,
        customInputs: {
          propertyAddress,
          propertyType,
          squareFootage: squareFootage.toString(),
        },
      });

      return booking;
    } catch (error) {
      console.error('Failed to schedule inspection:', error);
      throw error;
    }
  }
}