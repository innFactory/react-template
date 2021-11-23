import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface FilterControlProps {
	isFilterCompleted: boolean;
	disabled?: boolean;
	onIsFilterCompletedChange: (value: boolean) => void;
}

const FilterControl: React.FC<FilterControlProps> = ({
	isFilterCompleted: filterCompleted,
	disabled,
	onIsFilterCompletedChange: onFilterCompletedChange,
}) => {
	const { t } = useTranslation();

	const handleIsFilterCompletedChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		onFilterCompletedChange(event.target.checked);
	};

	return (
		<FormGroup>
			<FormControlLabel
				control={
					<Switch
						value={filterCompleted}
						onChange={handleIsFilterCompletedChange}
						disabled={disabled}
					/>
				}
				label={`${t('home.completedLabel')}`}
			/>
		</FormGroup>
	);
};

export default FilterControl;
