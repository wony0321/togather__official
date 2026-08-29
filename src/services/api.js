import axios from "axios";
import useAuthStore from "@/store/authStore";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080/api",
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      useAuthStore.getState().logout();
      window.location.href = "/admin/login";
    }
    return Promise.reject(err);
  }
);

export const inquiryApi = {
  submit: (data) => api.post("/inquiries", data),
  getAll: () => api.get("/inquiries"),
  updateStatus: (id, status) => api.patch(`/inquiries/${id}/status`, { status }),
};

export const authApi = {
  login: (credentials) => api.post("/auth/login", credentials),
};

export const clientApi = {
  getAll: () => api.get("/clients"),
  getById: (id) => api.get(`/clients/${id}`),
};

export const teamApi = {
  getAll: () => api.get("/team"),
  create: (data) => api.post("/team", data),
  update: (id, data) => api.put(`/team/${id}`, data),
  delete: (id) => api.delete(`/team/${id}`),
};

export default api;
