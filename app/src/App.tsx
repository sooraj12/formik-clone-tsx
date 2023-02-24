import { Formik } from 'formik';
import { AppForm } from './AppForm';

function App() {
  const initialValues = {};
  return (
    <div className="App">
      <Formik initialValues={initialValues}>{() => <AppForm />}</Formik>
    </div>
  );
}

export default App;
