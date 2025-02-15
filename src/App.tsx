
import JobListings from "./components/JobListings.tsx";
import JobCategories from "./components/JobCategories.tsx";
import Header from "./components/Header.tsx";
import SidebarProfile from "./components/SidebarProfile.tsx";
import Navbar from "./components/Navbar.tsx";
import SearchBar from "./components/Searchbar.tsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        <SidebarProfile />
        <main className="flex-1 p-6">
          <Header />
          <SearchBar />
          <JobCategories />
          <JobListings />
        </main>
      </div>
    </>
  );
}

export default App;
