import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import clsx from "clsx";

import { handleDeleteEvent } from "@/redux/actions/event";

import { useTranslation } from "react-i18next";
import { Loading } from "./Loading";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    "& .even-row": {
      backgroundColor: theme.palette.grey[100],
    },
  },
  headerCell: {
    backgroundColor: "#3b82f6",
    color: theme.palette.common.white,
    fontWeight: "bold",
    textAlign: "center", // Center the text inside header cells
  },
  cell: {
    textAlign: "center", // Center the text inside body cells
  },
  actionIcons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconButton: {
    marginRight: theme.spacing(1),
  },
}));

const EventsTable = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const iconSize = 24;

  const eventsState = useSelector((state) => state.events);
  const gamesState = useSelector((state) => state.games);
  const gameFormatsState = useSelector((state) => state.gameFormats);

  const [eventIndexLoadingDelete, setEventIndexLoadingDelete] = useState([]);
  const [data, setData] = useState([]);

  const buildData = useCallback(() => {
    setEventIndexLoadingDelete([]);
    if (
      eventsState.events &&
      gamesState.games &&
      gameFormatsState.gameFormats
    ) {
      return eventsState.events.map((event) => {
        const game = gamesState.games.find((game) => game.id === event.game_id);
        const gameFormat = gameFormatsState.gameFormats.find(
          (gameFormat) => gameFormat.id === event.game_format_id
        );

        return {
          ...event,
          game: game ? game.name : "",
          game_format: gameFormat ? gameFormat.name : "",
        };
      });
    }

    return [];
  }, [eventsState.events, gamesState.games, gameFormatsState.gameFormats]);

  useEffect(() => {
    setData(buildData());
  }, [
    eventsState.events,
    gamesState.games,
    gameFormatsState.gameFormats,
    buildData,
  ]);

  const handleDelete = (index) => {
    setEventIndexLoadingDelete([...eventIndexLoadingDelete, index]);
    // debugger;
    dispatch(handleDeleteEvent(data[index].id, onEventDeleteSuccess));
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Data Table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.headerCell}>{t("actions")}</TableCell>
            <TableCell className={classes.headerCell}>{t("date")}</TableCell>
            <TableCell className={classes.headerCell}>{t("name")}</TableCell>
            <TableCell className={classes.headerCell}>
              {t("description")}
            </TableCell>
            <TableCell className={classes.headerCell}>{t("price")}</TableCell>
            <TableCell className={classes.headerCell}>
              {t("number_of_rounds")}
            </TableCell>
            <TableCell className={classes.headerCell}>
              {t("game_format")}
            </TableCell>
            <TableCell className={classes.headerCell}>
              {t("rating_israel")}
            </TableCell>
            <TableCell className={classes.headerCell}>
              {t("rating_fide")}
            </TableCell>
            <TableCell className={classes.headerCell}>{t("game")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              className={clsx({ "even-row": index % 2 === 0 })}
            >
              <TableCell className={classes.cell}>
                <div className={classes.actionIcons}>
                  {eventIndexLoadingDelete.includes(index) ? (
                    <CircularProgress
                      size={iconSize}
                      style={{ marginLeft: 16, marginRight: 16 }}
                    />
                  ) : (
                    <IconButton
                      className={classes.iconButton}
                      aria-label="delete"
                      onClick={() => handleDelete(index)}
                    >
                      <DeleteIcon
                        style={{ height: iconSize, width: iconSize }}
                      />
                    </IconButton>
                  )}
                  <IconButton
                    className={classes.iconButton}
                    aria-label="edit"
                    onClick={() => handleEdit(index)}
                  >
                    <EditIcon style={{ height: iconSize, width: iconSize }} />
                  </IconButton>
                </div>
              </TableCell>
              <TableCell className={classes.cell}>{row.date}</TableCell>
              <TableCell className={classes.cell}>{row.name}</TableCell>
              <TableCell className={classes.cell}>{row.description} </TableCell>
              <TableCell className={classes.cell}>{row.price} </TableCell>
              <TableCell className={classes.cell}>
                {row.number_of_rounds}
              </TableCell>
              <TableCell className={classes.cell}>{row.game_format}</TableCell>
              <TableCell className={classes.cell}>
                {row.is_rating_israel ? "-" : "V"}
              </TableCell>
              <TableCell className={classes.cell}>
                {row.is_rating_fide ? "-" : "V"}
              </TableCell>
              <TableCell className={classes.cell}>{row.game}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EventsTable;
