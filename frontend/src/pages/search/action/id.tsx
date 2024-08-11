import { SearchForm } from '../../../components/searchForm';
import Head from 'next/head';

export default function SearchByID() {
  return (
    <>
      <Head>
        <title>Search for codeword by ID</title>
      </Head>
      <SearchForm
        searchEndpoint="/api/action/id"
        placeholder="Enter ID"
        title="Search for codeword by ID"
        resultTitle="Codeword:"
      />
    </>
  );
}
