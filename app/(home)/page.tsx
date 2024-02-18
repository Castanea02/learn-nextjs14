import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovie() {
  return fetch(API_URL).then((response) => response.json());
}

export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const movies = await getMovie();
  return (
    <div>
      <h1>Hello NEXT JS</h1>
      <div>
        {movies.map((movie) => (
          <Link href={`/movies/${movie.id}`}>
            <li key={movie.id}>{movie.title}</li>
          </Link>
        ))}
      </div>
    </div>
  );
}
