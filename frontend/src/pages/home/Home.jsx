import Topbar from '../../components/Top-bar/TopBar.jsx'
import "./home.css"
import TimelineFeed from "../../components/feed/TimelineFeed";

export default function Home() {
  return (
  <>
    <div className="top-bar">
      <Topbar />
    </div>
    <TimelineFeed/>
  </>  
  );
}
