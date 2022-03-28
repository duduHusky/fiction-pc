import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faBook, faHouse, faMagnifyingGlass, IconPack } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser, faClock } from "@fortawesome/free-regular-svg-icons";

interface FontIconsProps {
	name: string,
	color?: string
}

const icons: IconPack = {
	'house': faHouse,
	'angle-right': faAngleRight,
	'magnifying-glass': faMagnifyingGlass,
	'r-circle-user': faCircleUser,
	'books': faBook,
	'r-clock': faClock,
}

const FontIcons = (props: FontIconsProps) => {
	const { name, color } = props
	return <FontAwesomeIcon icon={icons[name]} color={color} />
}

export default FontIcons
