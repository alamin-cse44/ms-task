import { Routes, Route } from "react-router-dom";
import Problem1 from "./components/Problem-1.jsx";
import Menu from "./components/Menu.jsx";
import Problem2 from "./components/Problem-2.jsx";
import Index from "./components/Index.jsx";

function App() {
  const [allContacts, setAllContacts] = useState(null);
  const [usContacts, setUsContacts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://contact.mediusware.com/api/contacts/?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setAllContacts(data.results);
        // console.log(data)
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://contact.mediusware.com/api/country-contacts/United%20States/?page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUsContacts(data.results);
        // console.log(data.results);
      });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Menu />}>
          <Route path="problem-1" element={<Problem1 />} />
          <Route path="problem-2" element={<Problem2 contacts={allContacts} usa={usContacts} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
