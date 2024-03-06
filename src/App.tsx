import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/Header";
import Working from "./components/Working";
import Done from "./components/Done";

const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
      <h1>ToDoList</h1>
      <Header></Header>
      <Working></Working>
      <Done></Done>
      </>
    </QueryClientProvider>
  );
}

export default App;