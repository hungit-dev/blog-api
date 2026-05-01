import API_URL from "../lib/api";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoggedIn, setIsLoggedIn, isAuthor, setIsAuthor } =
    useContext(AuthContext);

  // Functions
  const getProfileFn = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setIsAuthor(data.user?.role === "AUTHOR");
    return data;
  };

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
      setIsLoggedIn(true);
      // get new profile data after every login
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    } else {
      throw new Error(data.message || "Login failed");
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsAuthor(false);
    navigate("/");
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

  // Queries
  const profile = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileFn,
    enabled: isLoggedIn,
  });

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
    isLoggedIn,
    isAuthor,
    signUpMutation,
  };
};

export { useAuth };
