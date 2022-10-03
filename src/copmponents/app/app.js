import './App.css'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmpoyessList from '../empolyees-list/empolyees-list'
import EmployeesAddForm from '../empoyes-add-form/empoyes-add-form'
import employ from '../../api/api'

function App() {
	return (
		<div className="app">
			<AppInfo />
			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>
			<EmpoyessList employ={employ} />
			<EmployeesAddForm />
		</div>
	)
}

export default App
