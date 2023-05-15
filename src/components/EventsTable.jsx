import React, { useState } from "react";
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
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import clsx from "clsx";

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
  },
  actionIcons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  iconButton: {
    marginRight: theme.spacing(1),
  },
}));

const EventsTable = ({ data }) => {
  const classes = useStyles();
  const [editableRowIndex, setEditableRowIndex] = useState(-1);

  const handleEdit = (index) => {
    setEditableRowIndex(index);
  };

  const handleDelete = (index) => {
    // Implement your delete logic here
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Data Table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.headerCell}>Actions</TableCell>
            <TableCell className={classes.headerCell}>Date</TableCell>
            <TableCell className={classes.headerCell}>Name</TableCell>
            <TableCell className={classes.headerCell}>Description</TableCell>
            <TableCell className={classes.headerCell}>Price</TableCell>
            <TableCell className={classes.headerCell}>Round Numbers</TableCell>
            <TableCell className={classes.headerCell}>Game Format</TableCell>
            <TableCell className={classes.headerCell}>
              Rating (Israel)
            </TableCell>
            <TableCell className={classes.headerCell}>Rating (FIDE)</TableCell>
            <TableCell className={classes.headerCell}>Game</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              className={clsx({ "even-row": index % 2 === 0 })}
            >
              <TableCell>
                {editableRowIndex === index ? (
                  <div className={classes.actionIcons}>
                    <IconButton
                      className={classes.iconButton}
                      aria-label="save"
                    >
                      <CheckIcon />
                    </IconButton>
                    <IconButton
                      className={classes.iconButton}
                      aria-label="cancel"
                    >
                      <CancelIcon />
                    </IconButton>
                  </div>
                ) : (
                  <div className={classes.actionIcons}>
                    <IconButton
                      className={classes.iconButton}
                      aria-label="edit"
                      onClick={() => handleEdit(index)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      className={classes.iconButton}
                      aria-label="delete"
                      onClick={() => handleDelete(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                )}
              </TableCell>
              <TableCell>
                {editableRowIndex === index ? (
                  <input type="text" value={row.date} />
                ) : (
                  row.date
                )}
              </TableCell>
              <TableCell>
                {editableRowIndex === index ? (
                  <input type="text" value={row.name} />
                ) : (
                  row.name
                )}
              </TableCell>
              <TableCell>
                {editableRowIndex === index ? (
                  <input type="text" value={row.description} />
                ) : (
                  row.description
                )}
              </TableCell>
              <TableCell>
                {editableRowIndex === index ? (
                  <input type="number" value={row.price} />
                ) : (
                  row.price
                )}
              </TableCell>
              <TableCell>{row.round_numbers}</TableCell>
              <TableCell>{row.game_format}</TableCell>
              <TableCell>{row.is_rating_israel.toString()}</TableCell>
              <TableCell>{row.is_rating_fide.toString()}</TableCell>
              <TableCell>{row.game}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EventsTable;
