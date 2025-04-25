import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">CRUD App Navigation</h1>
      <nav className="flex gap-4 mb-4">
        <Link to="/register">Register | </Link>
        <Link to="/login">Login | </Link>
        <Link to="/add">Add Data | </Link>
        <Link to="/show">Show Data | </Link>
        <Link to="/logout">Logout | </Link>
      </nav>
      
      <Outlet />
    </div>
  );
}

export default App;