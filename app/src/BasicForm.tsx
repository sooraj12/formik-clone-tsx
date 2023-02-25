import { FormikProps, useFormikContext } from 'formik';
import { FormValues } from './App';

function BasicForm() {
  const { values, setFieldValue }: FormikProps<FormValues> = useFormikContext();
  // TODO : check the use of FormikValues as a generic type parameter
  // FormikValues could have been directly assigned to values in FormikState

  return (
    <div className="BasicForm">
      <form className="AppForm__form">
        <fieldset>
          <legend>Basic fieldset example</legend>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Text input
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Text input"
              value={values.name}
              onChange={e => setFieldValue('name', e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Select menu
            </label>
            <select id="age" className="form-select">
              <option>select</option>
            </select>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="agree" />
              <label className="form-check-label" htmlFor="agree">
                Select this
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export { BasicForm };
