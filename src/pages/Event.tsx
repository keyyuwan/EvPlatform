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
          <div className="mt-10 flex-1 flex items-start justify-center">
            <div className="max-w-[320px] max-h-[60vh] h-full w-full flex flex-col items-center justify-center gap-4 bg-gray-700 rounded lg:max-w-[800px] lg:flex-row">
              <span className="text-center text-2xl">
                Acesse uma aula para começar
              </span>
              <ArrowRight size={40} />
            </div>
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  );
}
