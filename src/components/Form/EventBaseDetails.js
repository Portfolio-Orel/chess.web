import React from "react";
import { useSelector } from "react-redux";
import FormField from "./FormField";
import FormFieldTextarea from "./FormFieldTextArea";
import Dropdown from "../Dropdown";
import FormFieldCheckbox from "./FormFieldCheckbox";
import CalendarField from "./CalendarField";
import { useTranslation } from "react-i18next";

const EventBaseDetails = ({ onSubmit }) => {
  const { t } = useTranslation();
  const isLoadingDropdown = useSelector(
    (state) => state?.games?.loading || state.gameFormats.loading
  );
  const games = useSelector((state) => state?.games?.games);
  const gameFormats = useSelector((state) => state?.gameFormats?.gameFormats);

  const submit = (values) => onSubmit(values);

  const buildGamesItems = () => {
    if (games && Array.isArray(games)) {
      const gamesItems = games
        .sort((a, b) => a.type - b.type)
        .map((game) => {
          return {
            id: game.id,
            value: `${game.type} (${game.time_start_min}${
              game.increment_before_time_control_sec
                ? `+ ${game.increment_before_time_control_sec}`
                : ""
            }) ${
              game.moves_num_to_time_control
                ? `, ${game.moves_num_to_time_control ?? ""} -> +${
                    game.time_bump_after_time_control_min ?? ""
                  }`
                : ""
            }`,
          };
        });
      return gamesItems ?? [];
    } else {
      return [];
    }
  };

  const buildGamesFormatesItems = () => {
    if (gameFormats && Array.isArray(gameFormats)) {
      const gameFormatsItems = gameFormats
        .sort((a, b) => a.name - b.name)
        .map((gameFormat) => {
          return {
            id: gameFormat.id,
            value: gameFormat.name,
          };
        });
      return gameFormatsItems ?? [];
    } else {
      return [];
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <FormField label={t("name")} name="name" type="text" variant="outlined" />
      <FormFieldTextarea label={t("description")} name="description" />
      <CalendarField
        label={t("start_date")}
        name="start_date"
        type="date"
        className="w-full"
      />
      <div>
        <FormField
          label={t("price")}
          name="price"
          type="number"
          variant="outlined"
        />
        <FormFieldCheckbox
          label={t("price_for_each_game")}
          name="is_price_per_game"
          type="checkbox"
          tooltip={t("tooltip_price_for_each_game")}
        />
      </div>
      <div className="flex flex-col justify-start items-start">
        <FormFieldCheckbox
          label={t("is_rating_israel")}
          name="is_rating_israel"
          type="checkbox"
          tooltip={t("tooltip_rating_israel")}
        />
        <FormFieldCheckbox
          label={t("is_rating_fide")}
          name="is_rating_fide"
          type="checkbox"
          tooltip={t("tooltip_rating_fide")}
        />
        <Dropdown
          label={t("game")}
          name="game"
          items={buildGamesItems()}
          isLoading={isLoadingDropdown}
          className="w-full my-4"
        />
        <Dropdown
          label={t("game_format")}
          name="game_format"
          items={buildGamesFormatesItems()}
          isLoading={isLoadingDropdown}
          className="w-full"
        />
      </div>
      <button
        onClick={submit}
        // disabled={!dirty || !isValid}
        className="block w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
      >
        {t("continue")}
      </button>
    </div>
  );
};

export default EventBaseDetails;
