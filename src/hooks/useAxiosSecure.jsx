import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/userSlice";

const axiosSecure = axios.create({
  baseURL: "http://localhost:8000",
});

const useAxiosSecure = () => {
  const dispatch = useDispatch();
  dispatch(logoutUser);

  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logoutUser();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;
