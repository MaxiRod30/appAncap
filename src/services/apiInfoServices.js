import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../databases/realtimeDataBase";

export const apiInfo = createApi({
    reducerPath: "apiInfo",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ["profileImageGet", "notificationGet"],
    endpoints: (builder) => ({
        getProfileimage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
            providesTags: ["profileImageGet"],
        }),
        postProfileImage: builder.mutation({
            query: ({ image, localId }) => ({
                url: `profileImages/${localId}.json`,
                method: "PUT",
                body: {
                    image: image,
                },
            }),
            invalidatesTags: ["profileImageGet"],
        }),
        postNotificationPrimerTurno: builder.mutation({
            query: ({ alarm, localId }) => ({
                url: `notifications/1/${localId}.json`,
                method: "PUT",
                body: {
                    primerTurno: alarm,
                },
            }),
            invalidatesTags: ["notificationGet"],
        }),
        postNotificationSegundoTurno: builder.mutation({
            query: ({ alarm, localId }) => ({
                url: `notifications/2/${localId}.json`,
                method: "PUT",
                body: {
                    segundoTurno: alarm,
                },
            }),
            invalidatesTags: ["notificationGet"],
        }),
        postNotificationTercerTurno: builder.mutation({
            query: ({ alarm, localId }) => ({
                url: `notifications/3/${localId}.json`,
                method: "PUT",
                body: {
                    tercerTurno: alarm,
                },
            }),
            invalidatesTags: ["notificationGet"],
        }),
        getNotificationPrimerTurno: builder.query({
            query: (localId) => `notifications/1/${localId}.json`,
            providesTags: ["notificationGet"],
        }),
        getNotificationSegundoTurno: builder.query({
            query: (localId) => `notifications/2/${localId}.json`,
            providesTags: ["notificationGet"],
        }),
        getNotificationTercerTurno: builder.query({
            query: (localId) => `notifications/3/${localId}.json`,
            providesTags: ["notificationGet"],
        })
    }),
});


export const {
    useGetProfileimageQuery,
    usePostProfileImageMutation,
    usePostNotificationPrimerTurnoMutation,
    usePostNotificationSegundoTurnoMutation,
    usePostNotificationTercerTurnoMutation,
    useGetNotificationPrimerTurnoQuery,
    useGetNotificationSegundoTurnoQuery,
    useGetNotificationTercerTurnoQuery,
} = apiInfo;
