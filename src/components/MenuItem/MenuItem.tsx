import React, {FC} from 'react';

type MenuItemProp = {
	icon?: ReactElement,
	title: string,
	active?: boolean,
}

const MenuItem: FC<MenuItemProp> = ({icon, title, active }) => {
	return (
		<div className={`menu-item menu-item-${active ? "active" : "default"}`}>
			{icon}
			<h3>{title}</h3>
		</div>
	);
};

export default MenuItem;