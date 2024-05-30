import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from '../pages/login-page.jsx'
import ProfilePage from '../pages/profile-page.jsx'
import HomePage from '../pages/home-page.jsx'
import TransferPage from '../pages/transfer-page.jsx'
import ConversationPage from '../pages/message-page.jsx'
import ContentPage from '../pages/content-page.jsx'
import Calendar from '../pages/calendar.jsx'
import AbouthPage from '../pages/about.jsx'

import OpenStory from '../components/storyContent/openStory.jsx'

import AdminPage from '../admin/admin.jsx'
import AddGuest from '../admin/addGuest.jsx'
import AddContent from '../admin/addContent.jsx'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/undangan-untuk/:tamu' element={<LoginPage />}/>
        <Route path='/' element={<HomePage />}/>
        <Route path='/profile-page/' element={<ProfilePage />}/>
        <Route path='/kirim-hadiah/' element={<TransferPage />} />
        <Route path='/content' element={<ContentPage />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/messages' element={<ConversationPage />} />
        <Route path='/about' element={<AbouthPage />} />
        <Route path='/story/:category' element={<OpenStory />} />
        <Route path='/admin' element={<AdminPage />}>
          <Route path='/admin/:user' element={<AddGuest />} />
          <Route path='/admin/:user/content' element={<AddContent />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter