import AppFrame from '../features/app/components/AppFrame';
import TodoSummary from '../features/todo/components/TodoSummary';

const HomePage: React.FC = () => {
	return (
		<AppFrame>
			<TodoSummary />
		</AppFrame>
	);
};

export default HomePage;
