import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './component/Login';
import Portal from './component/Portal';
import Dashboard from './component/Dashboard';
import Students from './component/Students';
import CreateStudent from './component/CreateStudent';
import EditStudent from './component/EditStudent';
import ViewStudent from './component/ViewStudent';
import Teachers from './component/Teachers';
import CreateTeacher from './component/CreateTeacher';
import EditTeacher from './component/EditTeacher';
import ViewTeacher from './component/ViewTeacher';
import './css/admin.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/portal" element={<Portal />} >

            <Route path="dashboard" element={<Dashboard />} />

            <Route path="students" element={<Students />} />
            <Route path="create-student" element={<CreateStudent />} />
            <Route path="students/edit/:id" element={<EditStudent />} />
            <Route path="students/:id" element={<ViewStudent />} />

            <Route path="teachers" element={<Teachers />} />
            <Route path="create-teacher" element={<CreateTeacher />} />
            <Route path="teachers/edit/:id" element={<EditTeacher />} />
            <Route path="teachers/:id" element={<ViewTeacher />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
