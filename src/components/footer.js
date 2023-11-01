const Footer = () => {
    return (
      <footer className="bg-blue-800 p-4 flex justify-between items-center text-white">
        <p>©Scoala Gimnaziala "Mihai Viteazul"</p>
        <div className="flex items-center space-x-2">
          <p>Telefon: </p>
          <p>Email: </p>
          <p>Program:</p>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="/facebook-logo.png" alt="Facebook Logo" className="h-6 w-6" />
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  