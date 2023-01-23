import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";


function SubmitButton({ title, ...otherProps }) {
  const { handleSubmit, isSubmitting } = useFormikContext();

  return (
    <AppButton
      title={title}
      onPress={handleSubmit}
      isLoading={isSubmitting}
      {...otherProps}
    />
  );
}

export default SubmitButton;
