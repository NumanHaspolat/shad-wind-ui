import "../App.css";

function Download() {
  return (
    <div>
      <a href={`/download/shadwind-ui.css`} download="shadwind-ui.css">
        <button className="button-filled transition-1">
          Download shadwind/ui
        </button>
      </a>
    </div>
  );
}

export default Download;
