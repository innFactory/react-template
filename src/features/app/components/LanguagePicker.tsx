import { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

const ITEM_HEIGHT = 48;

export interface Language {
	code: string;
	name: string;
}

interface LanguagePickerProps {
	value: string;
	languages: Language[];
	onChange: (code: string) => void;
}

const LanguagePicker: React.FC<LanguagePickerProps> = ({
	value,
	languages,
	onChange,
}) => {
	const [anchorEl, setAnchorEl] = useState<HTMLElement>();
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleChange = (code: string) => {
		onChange(code);
		setAnchorEl(undefined);
	};

	const handleClose = () => {
		setAnchorEl(undefined);
	};

	return (
		<div>
			<IconButton
				aria-expanded={open ? 'true' : undefined}
				aria-haspopup="true"
				onClick={handleClick}
			>
				<LanguageIcon />
			</IconButton>

			<Menu
				MenuListProps={{
					'aria-labelledby': 'long-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						maxHeight: ITEM_HEIGHT * 4.5,
						width: '20ch',
					},
				}}
			>
				{languages.map(({ code, name }) => (
					<MenuItem
						key={code}
						selected={code === value}
						onClick={() => handleChange(code)}
					>
						{name}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
};

export default LanguagePicker;
