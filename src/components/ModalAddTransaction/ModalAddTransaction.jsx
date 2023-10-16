import moment from 'moment';
import Select from 'react-select';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';

import { closeModalAddTransaction } from '../../redux/global/globalSlice';
import { addTransaction } from '../../redux/finance/operations';
import { categories } from '../../mock/categories';
import selectStyles from './Select.styles.js';
import DatetimePicker from '../DatetimePicker/DatetimePicker';

import css from './ModalAddTransaction.module.css';

const TransactionSchema = Yup.object().shape({
  category: Yup.mixed().when('isIncome', {
    is: isIncome => !isIncome,
    then: () => Yup.mixed().required('Please choose transaction category.'),
    otherwise: () => Yup.mixed().notRequired(),
  }),
  amount: Yup.number('').required('Please provide transaction value.'),
});

const ModalAddTransaction = () => {
  const dispatch = useDispatch();

  const handleSubmit = async values => {
    dispatch(addTransaction(values));
    dispatch(closeModalAddTransaction());
  };

  return (
    <>
      <div className={css.backdrop}>
        <div className={css.modal}>
          <button
            className={css.closeButton}
            onClick={() => dispatch(closeModalAddTransaction())}
          />
          <Formik
            initialValues={{
              isIncome: false,
              category: null,
              amount: '',
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
                  <p className={values.isIncome ? css.incomeSelected : null}> Income </p>
                  <label className={css.switch}>
                    <Field type="checkbox" name="isIncome" />
                    <span className={css.slider}></span>
                  </label>
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
                    {errors.amount && touched.amount ? (
                      <div className={css.validateError}>{errors.amount}</div>
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
                  onClick={() => dispatch(closeModalAddTransaction())}
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

export default ModalAddTransaction;
