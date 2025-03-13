import { Button } from "@/components/ui/button"

function Home(){
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold">Welcome to Briso's AWS Challenges</h1>
        <p className="text-gray-600 mt-2 text-lg md:text-xl">
          Practice AWS Hands-On Challenges to master the cloud.
        </p>
        <Button className="" variant="default">Get started</Button>
      </div>
    );
  };
  
  export default Home;
  