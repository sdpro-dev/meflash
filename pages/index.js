import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedDecksData } from '../lib/decks';

export async function getStaticProps () {
  const allDecksData = getSortedDecksData();
  const response = await fetch('http://localhost:3000/api/users')
  const users = await response.json()
  return {
    props: {
      allDecksData,
      users
    }
  }
}

export default function Home ({ allDecksData, users }) {
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
      <section>
      <ul>
  {users.map(user => (
    <li key={user.id}>
      <Link href='/user/[id]' as={`/user/${user._id}`}>
        <a>{`User ${user.name}`}</a>
      </Link>
    </li>
  ))}
  </ul>
      </section>
    </Layout>
  )
}
