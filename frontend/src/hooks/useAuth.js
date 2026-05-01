import API_URL from "../lib/api";
import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useAuth = () => {
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

  const loginMutation = useMutation({
    mutationFn: loginFn,
  });

  return {
    loginMutation,
  };
};

export { useAuth };
