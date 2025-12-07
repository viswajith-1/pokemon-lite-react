const Header = ({ children }) => {
  const handleClick = () => {
    window.location.reload();
  };


  return (
    <header className="bg-red-600 text-white p-4 shadow-lg sticky top-0 z-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3" onClick={handleClick}>
          <img src="/pokeball.png" alt="Pokeball" className="w-10 h-10" />
          <h1 className="text-3xl font-bold tracking-tight">Pokedex Lite</h1>
        </div>
        {children}
      </div>
    </header>
  );
};
export default Header;