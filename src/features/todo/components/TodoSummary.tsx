import { useState } from 'react';
import { Stack } from '@mui/material';
import FilterControl from './FilterControl';
import TodoListViewContainer from './TodoListViewContainer';

interface TodoSummaryProps {
	disableFilter?: boolean;
}

const TodoSummary: React.FC<TodoSummaryProps> = ({ disableFilter }) => {
	const [isFilterCompleted, setIsFilterCompleted] = useState(false);

	return (
		<Stack>
			<FilterControl
				isFilterCompleted={isFilterCompleted}
				disabled={disableFilter}
				onIsFilterCompletedChange={setIsFilterCompleted}
			/>

			<TodoListViewContainer isFilterCompleted={isFilterCompleted} />
		</Stack>
	);
};

export default TodoSummary;
