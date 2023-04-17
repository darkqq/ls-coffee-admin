import IconDashboard from "./Icons/IconDashboard";
import MenuItem from "./components/MenuItem/MenuItem";
import IconPeoples from "./Icons/IconPeoples";
import IconsAdministratin from "./Icons/IconsAdministratin";
import Header from "./layouts/Header";
import LogoBox from "./components/LogoBox";
import UserName from "./components/UserName";
import SideBar from "./components/SideBar";
import Main from "./layouts/Main";

function App() {
  return (
    <div className="App">
      <Header>
        <UserName name="Ivan" admin/>
        <LogoBox />
      </Header>
      <SideBar />
      <Main />
    </div>
  )
}

export default App
