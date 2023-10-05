import Datetime from 'react-datetime';
import { useField } from 'formik';
import moment from 'moment';

import './react-datetime.css';

import css from './DatetimePicker.module.css';

export const DatetimePicker = ({ ...props }) => {
  const [field, , helpers] = useField(props);

  return (
    <Datetime
      {...field}
      {...props}
      inputProps={{
        readOnly: true,
        style: {
          border: 'none',
          width: '100%',
          backgroundColor: 'transparent',
        },
      }}
      selected={field.value}
      onChange={value => {
        helpers.setValue(moment(value).format('DD.MM.YYYY'));
      }}
      className={`${css.formInput} ${css.formCalendar}`}
      rdtPickerClassName={css.datePicker}
    />
  );
};

export default DatetimePicker;
