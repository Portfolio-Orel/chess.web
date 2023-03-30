import React from "react";
import { useSelector } from "react-redux";
import FormField from "./FormField";
import PropTypes from "prop-types";
import FormFieldTextarea from "./FormFieldTextArea";
import Dropdown from "../Dropdown";

const EventBaseDetails = () => {
  const isLoadingDropdown = useSelector(
    (state) => state?.games?.loading || state.gameFormats.loading
  );
  const games = useSelector((state) => state?.games?.games);
  const gameFormats = useSelector((state) => state?.gameFormats?.gameFormats);

  const buildGamesItems = () => {
    const gamesItems = games?.map((game) => {
      return {
        id: game.id,
        value: game.type,
      };
    });
    return gamesItems ?? [];
  };

  const buildGamesFormatesItems = () => {
    const gameFormatsItems = gameFormats?.map((gameFormat) => {
      return {
        id: gameFormat.id,
        value: gameFormat.name,
      };
    });
    return gameFormatsItems ?? [];
  };

  return (
    <>
      <FormField label="Name" name="name" type="text" />
      <FormFieldTextarea label="Description" name="description" />
      <FormField label="Price" name="price" type="number" />
      <FormField label="Event Type" name="event_type" type="text" />
      <FormField label="Event Format" name="event_format" type="text" />
      <div className="flex flex-col justify-start items-start">
        <FormField
          label="Is Rating Israel"
          name="is_rating_israel"
          type="checkbox"
        />
        <FormField
          label="Is Rating FIDE"
          name="is_rating_fide"
          type="checkbox"
        />
        <Dropdown
          label="Label"
          name="Name"
          items={buildGamesItems()}
          isLoading={isLoadingDropdown}
        />
        <Dropdown
          label="Label"
          name="Name"
          items={buildGamesFormatesItems()}
          isLoading={isLoadingDropdown}
        />
      </div>
      {/* <FormField label="Game ID" name="game_id" type="text" /> */}
    </>
  );
};

export default EventBaseDetails;
