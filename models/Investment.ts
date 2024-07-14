export interface Investment {
    id?: string;
    userId: string;
    amount: number;
    description: string;
    date: Date;
    type: string; // e.g., "stocks", "bonds", etc.
  }