import DragableColorBox from './DragableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

const DragableColorList = ({ colors, deleteColor }) => {
	return (
		<div style={{ height: '100%' }}>
			{colors.map((color, index) => (
				<DragableColorBox
					index={index}
					key={color.name}
					color={color.color}
					name={color.name}
					deleteColor={deleteColor}
				/>
			))}
		</div>
	);
};

export default SortableContainer(DragableColorList);
