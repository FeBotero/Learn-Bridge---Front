import { BrowserRouter, Routes, Route } from "react-router-dom";


import { Header } from "./components/Header";



import { GlobalStyle} from "./styles/global";
import { Home } from "./components/Home";
import { About } from "./components/About/About";
import { Forms } from "./components/Forms";
import { Contact } from "./components/Contact/Contact";
import { CoursesList } from "./components/CoursesList";
import { Access } from "./components/Access";
import { HomeStudent } from "./components/HomeStudent";
import { HomeSchool } from "./components/HomeSchool";
import { Room } from "./components/Room";
import { HomeTutor } from "./components/HomeTutor";
import { CertificateAluno, CertificateTutor } from "./components/Certificate";




export function App() {
  return (

    
    <BrowserRouter>
      <nav><Header /></nav>
      <Routes>

        <Route index element={<Home />} />
        <Route path="/courses" element={<CoursesList />} />
        <Route path="/about" element={<About />} />
        <Route path="/newaccount" element={<Forms />} />
        <Route path="/access" element={<Access />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/student" element={<HomeStudent />} />
        <Route path="/school" element={<HomeSchool />} />
        <Route path="/tutor" element={<HomeTutor />} />
        <Route path="/room" element={<Room />} />
        <Route path="/certificateAluno" element={<CertificateAluno />} />
        <Route path="/certificateTutor" element={<CertificateTutor />} />
        
      </Routes>
      <GlobalStyle />

    </BrowserRouter>
    
  );
}

export default App;
