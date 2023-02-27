import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Kanto from "./pages/pokedex/Kanto";
import Johto from "./pages/pokedex/Johto";
import Hoenn from "./pages/pokedex/Hoenn";
import Sinnoh from "./pages/pokedex/Sinnoh";
import Unova from "./pages/pokedex/Unova";
import Kalos from "./pages/pokedex/Kalos";
import Alola from "./pages/pokedex/Alola";
import Galar from "./pages/pokedex/Galar";
import Paldea from "./pages/pokedex/Paldea";

// Error page
import NotFound from "./pages/NotFound";

// Layout
import RootLayout from "./layouts/RootLayout";
import PokedexLayout from "./layouts/PokedexLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="pokedex" element={<NotFound />} />
      <Route path="pokedex" element={<PokedexLayout />}>
        <Route path="kanto" element={<Kanto />}></Route>
        <Route path="johto" element={<Johto />}></Route>
        <Route path="hoenn" element={<Hoenn />}></Route>
        <Route path="sinnoh" element={<Sinnoh />}></Route>
        <Route path="unova" element={<Unova />}></Route>
        <Route path="kalos" element={<Kalos />}></Route>
        <Route path="alola" element={<Alola />}></Route>
        <Route path="galar" element={<Galar />}></Route>
        <Route path="paldea" element={<Paldea />}></Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
