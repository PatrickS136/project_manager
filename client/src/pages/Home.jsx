import Clients from "../components/Clients";
import Projects from "../components/Projects";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <br />
      <h4 className="sub-header">All Projects</h4>
      <Projects />
      <br />
      <h4 className="sub-header">All Clients</h4>
      <Clients />
    </>
  );
}
