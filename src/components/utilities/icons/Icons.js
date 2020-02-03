import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function searchIcon(color, size) {
	return (
		<FontAwesomeIcon
			icon={faSearch}
			style={{ color: color }}
			size={size}
		></FontAwesomeIcon>
	);
}

export { searchIcon };
