import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import styled from '@mui/material/styles/styled';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import LanguagePickerViewContainer from './LanguagePickerViewContainer';

const StyledAppBar = styled(MuiAppBar)(({ theme }) => ({
	borderBottom: `1px solid ${theme.palette.divider}`,
}));

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
});

interface AppBarProps {
	onToggleDrawer: () => void;
}

const AppBar: React.FC<AppBarProps> = ({ onToggleDrawer }) => {
	return (
		<StyledAppBar position="sticky" elevation={0}>
			<StyledToolbar>
				<IconButton aria-label="open menu" onClick={onToggleDrawer}>
					<MenuIcon />
				</IconButton>

				<LanguagePickerViewContainer />
			</StyledToolbar>
		</StyledAppBar>
	);
};

export default AppBar;
