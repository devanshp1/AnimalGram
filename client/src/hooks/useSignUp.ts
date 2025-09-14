import axios from "axios";
import { SignUpValidationSchema } from "@/lib/validation";
import { z } from "zod";

type SignUpData = z.infer<typeof SignUpValidationSchema>;

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const useSignUp = () => {
  const signUp = async (data: SignUpData) => {
    const response = await api.post("/api/auth/signup", data);
    return response.data;
  };

  return { signUp };
};
