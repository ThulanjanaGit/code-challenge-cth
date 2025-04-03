import photo from "../../../assets/ConstellationTechHub.png";

const Header = () => {
  return (
    <header className="bg-firstColor text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/">
            <img
              src={photo}
              alt="Constellation Tech Hub Logo"
              className="h-10"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
