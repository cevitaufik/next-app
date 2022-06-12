import Layout from "../components/layout";
import Navbar from "../components/navbar";

function main() {
  return (
    <div className="text-center">
      <h1 className="text-7xl font-extrabold mt-10">The React Framework for Production</h1>
      <p className="text-xl font-bold text-gray-500 my-3">Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.</p>

      <div className="flex flex-row justify-center py-3">
        <div className="bg-cyan-600 px-10 font-bold text-white py-2 rounded-full mx-3">Start learning</div>
        <div className="px-10 font-bold py-2 rounded-full mx-3 hover:bg-cyan-500 hover:text-white">Documentation</div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <Layout main={main()} />        
  )
};
