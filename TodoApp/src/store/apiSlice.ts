/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery, type BaseQueryApi } from "@reduxjs/toolkit/query/react";
import { environmentConfig } from "../config";

export const ApiServiceValues = [
  'general',
] as const

export type ApiServices = (typeof ApiServiceValues)[number]

const makeBaseQuery = (port: number) => {
  return fetchBaseQuery({
    baseUrl: `${environmentConfig.defaultApiRoot ?? ''}:${port}/api/v1`,
    credentials: 'include',
  });
}

const baseQuery = makeBaseQuery(environmentConfig.apiPort)


const selectiveBaseQuery = (args: any, api: BaseQueryApi, extraOptions: any) => {
  return baseQuery(args, api, extraOptions)
};


export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: selectiveBaseQuery,
  refetchOnReconnect: true,
  endpoints: () => ({

  }),
  tagTypes: ['todo-list'],
});
