import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

type SearchResult = {
  results?: string[];
};

type SearchFormProps = {
  searchEndpoint: string;
  placeholder: string;
  title: string;
  resultTitle: string;
};

export function SearchForm({ searchEndpoint, placeholder, title, resultTitle }: SearchFormProps) {
  const router = useRouter();
  const { s } = router.query;
  const [result, setResult] = useState<SearchResult | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  let loadingTimeout: NodeJS.Timeout;

  // Fetch the results on page load
  useEffect(() => {
    // Only if there is a search query
    if (s) {
      fetchResult(s as string);
    }
  }, [s]);

  const fetchResult = async (searchQuery: string) => {
    // Debounce loading indicator to not have a janky UI
    loadingTimeout = setTimeout(() => setLoading(true), 200);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${searchEndpoint}/${searchQuery}`);
      const data: SearchResult = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResult(null);
    } finally {
      clearTimeout(loadingTimeout);
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    // Stop the form from submitting
    e.preventDefault();

    // Get the value in the search input
    const searchValue = inputRef.current?.value;

    // If there's a value
    if (searchValue) {
      // If we are already searching for the value, the user may have clicked on search again,
      // and there may be different results, so we should still re-run the fetch forcefully
      // ToDo
      //  This should probably be debounced
      if (searchValue === s) {
        fetchResult(searchValue);
      // Otherwise update the URL
      } else {
        router.push({
          pathname: router.pathname,
          query: { s: searchValue }
        })
      }
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-black mb-8">{title}</h1>
      <form onSubmit={handleSearch} className="w-full max-w-sm">
        <input
          ref={inputRef}
          type="search"
          defaultValue={s}
          className="text-black bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mb-4"
          placeholder={placeholder}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 w-full"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-blue-500">Loading...</p>}

      {result && !loading && (
        <div className="mt-8 text-black text-center">
          <h2 className="text-xl font-bold">{resultTitle}</h2>
          {Array.isArray(result.results) && result.results.length > 0 ? (
            result.results.map((result: string, index: number) => (
              <p key={`${result}${index}`}>{result}</p>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      )}

      <Link href="/" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 w-full max-w-sm text-center mt-4">
        Go home
      </Link>
    </div>
  );
}
