import Link from "next/link";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <>
      <main className="w-full h-full flex flex-col justify-center items-center mt-20">
        <h1 className="text-[40px] mb-10">There will be intro in future.</h1>
        <Link href={"/home"}>
          <Button width="150" content="Continue" />
        </Link>
      </main>
    </>
  );
}
