import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Sidebar from './sidebar';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
function App() {
  return (
    <div className="App">

      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3 min-vh-100 bg-dark text-white">
            <h2>Sidebar</h2>
            <Sidebar />
          </div>
          <div class="col-sm-9 min-vh-100">
            <h2>Content</h2>
            <p>This is the content area.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
