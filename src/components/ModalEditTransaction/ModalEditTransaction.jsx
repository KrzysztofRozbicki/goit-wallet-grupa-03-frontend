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
import Select from 'react-select';
import axios from 'axios';
import * as Yup from 'yup';

import { closeModalEditTransaction } from '../../redux/global/globalSlice';
import { editTransaction } from '../../redux/finance/financeSlice';
import { setError } from '../../redux/session/sessionSlice';
import { categories } from '../../mock/categories';
import mockTransactions from '../../mock/transactions';
import selectStyles from '../ModalAddTransaction/Select.styles.js';
import DatetimePicker from '../DatetimePicker/DatetimePicker';

import css from '../ModalAddTransaction/ModalAddTransaction.module.css';

const serverAddress = import.meta.env.VITE_SERVER_ADDRESS;

const setIsIncomeCategory = values => {
  if (!values.category) {
    values.category = 'Income';
  }
};

const TransactionSchema = Yup.object().shape({
  category: Yup.mixed().when('isIncome', {
    is: isIncome => !isIncome,
    then: () => Yup.mixed().required('Please choose transaction category.'),
    otherwise: () => Yup.mixed().notRequired(),
  }),
  amount: Yup.number('').required('Please provide transaction value.'),
});

const getTransaction = (transactions, id) => {
  const transaction = transactions.find(transaction => transaction.id === id);
  const updateTransaction = { ...transaction };
  updateTransaction.type === 'income'
    ? (updateTransaction.type = true)
    : (updateTransaction.type = false);
  return updateTransaction;
};

const ModalEditTransaction = ({ id }) => {
  const dispatch = useDispatch();

  const transaction = getTransaction(mockTransactions, id);

  const handleSubmit = async values => {
    setIsIncomeCategory(values);
    try {
      console.log(JSON.stringify(values));
      const response = await axios.patch(
        `${serverAddress}/api/transactions/${id}`,
        JSON.stringify(values),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      // if (response.status === 200) {
      //  dispatch(editTransaction(id, response.data));
      // }
    } catch (error) {
      dispatch(setError(error));
    }
    dispatch(closeModalEditTransaction());
  };

  return (
    <>
      <div className={css.backdrop}>
        <div className={css.modal}>
          <button
            className={css.closeButton}
            onClick={() => dispatch(closeModalEditTransaction())}
          />
          <Formik
            initialValues={{
              ...transaction,
            }}
            validationSchema={TransactionSchema}
            onSubmit={values => handleSubmit(values)}
          >
            {({ errors, touched, values }) => (
              <Form className={css.form}>
                <h2 className={css.formHeader}>Edit Transaction</h2>
                <div className={css.switchBox}>
                  <p className={values.isIncome ? css.incomeSelected : null}> Income </p>
                  <p>/ </p>
                  <p className={!values.isIncome ? css.expenseSelected : null}> Expenses</p>
                </div>
                {!values.isIncome ? (
                  <label className={css.label}>
                    <Field
                      name="category"
                      component={({ field, form }) => (
                        <Select
                          {...field}
                          options={categories.map(category => ({
                            value: category,
                            label: category,
                          }))}
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
                <div className={css.valueAndDateContainer}>
                  <DatetimePicker
                    dateFormat="DD.MM.YYYY"
                    name="date"
                    type="date"
                    timeFormat={false}
                  />
                  <label className={css.label}>
                    <Field
                      className={css.formInput}
                      type="number"
                      name="amount"
                      placeholder="0.00"
                    />
                    {errors.value && touched.value ? (
                      <div className={css.validateError}>{errors.value}</div>
                    ) : null}
                  </label>
                </div>
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
                  onClick={() => dispatch(closeModalEditTransaction())}
                  className={`${css.button} ${css.buttonCancel}`}
                >
                  CANCEL
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ModalEditTransaction;
