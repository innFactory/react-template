import i18next from 'i18next';
import { useEffect, useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import LanguagePicker, { Language } from './LanguagePicker';
import { withApplyMockInStorybook } from './MockUtil';

const LanguagePickerViewContainer: React.FC = () => {
	const [language, setLanguage] = useState(i18next.language);
	const handleError = useErrorHandler();
	const { t } = useTranslation();

	const languages: Language[] = [
		{ code: 'de', name: t('languages.german') },
		{ code: 'en', name: t('languages.english') },
	];

	const handleChangeLanguage = async (code: string) => {
		try {
			await i18next.changeLanguage(code);
		} catch (error) {
			handleError(error);
		}
	};

	useEffect(() => {
		const handleLanguageChanged = (code: string) => {
			setLanguage(code);
		};

		i18next.on('languageChanged', handleLanguageChanged);

		return () => {
			i18next.off('languageChanged', handleLanguageChanged);
		};
	}, []);

	return (
		<LanguagePicker
			value={language}
			languages={languages}
			onChange={handleChangeLanguage}
		/>
	);
};

export default withApplyMockInStorybook(LanguagePickerViewContainer);
