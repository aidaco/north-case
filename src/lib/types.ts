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
