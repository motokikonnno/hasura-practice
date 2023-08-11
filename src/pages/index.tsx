import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8080/v1/graphql",
  cache: new InMemoryCache(),
});

const WithApolloProvider = ({ children }: React.PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

const GetSample = () => {
  const SAMPLE = gql`
    query {
      sample {
        id
        name
      }
    }
  `;

  const { data } = useQuery(SAMPLE);
  console.log(data);

  return (
    <div>
      {/* {data.sample.map((hoge: any) => (
        <div key={hoge.id}>
          <p>{hoge.id}</p>
          <p>{hoge.name}</p>
        </div>
      ))} */}
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <WithApolloProvider>
        <GetSample />
      </WithApolloProvider>
    </div>
  );
}
