import * as React from "react";
import { useField } from "formik";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from 'dayjs';

export default function CalendarField({ label, name, ...props }) {
  const [field, meta, helpers] = useField(name);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={field.value ? dayjs(field.value) : null}
        onChange={(date) => helpers.setValue(date.toDate())}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
        {...props}
      />
    </LocalizationProvider>
  );
}
