import * as api from "$lib/server/northCaseAPI";
import type { PageServerLoad } from "./$types";
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async ({ params }: any) => {
  let api_key = env.NORTH_CASE_API_KEY
  if (api_key === undefined) {
    throw Error("Must set NORTH_CASE_API_KEY environment variable.")
  }
  return {
    savings: await api.fetchSavingsDashboardData(api_key),
  };
};
