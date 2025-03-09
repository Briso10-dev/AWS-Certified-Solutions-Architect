import { Link } from "react-router-dom";

const challenges = [
  { id: 1, title: "IAM + AWS CLI", link: "/challenges/iam-cli" },
  { id: 2, title: "S3 Bucket Security", link: "/challenges/s3-security" },
];

function Challenges(){
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">AWS Challenges</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {challenges.map((challenge) => (
          <li key={challenge.id} className="p-4 border rounded-lg bg-gray-100 hover:bg-gray-200 transition">
            <Link to={challenge.link} className="text-blue-600 font-semibold">
              {challenge.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Challenges;
