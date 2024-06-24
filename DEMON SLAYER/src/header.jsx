
const Header=()=>{
return (
  <header className="max-w-[1440px] mx-auto flex items-center justify-between">
    <div className="h-[170px] flex items-center">
      <img className=" w-[160px] h-[160px] rounded-[50%]" src='/4a171f2bfd2e242c8f60da4f4a857c2f-removebg-preview.png'  />
    </div>
    <div className="text-[white] flex items-center gap-[40px] text-[23px]">
      <a href="#">News</a>
      <a href="#">Hashira</a>
      <a href="#">Gods</a>
      <a href="#">Web</a>
    </div>
    <div>
      <select className="text-[white] bg-[#ffffff00] outline-none text-[23px]">
        <option value="Uz 🇺🇿">Uz 🇺🇿</option>
        <option value="Ru 🇷🇺">Ru 🇷🇺</option>
      </select>
    </div>
  </header>
)
}
export default Header