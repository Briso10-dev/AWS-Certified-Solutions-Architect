
function Home(){
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold">Welcome to AWS Challenges</h1>
        <p className="text-gray-600 mt-2 text-lg md:text-xl">
          Practice AWS Hands-On Challenges to master the cloud.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    );
  };
  
  export default Home;
  