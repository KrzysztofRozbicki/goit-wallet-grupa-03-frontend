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

import { closeModalAddTransaction } from '../../redux/global/globalSlice';
import { categories } from '../../mock/categories';
import selectStyles from './Select.styles.js';
import DatetimePicker from '../DatetimePicker/DatetimePicker';

import css from './ModalAddTransaction.module.css';

const ModalAddTransaction = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={css.modal}>
        <button className={css.closeButton} onClick={() => dispatch(closeModalAddTransaction())}>
          X
        </button>
        <Formik
          initialValues={{
            income: false,
            category: null,
            value: '',
            date: `${moment(new Date()).format('DD.MM.YYYY')}`,
            comment: '',
          }}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ values }) => (
            <Form className={css.form}>
              <h2 className={css.formHeader}> Add transaction</h2>
              <div className={css.switchBox}>
                <p className={values.income ? css.incomeSelected : null}> Income </p>
                <label className={css.switch}>
                  <Field type="checkbox" name="income" />
                  <span className={css.slider}></span>
                </label>
                <p className={!values.income ? css.expenseSelected : null}> Expenses</p>
              </div>
              {!values.income ? (
                // <Field as="select" name="color" className={`${css.formInput} ${css.formSelect}`}>
                //   <option className={css.formOption} value="" disabled selected>
                //     Select a category
                //   </option>
                //   {categories.map((category, index) => (
                //     <option className={css.formOption} key={index} value={category}>
                //       {category}
                //     </option>
                //   ))}
                // </Field>
                <Select
                  options={categories.map((category, index) => ({
                    key: index,
                    label: category,
                    value: category,
                  }))}
                  placeholder={'Select a category'}
                  styles={selectStyles}
                  isSearchable={false}
                  name="category"
                />
              ) : null}

              <DatetimePicker dateFormat="DD.MM.YYYY" name="date" type="date" timeFormat={false} />

              <Field className={css.formInput} type="input" name="value" placeholder="0.00" />
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

export default ModalAddTransaction;
