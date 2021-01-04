import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedDecksData } from '../lib/decks';

export async function getStaticProps () {
  const allDecksData = getSortedDecksData();
  return {
    props: {
      allDecksData
    }
  }
}

Home.getInitialProps = async () => {

};

export default function Home ({ allDecksData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Markdown Flashcards to Study</p>
        <p>
          MGRFS - Markdown Generated React Flashcard System{' '}
          <a href='https://meflash-6wnqnj501.vercel.app/'>Running Example</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allDecksData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/decks/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
