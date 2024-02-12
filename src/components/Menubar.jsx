import "../App.css";

const Menubar = () => {
  return (
    <div className="flex jus-center items-center h-100">
      <div className="menubar">
        <h2 className="logo">LOGO</h2>
        <button className="menubar-item button-outlined p-button transition-2">
          Home
        </button>
        <button className="menubar-item button-borderless p-button transition-2">
          About
        </button>
        <button className="menubar-item button-borderless p-button transition-2">
          Contact
        </button>
        <img
          src="https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
          alt="avatar-img"
          className="avatar"
        />
      </div>
    </div>
  );
};

export default Menubar;
