const date = new Date();

const Footer = () => {
  return (
    <footer className="bg-secondColor text-white p-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {date.getFullYear()} Constellation Tech Hub. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
