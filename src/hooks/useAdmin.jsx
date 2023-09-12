import { useSelector } from "react-redux";
import useAuth from "./useAuth.jsx";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const user = useSelector((state) => state.data.user.user);
  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["admin", user?.email],
    enabled:
      !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
