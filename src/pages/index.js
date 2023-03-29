import LoginForm from "../components/LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { isAuthenticated } from "../redux/actions/auth";
import AddEventForm from "@/components/AddEventForm";
import { useEffect } from "react";
import { Loading } from "@/components/Loading";

export default function Home() {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isAuthenticated());
  }, [dispatch]);
  return (
    <div className="flex items-center justify-center h-screen">
      {authState?.loading ? (
        <Loading />
      ) : (
        <>
          <div className="w-1/4">
            {authState?.user ? <AddEventForm /> : <LoginForm />}
          </div>
          {authState?.error ? (
            <div className="text-sm text-rose-600">{authState.error}</div>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}
