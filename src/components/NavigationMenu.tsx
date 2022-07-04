import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function NavigationMenu() {
  const { data } = useGetLessonsQuery();

  return (
    <div className="w-full h-full bg-gray-700 pb-8">
      <div className="pl-6 pr-9 mt-6">
        <strong className="block text-2xl mb-6 pb-6 border-b border-gray-500">
          Cronograma das aulas
        </strong>

        <div className="flex flex-col gap-8">
          {data?.lessons.map((lesson) => (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug!}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
