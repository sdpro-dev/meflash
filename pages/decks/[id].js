import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllDecksIds, getDeckData } from '../../lib/decks'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps ({ params }) {
  const deckData = await getDeckData(params.id)
  return {
    props: {
      deckData
    }
  }
}

export async function getStaticPaths () {
  const paths = getAllDecksIds()
  return {
    paths,
    fallback: false
  }
}

export default function Deck ({ deckData }) {
  return (
    <Layout>
      <Head>
        <title>{deckData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{deckData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={deckData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: deckData.contentHtml }} />
      </article>
    </Layout>
  )
}
