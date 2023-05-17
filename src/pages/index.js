import { useSelector, useDispatch } from "react-redux";
import { isAuthenticated } from "@/redux/actions/auth";
import { useEffect } from "react";
import { Loading } from "@/components/Loading";
import { useRouter } from "next/router";
import Screens from "../../constants/screens";

export default function Home() {
  const router = useRouter();
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isAuthenticated());
  }, [dispatch]);

  useEffect(() => {
    if (authState.user) {
      router.push(Screens.MAIN);
    } else {
      router.push(Screens.LOGIN);
    }
  }, [authState, dispatch]);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Loading />
    </div>
  );
}
