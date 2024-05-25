import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainApp from '../index.js'
import LoginPage from '../pages/login-page.jsx'
import ProfilePage from '../pages/profile-page.jsx'
import HomePage from '../pages/home-page.jsx'
import TransferPage from '../pages/transfer-page.jsx'
import ConversationPage from '../pages/message-page.jsx'
import OpenStory from '../components/storyContent/openStory.jsx'
import ContentPage from '../pages/content-page.jsx'
import Calendar from '../pages/calendar.jsx'
import AdminPage from '../admin/admin.jsx'
import AbouthPage from '../pages/about.jsx'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/undangan-untuk/:tamu' element={<LoginPage />}/>
        <Route path='/' element={<MainApp />}>
          <Route path='/' element={<HomePage />}/>
          <Route path='/profile-page/' element={<ProfilePage />}/>
          <Route path='/kirim-hadiah/' element={<TransferPage />} />
          <Route path='/content' element={<ContentPage />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/messages' element={<ConversationPage />} />
          <Route path='/about' element={<AbouthPage />} />
        </Route>
        <Route path='/story/:category' element={<OpenStory />} />
        <Route path='/admin/:username/:password' element={<AdminPage />} />
      </Routes>
    </Router>
  )
}

export default AppRouter