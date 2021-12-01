import { Form, FormikProps, Field, FieldProps } from 'formik';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AddTodoFormValues } from '../models/addTodoForm';
import { useTranslation } from 'react-i18next';

const AddTodoForm: React.FC<FormikProps<AddTodoFormValues>> = ({
	handleSubmit,
}) => {
	const { t } = useTranslation();

	return (
		<Form onSubmit={handleSubmit}>
			<Stack>
				<Field name="title">
					{({ field, meta }: FieldProps) => (
						<TextField
							name={field.name}
							value={field.value}
							label={t('todo.addTodoForm.titleLabel')}
							onChange={field.onChange}
							error={meta.touched && Boolean(meta.error)}
							helperText={meta.touched && meta.error}
							fullWidth
						/>
					)}
				</Field>
			</Stack>
		</Form>
	);
};

export default AddTodoForm;
