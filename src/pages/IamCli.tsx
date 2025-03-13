import { Button } from "@/components/ui/button"


function IAMCLI(){
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold">IAM + AWS CLI Challenge</h2>
        <p className="mt-4 text-gray-700">
          Task: Create IAM users, assign policies, and generate AWS CLI keys.
        </p>
        <p className="mt-4">
          <span className="font-semibold">Goal:</span> Understand how to manage AWS permissions using IAM.
        </p>
        <Button className="mt-6 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition">
          Start Challenge
        </Button>
      </div>
    );
  };
  
  export default IAMCLI;
  