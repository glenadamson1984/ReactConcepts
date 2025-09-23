import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTodos, createTodo, type Todo } from "./my-api";

function App() {
  // Access the client
  const queryClient = useQueryClient();

  //Queries
  const query = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  //Mutations
  const mutation = useMutation({
    mutationFn: createTodo,
    // with a real backend this is perfect but since we are using a mock server we need to manual add
    //since prism mock server does not persist the data we need to manually add the new todo to the query data
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ["todos"] });
    // },
    onSuccess: (created) => {
      queryClient.setQueryData<Todo[]>(["todos"], (old) => {
        return old ? [...old, created] : [created];
      });
    },
  });

  return (
    <>
      <div>
        <ul>
          {query.data?.map((todo: Todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => {
          mutation.mutate({
            title: "Do Laundry",
          });
        }}
      >
        Add Todo
      </button>
    </>
  );
}

export default App;
