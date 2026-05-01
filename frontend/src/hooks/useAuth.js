import API_URL from "../lib/api";
import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const useAuth = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient(); //get access to the cache data

  // Functions
  const loginFn = async ({ email, password }) => {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      localStorage.setItem("token", data.token);
    } else {
      throw new Error(data.message || "Login failed");
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
  };

  const signUpFn = async ({ email, username, password, role }) => {
    const res = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
        role: role,
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Sign up failed");
    }
  };

  // Mutations
  const loginMutation = useMutation({
    mutationFn: loginFn,
    onSuccess: () => navigate("/"),
  });

  const signUpMutation = useMutation({
    mutationFn: signUpFn,
    onSuccess: () => navigate("/login"),
  });

  return {
    loginMutation,
    logOut,
    signUpMutation,
  };
};

export { useAuth };
