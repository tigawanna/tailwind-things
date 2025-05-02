import { listAllCssVariables } from "../../utils/css-variables.js";

interface ExportAsDaisyuiProps {

}

export function ExportAsDaisyui({}:ExportAsDaisyuiProps){
const colors = listAllCssVariables()
console.log("======= colors  =========", colors)
return (
 <div className='w-full h-full flex flex-col gap-4 items-center justify-center'>
    {colors.map(([k,v])=>{
        return (
            <div className="text-lg">
                {k}:{v}
            </div>
        )
    })}
 </div>
);
}
