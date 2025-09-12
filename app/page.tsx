import Cover from "./components/home/cover";
import Introduction from "./components/home/introduction";

export default function Home() {
  return (
    <>
      <div className="homeContainer">
        <Cover />
        <Introduction />
      </div>
    </>
  );
}
