import MainLayout from "./layout/MainLayout";
import NavigationRoutes from "./navigation/NavigationRoutes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 ">
      <QueryClientProvider client={queryClient}>
        <MainLayout>
          <NavigationRoutes />
        </MainLayout>
      </QueryClientProvider>
    </div>
  );
}

export default App;
