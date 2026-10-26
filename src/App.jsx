import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  return (
    <>
      <div className="w-full overflow-hidden">
        <Navbar />
      </div>
      <div className="page-content w-full h-[90vh] p-4 grid grid-cols-1 sm:grid-cols-[20%_80%] md:grid-cols-[20%_80%] gap-4">
        <Sidebar />
        <Contact />
      </div>
    </>
  )
}

export default App
