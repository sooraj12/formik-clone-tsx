import { Formik, FormDebugger } from 'formik';
import { BasicForm } from './BasicForm';

export interface FormValues {
  name: string;
  age: number;
  agree: boolean;
}

function App() {
  // TODO : try to connect this to FormikValues
  const initialValues: FormValues = {
    name: '',
    age: 0,
    agree: false,
  };

  return (
    <div className="App">
      <Formik initialValues={initialValues}>
        {({ values }) => (
          <div className="d-flex">
            <BasicForm />
            <div
              style={{
                paddingTop: '40px',
                paddingLeft: '40px',
              }}
            >
              <FormDebugger obj={values} />
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default App;
