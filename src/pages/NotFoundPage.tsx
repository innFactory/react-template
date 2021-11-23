import AppFrame from '../features/app/components/AppFrame';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const NotFoundPage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<AppFrame>
			<Typography variant="h1">{t('notFoundPage.text')}</Typography>
		</AppFrame>
	);
};

export default NotFoundPage;
