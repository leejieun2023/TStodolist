import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/Header";
import Working from "./components/Working";
import Done from "./components/Done";
import styled from "styled-components";

const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Stbackground>
        <StLayout>
          <Sth1>ToDoList</Sth1>
          <Header></Header>
          <Working></Working>
          <Done></Done>
          </StLayout>
        </Stbackground>
    </QueryClientProvider>
  );
}

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const Stbackground = styled.div`
  background-image: url('https://img.freepik.com/premium-vector/ripped-blank-white-line-school-paper_97886-13847.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center -70px;
  min-height: 100vh;
`;
const Sth1 = styled.h1`
  font-family: "Mandali Ones", cursive;
  margin: 10px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  color: #fdcac9;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
`;


export default App;