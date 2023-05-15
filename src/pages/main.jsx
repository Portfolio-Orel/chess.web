import React, { useEffect } from "react";
import AddEventForm from "@/components/AddEventForm";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import EventsTable from "@/components/EventsTable";

const data = [
  {
    date: "2023-05-14",
    name: "Event A",
    description: "Lorem ipsum dolor sit amet",
    price: 9.99,
    round_numbers: 4,
    game_format: "Chess",
    is_rating_israel: true,
    is_rating_fide: false,
    game: "Chess Game 1",
  },
  {
    date: "2023-05-15",
    name: "Event B",
    description: "Consectetur adipiscing elit",
    price: 19.99,
    round_numbers: 6,
    game_format: "Checkers",
    is_rating_israel: false,
    is_rating_fide: true,
    game: "Checkers Game 1",
  },
  {
    date: "2023-05-16",
    name: "Event C",
    description: "Sed do eiusmod tempor incididunt",
    price: 14.99,
    round_numbers: 5,
    game_format: "Chess",
    is_rating_israel: true,
    is_rating_fide: true,
    game: "Chess Game 2",
  },
];

const Main = () => {
  const router = useRouter();
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    if (!authState?.user) {
      router.push("/login");
    }
  }, [authState]);

  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-10/12">
        <EventsTable data={data} />
      </div>
      <AddEventForm />
    </div>
  );
};

export default Main;
