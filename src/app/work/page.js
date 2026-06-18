import Link from 'next/link';
import { client } from '../../sanity/client';
import { ALL_PROJECTS } from '../../sanity/lib/queries';

export default async function Work() {
  const entries = await client.fetch(ALL_PROJECTS, {});
  
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