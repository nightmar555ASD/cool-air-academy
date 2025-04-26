
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ACUnit from "./pages/ACUnit";
import Components from "./pages/Components";
import ComponentDetail from "./pages/ComponentDetail";
import Videos from "./pages/Videos";
import Quiz from "./pages/Quiz";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ac-unit" element={<ACUnit />} />
          <Route path="/components" element={<Components />} />
          <Route path="/component/:componentId" element={<ComponentDetail />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
