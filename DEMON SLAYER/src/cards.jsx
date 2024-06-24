import Card from "./card"
import { pr } from "./cardses"
const Cards=()=>{
  return(
   <div className="grid grid-cols-3 max-w-[1440px] mx-auto">
    {pr.map((val) => {
      return <Card key={val.z} prod={val}/>
    })} 
   </div>
  )
}
export default Cards