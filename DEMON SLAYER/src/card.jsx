const Card=({prod})=>{
  return(
    <div className="  bg-[#000000a9] p-[20px]   text-[white] flex flex-col ">
   <img src={prod.img} className=" w-[420px] h-[680px] object-cover" />
   <div>
     <h1 className="text-[35px]                                                                             font-[700] "> {prod.title} </h1>
   <p> {prod.text} </p>
   </div>
  
    </div>
  )
}
export default Card