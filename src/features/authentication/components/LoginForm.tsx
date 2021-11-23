import { Form, FormikProps, Field, FieldProps } from 'formik';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { LoginFormValues } from '../models/loginForm';

const LoginForm: React.FC<FormikProps<LoginFormValues>> = ({
	handleSubmit,
	isSubmitting,
}) => {
	return (
		<Form onSubmit={handleSubmit}>
			<Grid container spacing={2} padding={2} justifyContent="center">
				<Grid item xs={12}>
					<Field name="username">
						{({ field, meta }: FieldProps) => (
							<TextField
								name={field.name}
								value={field.value}
								onChange={field.onChange}
								error={meta.touched && Boolean(meta.error)}
								helperText={meta.touched && meta.error}
								fullWidth
							/>
						)}
					</Field>
				</Grid>

				<Grid item xs={12}>
					<Field name="password">
						{({ field, meta }: FieldProps) => (
							<TextField
								name={field.name}
								value={field.value}
								onChange={field.onChange}
								error={meta.touched && Boolean(meta.error)}
								helperText={meta.touched && meta.error}
								type="password"
								fullWidth
							/>
						)}
					</Field>
				</Grid>

				<Grid item>
					<Button type="submit" disabled={isSubmitting}>
						Login
					</Button>
				</Grid>
			</Grid>
		</Form>
	);
};

export default LoginForm;
