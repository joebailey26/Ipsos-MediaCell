import Link from 'next/link';
import Head from 'next/head';

export default function Index() {
  return (
    <>
      <Head>
        <title>Ipsos MediaCell Interview Task</title>
      </Head>
      <main className="bg-gray-100 flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-black mb-8">
          Ipsos MediaCell Interview Task
        </h1>
        <h1 className="text-2xl font-bold text-black mb-8">
          Search for actions...
        </h1>
        <div className="flex space-x-4">
          <Link href="/search/action/id" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Search by ID
          </Link>
          <Link href="/search/action/codeword" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Search by Codeword
          </Link>
        </div>
      </main>
    </>
  );
}
