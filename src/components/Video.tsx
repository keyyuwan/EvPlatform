import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from "phosphor-react";
import { useGetLessonBySlugQuery } from "../graphql/generated";

import "@vime/core/themes/default.css";

interface VideoProps {
  lessonSlug: string;
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <span className="font-bold text-2xl">Carregando conteúdo...</span>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube key={data.lesson.videoId} videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-6 max-w-[1100px] mx-auto lg:p-8">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:gap-16">
          <div className="flex-1">
            <h1 className="text-lg font-bold lg:text-2xl">
              {data.lesson.title}
            </h1>
            <p className="text-sm mt-4 text-gray-200 leading-relaxed lg:text-base">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={data.lesson.teacher.avatarURL}
                  alt=""
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                />

                <div className="leading-relaxed">
                  <strong className="text-lg font-bold block lg:text-2xl">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="w-full flex flex-col gap-4 lg:w-auto">
            <a
              href="#"
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade do discord
            </a>
            <a
              href="#"
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="gap-4 mt-16 grid lg:gap-8 lg:mt-20 lg:grid-cols-2">
          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-4 hover:bg-gray-600 transition-colors lg:gap-6"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-4 lg:leading-relaxed lg:py-6">
              <strong className="text-lg lg:text-2xl">
                Material complemetar
              </strong>
              <p className="leading-relaxed text-gray-200 mt-1 text-xs lg:text-sm lg:mt-2 lg:leading-normal">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="p-4 h-full flex items-center lg:p-6">
              <CaretRight size={24} className="text-blue-500" />
            </div>
          </a>

          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-4 hover:bg-gray-600 transition-colors lg:gap-6"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <Image size={40} />
            </div>
            <div className="py-4 lg:leading-relaxed lg:py-6">
              <strong className="text-lg lg:text-2xl">
                Wallpapers exclusivos
              </strong>
              <p className="leading-relaxed text-gray-200 mt-1 text-xs lg:text-sm lg:mt-2 lg:leading-normal">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className="p-4 h-full flex items-center lg:p-6">
              <CaretRight size={24} className="text-blue-500" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
