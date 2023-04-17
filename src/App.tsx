import IconDashboard from "./Icons/IconDashboard";
import MenuItem from "./components/MenuItem/MenuItem";
import IconPeoples from "./Icons/IconPeoples";
import IconsAdministratin from "./Icons/IconsAdministratin";
import Header from "./layouts/Header";

function App() {
  return (
    <div className="App">
      {/* <Header children={`Headerinfo`}/> */}
        <MenuItem icon={<IconDashboard/>} title={"Title"}/>
        <MenuItem icon={<IconsAdministratin/>} title={"Title"}/>
    </div>
  )
}

export default App
