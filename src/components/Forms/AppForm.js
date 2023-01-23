import React, {ReactChildren} from 'react';
import {Formik, FormikHelpers, FormikValues} from 'formik';

function AppForm({initialValues, onSubmit, validationSchema, children}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
