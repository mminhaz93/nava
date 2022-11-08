import Head from 'next/head';
import useSWR from 'swr';
import CompanyCard from '../components/CompanyCard';
import { fetcher } from '../util/helpers';

const Home = () => {
  const { data, error } = useSWR('/api/companies', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>Nava - Palomar mini</title>
        <meta name='description' content='Palomar client details' />
        <link
          rel='icon'
          href='https://assets-global.website-files.com/616d6d167935137755a53a32/619c1182911ac312740356b9_5f7207a904659a68bdead0df_favicon.png'
        />
      </Head>

      <main className='flex flex-col justify-center items-center px-5 sm:px-8 py-3'>
        <h1 className='text-3xl font-bold text-sky-700'>Nava</h1>

        {data.map((company, idx) => (
          <CompanyCard company={company} key={idx} />
        ))}
      </main>
    </div>
  );
};

export default Home;
