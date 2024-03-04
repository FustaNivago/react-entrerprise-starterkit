import { Link, Outlet } from 'react-router-dom';

const AdminHomePage = () => {
  return (
    <div>
      Admin Page
      <div>
        <Link to={'/admin'} className="ml05">
          UserListPage
        </Link>
        <Link to={'/admin/department-list'} className="ml05">
          Department List Page
        </Link>
        <Link to={'/admin/dictionary-list'} className="ml05">
          Dictionary List Page
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminHomePage;
