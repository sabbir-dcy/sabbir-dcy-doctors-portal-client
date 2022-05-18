import { Route, Routes } from 'react-router-dom'
import * as page from './export'
import 'react-day-picker/dist/style.css'
import './pages/Appointment/day-picker.css'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

function App() {

  return (
    <>
      <ToastContainer
        position='bottom-center'
        autoClose={1500}
        transition={Zoom}
      />
      <page.Navbar />
      <Routes>
        <Route path='/' element={<page.Home />}></Route>
        <Route path='/about' element={<page.About />}></Route>
        <Route path='/login' element={<page.Login />}></Route>
        <Route path='/register' element={<page.Register />}></Route>
        <Route path='/resetPassword' element={<page.ResetPassword />}></Route>
        page.
        <Route path='/verifyUser' element={
          <page.VerifyUser />}></Route>
        <Route path='/appointment' element={
          <page.RequireAuth><page.Appointment /></page.RequireAuth>}></Route>
        <Route
          path='/dashboard' element={
            <page.RequireAuth><page.Dashboard /></page.RequireAuth>}>

          <Route index element={
            <page.MyAppointments />}></Route>
          <Route path='review' element={
            <page.MyReview />}></Route>
          <Route path='users' element={
            <page.RequireAdmin><page.Users /></page.RequireAdmin>}></Route>

          <Route path='addDoctor' element={
            <page.RequireAdmin><page.AddDoctor /></page.RequireAdmin>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
