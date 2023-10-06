//Domyślnie checkbox jest w stanie false, którego wartość jest przypisana do wydatków

//W zależności od wybranego stanu w polu wyboru renderować lub nie select z wyborem kategorii

//Opanować bibliotekę react-datetime i połączyć ją z komponentem, domyślnie powinna być wybrana bieżąca data

//Wykonanie walidacji pola formularza, wykorzystywać: 1) bibliotekę formik i yup lub 2) indicative.
//Wymagane powinny być tylko: kwota transakcji, data i rodzaj transakcji, komentarz to pole opcjonalne

//Napisać operację tworzenia transakcji i zawiesić ją na submit formularza, wewnątrz operacji,
//przy pomyślnym wykonaniu operacji zamykać okno modalne, akcja na zamknięcie global.isModalAddTransactionOpen.
//Operacja powinna także dodawać nową transakcję do redux store, otrzymaną w odpowiedzi od serwera

//Tutaj trzeba ustlić co konkretnie i w jakiej formie jest wysyłane do servera i jaką odpowiedź dostajemy

import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import moment from 'moment';
import Select from 'react-select';
import axios from 'axios';
import * as Yup from 'yup';

import { closeModalAddTransaction } from '../../redux/global/globalSlice';
import { setError } from '../../redux/session/sessionSlice';
import { categories } from '../../mock/categories';
import selectStyles from '../ModalAddTransaction/Select.styles.js';
import DatetimePicker from '../DatetimePicker/DatetimePicker';

import css from '../ModalAddTransaction/ModalAddTransaction.module.css';

const serverAddress = import.meta.env.VITE_SERVER_ADDRESS;

const setTypeAndCategory = values => {
  values.type = values.type ? 'income' : 'expense';
};

const TransactionSchema = Yup.object().shape({
  category: Yup.string('').required('Please select category'),
  value: Yup.number('').required('Please provide transaction value.'),
});

const ModalEditTransaction = ({ id }) => {
  const dispatch = useDispatch();

  const handleSubmit = async values => {
    setTypeAndCategory(values);
    try {
      console.log(JSON.stringify(values));
      const response = await axios.post(serverAddress, JSON.stringify(values), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
    } catch (error) {
      dispatch(setError(error));
    }
    dispatch(closeModalAddTransaction());
  };

  return (
    <>
      <div className={css.modal}>
        <button className={css.closeButton} onClick={() => dispatch(closeModalAddTransaction())}>
          X
        </button>
        <Formik
          initialValues={{
            type: false,
            category: 'Income',
            value: '',
            date: `${moment(new Date()).format('DD.MM.YYYY')}`,
            comment: '',
          }}
          validationSchema={TransactionSchema}
          onSubmit={values => handleSubmit(values)}
        >
          {({ errors, touched, values }) => (
            <Form className={css.form}>
              <h2 className={css.formHeader}> Add transaction</h2>
              <div className={css.switchBox}>
                <p className={values.type ? css.incomeSelected : null}> Income </p>
                <label className={css.switch}>
                  <Field type="checkbox" name="type" />
                  <span className={css.slider}></span>
                </label>
                <p className={!values.type ? css.expenseSelected : null}> Expenses</p>
              </div>
              {!values.type ? (
                <label className={css.label}>
                  <Field
                    name="category"
                    component={({ field, form }) => (
                      <Select
                        {...field}
                        options={categories.map(category => ({ value: category, label: category }))}
                        placeholder="Select a category"
                        styles={selectStyles}
                        isSearchable={false}
                        value={
                          field.value ? { value: field.value, label: field.value } : null // Set the selected value
                        }
                        onChange={selectedOption =>
                          form.setFieldValue(
                            field.name,
                            selectedOption ? selectedOption.value : null
                          )
                        }
                      />
                    )}
                  />
                  {errors.category && touched.category ? (
                    <div className={`${css.validateError} ${css.validateErrorCategory}`}>
                      {errors.category}
                    </div>
                  ) : null}
                </label>
              ) : null}

              <DatetimePicker dateFormat="DD.MM.YYYY" name="date" type="date" timeFormat={false} />
              <label className={css.label}>
                <Field className={css.formInput} type="number" name="value" placeholder="0.00" />
                {errors.value && touched.value ? (
                  <div className={css.validateError}>{errors.value}</div>
                ) : null}
              </label>
              <Field
                className={`${css.formInput} ${css.formInputComment}`}
                as="textarea"
                name="comment"
                placeholder="Comment"
              />
              <button type="submit" className={`${css.button} ${css.buttonAdd}`}>
                ADD
              </button>
              <button
                onClick={() => dispatch(closeModalAddTransaction())}
                className={`${css.button} ${css.buttonCancel}`}
              >
                CANCEL
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ModalEditTransaction;
