import { Alert } from '@mui/material';
import { nanoid } from 'nanoid';

const mocks: Map<string, React.FC<unknown>> = new Map();

const isRunningInStorybook = (): boolean => {
	return process.env['STORYBOOK'] === 'true';
};

interface PlaceholderProps {
	name: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ name }) => (
	<Alert severity="warning">No mock implementation found for {name}.</Alert>
);

export const withApplyMockInStorybook = <T extends {}>(
	WrappedComponent: React.FC<T>
): React.FC<T> => {
	if (!isRunningInStorybook()) return WrappedComponent;

	const identifier = `${WrappedComponent.name}Wrapper-${nanoid(8)}`;

	const Wrapper: React.FC<T> = (props) => {
		const Mock: React.FC<T> | undefined = mocks.get(identifier);
		if (Mock) {
			return <Mock {...props} />;
		}

		return <Placeholder name={WrappedComponent.name} />;
	};
	Wrapper.displayName = identifier;

	return Wrapper;
};

export const mockComponent = <T,>(
	Component: React.FC<T>,
	Mock: React.FC<T>
): void => {
	if (!Component.displayName) return;

	mocks.set(Component.displayName, Mock as React.FC<unknown>);
};
