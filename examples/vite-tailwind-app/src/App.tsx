import { Button,CssVariablesList } from "tailwind-things";
// Usage
function App() {



  return (
    <div  className="min-h-screen gap-4 flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button className="" variant={"primary"}>
        My special button
      </Button>
      <CssVariablesList  />
      <p className="text-lg mt-4 bg-primary p-5">This is a simple React app with Tailwind CSS.</p>
      <p className="text-sm mt-2">You can start building your app from here.</p>
    </div>
  );
}

export default App;









