import IconDashboard from "./Icons/IconDashboard";
import MenuItem from "./components/MenuItem/MenuItem";
import IconPeoples from "./Icons/IconPeoples";
import IconsAdministratin from "./Icons/IconsAdministratin";

function App() {
  return (
    <div className="App">
        <MenuItem icon={<IconDashboard/>} title={"Title"}/>
        <MenuItem icon={<IconsAdministratin/>} title={"Title"}/>
    </div>
  )
}

export default App
