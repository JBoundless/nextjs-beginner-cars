import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function Car({ car }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <h1>{id}</h1>
      <img src={car.image} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const req = await fetch(`https://nextjs-beginner-cars.vercel.app/${params.id}.json`);
  const data = await req.json();

  return {
    props: { car: data },
  };
}
