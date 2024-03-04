import { Route, Routes } from 'react-router-dom';
import AdminPage from '../pages/AdminHomePage';
import UserListPage from '../pages/users/user-list/UserListPage';
import DepartmentListPage from '../pages/departments/department-list/DepartmentListPage';
import DictionaryListPage from '../pages/dictionaries/dictionary-list/DictionaryListPage';

const AdminRoutesComponent = () => {
  return (
    <Routes>
      <Route path={'/'} element={<AdminPage />}>
        <Route index element={<UserListPage />}></Route>
        <Route path={'department-list'} element={<DepartmentListPage />}></Route>
        <Route path={'dictionary-list'} element={<DictionaryListPage />}></Route>
      </Route>
    </Routes>
  );
};

export default AdminRoutesComponent;
