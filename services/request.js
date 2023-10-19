// create requests for services.

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const makeRequest = (method, url, { query, body }) => {
  const config = {
    method,
    params: query,
    data: body,
  };
  return axios(config);
};
const makeRequestAuth = (method, url, { query, body }) => {
  const config = {
    method,
    params: query,
    data: body,
    headers: {
      Authorization: AsyncStorage.getItem("token"),
    },
  };
  return axios(config);
};

const User = {
  login: (body) =>
    makeRequest("post", `${process.env.SERVICE_PATH}/user/login`, { body }),
  signup: (body) =>
    makeRequest("post", `${process.env.SERVICE_PATH}/user/signup`, { body }),
  logout: () =>
    makeRequestAuth("post", `${process.env.SERVICE_PATH}/user/logout`, {}),
  get: (id) =>
    makeRequestAuth("get", `${process.env.SERVICE_PATH}/user/${id}`, {}),
  update: (id, body) =>
    makeRequestAuth("put", `${process.env.SERVICE_PATH}/user/${id}`, { body }),
  delete: (id) =>
    makeRequestAuth("delete", `${process.env.SERVICE_PATH}/user/${id}`, {}),
};

const Appointment = {
  create: (body) =>
    makeRequestAuth("post", `${process.env.SERVICE_PATH}/appointment`, {
      body,
    }),
  get: (id) =>
    makeRequestAuth("get", `${process.env.SERVICE_PATH}/appointment/${id}`, {}),
  search: (page, limit, date, title, status) =>
    makeRequestAuth("get", `${process.env.SERVICE_PATH}/appointment/search`, {
      page,
      limit,
      date,
      title,
      status,
    }),
  update: (id, body) =>
    makeRequestAuth("put", `${process.env.SERVICE_PATH}/appointment/${id}`, {
      body,
    }),
  delete: (id) =>
    makeRequestAuth(
      "delete",
      `${process.env.SERVICE_PATH}/appointment/${id}`,
      {}
    ),
  join: (appointmentId) =>
    makeRequestAuth(
      "post",
      `${process.env.SERVICE_PATH}/appointment/join/${appointmentId}`
    ),
};
export default { User, Appointment };
