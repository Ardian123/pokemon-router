import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Kanto, { kantoLoader } from "./pages/pokedex/Kanto";
import Johto, { johtoLoader } from "./pages/pokedex/Johto";
import Hoenn, { hoennLoader } from "./pages/pokedex/Hoenn";
import Sinnoh, { sinnohLoader } from "./pages/pokedex/Sinnoh";
import Unova, { unovaLoader } from "./pages/pokedex/Unova";
import Kalos, { kalosLoader } from "./pages/pokedex/Kalos";
import Alola, { alolaLoader } from "./pages/pokedex/Alola";
import Galar, { galarLoader } from "./pages/pokedex/Galar";
import Paldea, { paldeaLoader } from "./pages/pokedex/Paldea";

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
        <Route path="kanto" loader={kantoLoader} element={<Kanto />}></Route>
        <Route path="johto" loader={johtoLoader} element={<Johto />}></Route>
        <Route path="hoenn" loader={hoennLoader} element={<Hoenn />}></Route>
        <Route path="sinnoh" loader={sinnohLoader} element={<Sinnoh />}></Route>
        <Route path="unova" loader={unovaLoader} element={<Unova />}></Route>
        <Route path="kalos" loader={kalosLoader} element={<Kalos />}></Route>
        <Route path="alola" loader={alolaLoader} element={<Alola />}></Route>
        <Route path="galar" loader={galarLoader} element={<Galar />}></Route>
        <Route path="paldea" loader={paldeaLoader} element={<Paldea />}></Route>
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
