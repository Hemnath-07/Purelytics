import dynamic from "next/dynamic";

const Charts = dynamic(() => import("../../components/Charts"), {
  ssr: false,
});

export default function Page() {
  return <Charts />;
}
