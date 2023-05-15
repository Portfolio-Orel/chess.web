import { useSelector, useDispatch } from "react-redux";
import { isAuthenticated } from "@/redux/actions/auth";
import { handleFetchGames, handleClearGames } from "@/redux/actions/games";
import {
  handleFetchGameFormats,
  handleClearGameFormats,
} from "@/redux/actions/gameFormats";
import { handleFetchEvents, handleClearEvents } from "@/redux/actions/event";
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
      dispatch(handleFetchGames());
      dispatch(handleFetchGameFormats());
      dispatch(handleFetchEvents());
      router.push(Screens.MAIN);
    } else {
      dispatch(handleClearGames());
      dispatch(handleClearGameFormats());
      dispatch(handleClearEvents());
      router.push(Screens.LOGIN);
    }
  }, [authState, dispatch]);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Loading />
    </div>
  );
}
