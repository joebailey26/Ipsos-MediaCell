import Head from 'next/head';
import { SearchForm } from '../../../components/searchForm';

export default function SearchByCodeword() {
  return (
    <>
      <Head>
        <title>Search for codeword by ID</title>
      </Head>
      <SearchForm
        searchEndpoint="/api/action/codeword"
        placeholder="Enter Codeword"
        title="Search for IDs by Codeword"
        resultTitle="ID:"
      />
    </>
  );
}
