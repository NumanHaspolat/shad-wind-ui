import "../App.css";

function Download() {
  return (
    <div>
      <a href={`App.css`} download="App.css">
        <button>Download CSS File</button>
      </a>
    </div>
  );
}

export default Download;
