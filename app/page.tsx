import Image from "next/image";
import Link from "next/link";
import { getUser } from "./actions";

async function Home() {
  await getUser();
  return (
    <section className="grid sm:grid-cols-2 -mt-8">
      <div className="flex flex-col justify-center px-6 sm:pl-28 mb-12 order-2 sm:order-none">
        <a className="text-2xl sm:text-3xl font-semibold">
          Achieve financial freedom
          <br />
          faster than you ever imagined.
        </a>
        <a className="text-lg font pt-1 sm:pt-2">
          Discover personalized strategies to<br></br>save, invest, and retire
          early.
        </a>
        <Link href="/login">
          <div className="bg-blue-400 h-10 w-40 text-white text-center font-bold py-2 px-8 rounded-md mt-4">
            Get Started!
          </div>
        </Link>
      </div>
      <div className="order-1 sm:order-none">
        <Image
          className="rounded-full p-12 sm:p-24"
          src={"/retired.jpeg"}
          alt="Retired guy looking over a mountain contemplating his decisions in life"
          width={200}
          height={200}
          layout="responsive"
        />
      </div>
    </section>
  );
}

export default Home;
