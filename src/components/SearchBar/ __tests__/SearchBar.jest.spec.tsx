import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

test('calls onTextFieldChange when text is changed', () => {
	const onTextFieldChangeMock = jest.fn();
	const onSearchBtnClickMock = jest.fn();

	const { getByPlaceholderText } = render(
		<SearchBar
			onTextFieldChange={onTextFieldChangeMock}
			onSearchBtnClick={onSearchBtnClickMock}
			placeholder='Search'
		/>,
	);

	const inputElement: HTMLInputElement = getByPlaceholderText(
		'Search',
	) as HTMLInputElement;

	fireEvent.change(inputElement, { target: { value: 'new text' } });

	expect(onTextFieldChangeMock).toHaveBeenCalledWith('new text');

	expect(inputElement.value).toBe('new text');
});
