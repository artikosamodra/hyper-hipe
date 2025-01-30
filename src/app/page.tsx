import MainPage from "@/app/components/pages/MainPage";
import Background from "./components/molecules/Background";

export default function Home() {
  return (
    <div className="w-full h-full relative">
      <Background />
      <MainPage />
    </div>
  );
}
