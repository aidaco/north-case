export type SavingsDashboardData = {
  overview: {
    totalSavings: number;
    currentMonthSavings: number;
    percentageChange: number;
  };
  savingsTrends: { month: string; savings: number }[];
  savingsByCategory: { service: string; savings: number }[];
  detailedSavings: { date: string; service: string; amount: number }[];
};

const ENDPOINT_URL = "https://north-case-api.vercel.app/api"

export async function fetchSavingsDashboardData(api_key: string): Promise<
  SavingsDashboardData
> {
  let response = await fetch(ENDPOINT_URL, {headers: {"Authorization": api_key}})
  if (!response.ok) {
    throw Error(`The upstream API returned an error: ${response.body}`)
  }
  return await response.json()
}

// export async function fetchSavingsDashboardData(api_key: string): Promise<
//   SavingsDashboardData
// > {
//   return SAMPLE_DATA;
// }

const SAMPLE_DATA: SavingsDashboardData = {
  "overview": {
    "totalSavings": 1200.50,
    "currentMonthSavings": 200.75,
    "percentageChange": 15.5,
  },
  "savingsTrends": [
    { "month": "January", "savings": 150.00 },
    { "month": "February", "savings": 175.00 },
    { "month": "March", "savings": 200.00 },
    { "month": "April", "savings": 225.00 },
    { "month": "May", "savings": 250.00 },
    { "month": "June", "savings": 200.75 },
  ],
  "savingsByCategory": [
    { "service": "EC2", "savings": 500.00 },
    { "service": "S3", "savings": 300.00 },
    { "service": "RDS", "savings": 250.00 },
    { "service": "Lambda", "savings": 150.00 },
  ],
  "detailedSavings": [
    { "date": "2025-06-01", "service": "EC2", "amount": 50.00 },
    { "date": "2025-06-02", "service": "S3", "amount": 30.00 },
    { "date": "2025-06-03", "service": "RDS", "amount": 25.00 },
    { "date": "2025-06-04", "service": "Lambda", "amount": 15.00 },
    { "date": "2025-06-05", "service": "EC2", "amount": 60.00 },
    { "date": "2025-06-06", "service": "S3", "amount": 40.00 },
  ],
};
