import { ArrowRight } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="h-full w-full max-w-[800px] max-h-[60vh] flex items-center justify-center gap-4 bg-gray-700 rounded">
              <span className="text-2xl">Acesse uma aula para começar</span>
              <ArrowRight size={40} />
            </div>
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  );
}
