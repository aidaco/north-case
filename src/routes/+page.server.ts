import * as api from "$lib/northCaseAPI";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }: any) => {
  return {
    savings: await api.fetchSavingsDashboardData(),
  };
};
