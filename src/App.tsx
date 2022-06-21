import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

export function App() {
  const { data } = useQuery(GET_LESSONS_QUERY);
  console.log(data);
  return (
    <div>
      <h1>Ignite lab</h1>
    </div>
  );
}
