// In production, VITE_API_URL points to the Render backend URL.
// In development, the Vite proxy handles /api → localhost:5000.
export const API_URL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api`
  : "/api";
