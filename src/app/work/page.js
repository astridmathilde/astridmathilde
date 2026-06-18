import Link from 'next/link';
import { client } from '../../sanity/client';

const POSTS_QUERY = `*[
 _type == "project"
 && defined(slug.current)]|order(time.year desc)[0...12]{_id, title, slug, location}`;

export default async function Work() {
  const entries = await client.fetch(POSTS_QUERY, {});
  
  return (
    <>
    <h2>Work</h2>
    <ul>
    {entries.map((entry) => (
      <li key={entry._id}>
      <Link href={`/work/${entry.slug.current}`}>
      <h3>{entry.title}</h3>
      {entry.location ? (
        <p>{entry.location.name}</p>
      ) : null
      }
  
      </Link>
      </li>
    ))}
    </ul>
    </>
  );
}