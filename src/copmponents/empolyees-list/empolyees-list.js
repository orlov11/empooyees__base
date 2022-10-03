import EmployeesListItem from '../empoyees-list-item/empoyees-list-item'
import './employees-list.css'

const EmpoyessList = ({ employ }) => {
	return (
		<ul className="app-list list-group">
			{employ.map((item, i) => (
				<EmployeesListItem key={item.id} {...item} />
			))}
		</ul>
	)
}

export default EmpoyessList
