import PropTypes from 'prop-types';
import Select from 'react-select';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';

import { closeModalEditTransaction } from '../../redux/global/globalSlice';
import { editTransaction } from '../../redux/finance/operations';
import { selectData } from '../../redux/finance/selectors';
import { categories } from '../../mock/categories';
import selectStyles from '../ModalAddTransaction/Select.styles.js';
import DatetimePicker from '../DatetimePicker/DatetimePicker';

import css from '../ModalAddTransaction/ModalAddTransaction.module.css';

const TransactionSchema = Yup.object().shape({
  category: Yup.mixed().when('isIncome', {
    is: isIncome => !isIncome,
    then: () => Yup.mixed().required('Please choose transaction category.'),
    otherwise: () => Yup.mixed().notRequired(),
  }),
  amount: Yup.number('').required('Please provide transaction value.'),
});

const getTransaction = (transactions, id) => {
  const transaction = transactions.find(transaction => transaction._id === id);
  return transaction;
};

const ModalEditTransaction = ({ id }) => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectData);

  const transaction = getTransaction(transactions, id);

  const handleSubmit = async values => {
    dispatch(editTransaction({ values, id }));
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
                  EDIT
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

ModalEditTransaction.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ModalEditTransaction;
