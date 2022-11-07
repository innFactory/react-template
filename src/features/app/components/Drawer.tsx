import {
	Divider,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import HomeIcon from '@mui/icons-material/Home';
import FavoritesIcon from '@mui/icons-material/Star';
import LockIcon from '@mui/icons-material/Lock';
import { useRoutesActive } from 'react-typesafe-routes';
import { useTranslation } from 'react-i18next';
import router from '../../../Router';
import { useNavigate } from 'react-router-dom';

interface DrawerProps {
	open: boolean;
	onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ open, onClose }) => {
	const navigate = useNavigate();
	const { home, favorites, restricted } = useRoutesActive({
		home: router.home,
		favorites: router.favorites,
		restricted: router.restricted,
	});
	const { t } = useTranslation();

	const onHomeClick = () => {
		navigate(router.home().$);
		onClose();
	};

	const onFavoritesClick = () => {
		navigate(router.favorites().$);
		onClose();
	};

	const onRestrictedClick = () => {
		navigate(router.restricted().$);
		onClose();
	};

	return (
		<MuiDrawer anchor="left" open={open} onClose={onClose}>
			<List>
				<ListItemButton onClick={onHomeClick} selected={home}>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary={t('drawer.home')} />
				</ListItemButton>
				<Divider />
				<ListItemButton onClick={onFavoritesClick} selected={favorites}>
					<ListItemIcon>
						<FavoritesIcon />
					</ListItemIcon>
					<ListItemText primary={t('drawer.favorite')} />
				</ListItemButton>
				<ListItemButton
					onClick={onRestrictedClick}
					selected={restricted}
				>
					<ListItemIcon>
						<LockIcon />
					</ListItemIcon>
					<ListItemText primary={t('drawer.restricted')} />
				</ListItemButton>
			</List>
		</MuiDrawer>
	);
};

export default Drawer;
