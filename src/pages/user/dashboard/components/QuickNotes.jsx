import { BiNotepad } from "react-icons/bi";
import "./QuickNotes.css";

const QuickNotes = () => {
  return (
    <div className="dash-notes">
      <h3 className="dash-card-title">
        <span>
          <BiNotepad />
        </span>
        Quick Notes
      </h3>
      <div className="dash-notes-inner">
        <textarea
          placeholder="Write new note..."
          className="dash-notes-input"
        ></textarea>
        <ul className="dash-notes-list">
          <li>
            Filling a bit dizzy <span>9:45</span>
          </li>
          <li>
            Sore throat <span>2:45</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuickNotes;
