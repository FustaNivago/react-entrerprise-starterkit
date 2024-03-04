import TextField from '@mui/material/TextField';
import { FieldHookConfig, useField } from 'formik';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

type FormTextFieldProps = FieldHookConfig<string> & { label: string };

const FormInputField = memo((props: FormTextFieldProps) => {
  const [field, meta] = useField(props);
  const { value, ...fieldPropps } = field;
  const [fieldValue, setFieldValue] = useState('');

  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setFieldValue(field.value);
  }, []);

  const onChangeDebounce = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      setFieldValue(e.target.value);
      timerRef.current = setTimeout(() => {
        field.onChange(e);
      }, 500);
    },
    [props]
  );

  return (
    <TextField
      {...fieldPropps}
      label={props.label}
      type={props.type}
      value={fieldValue}
      onChange={onChangeDebounce}
      onBlur={field.onBlur}
      error={Boolean(meta.error)}
      style={{ marginTop: '.5em' }}
      fullWidth
      variant="standard"
      autoComplete="off"
    ></TextField>
  );
});

export default FormInputField;
