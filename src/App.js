import "./App.css";
import AddMovie from "./components/AddMovie";
import MovieCard from "./components/MovieCard";
import { useState } from "react";
import { INITIAL_MOVIE_LIST } from "./INITIAL_MOVIE_LIST";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";

function App() {
  const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);
  const [search, setSearch] = useState("");
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Advait's Movie App
            </Typography>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>

      <ul>
        <li>
          <Link to="/movies-section">Movies</Link>
        </li>
        <li>
          <Link to="/add-movies">Add Movie</Link>
        </li>
      </ul>
      <Routes>
        {/* add movies */}
        <Route
          path="/add-movies"
          element={
            <AddMovie
              setMovieList={setMovieList}
              movieList={movieList}
              className="add-movie-comp"
            />
          }
        />
        {/* movies section */}
        <Route
          path="/films"
          element={<Navigate replace to="/movies-section" />}
        />
        <Route
          path="/movies-section"
          element={
            <div className="row movie-container">
              {/* movie list is filtered using the search term and drilled as a prop in moviecard component */}
              <MovieCard
                movieList={movieList.filter((mv) =>
                  mv.name.toLowerCase().includes(search.toLowerCase())
                )}
              />
            </div>
          }
        />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="404" element={<NotFound />} />


        <Route path="*" element={<Navigate replace to ="/404" />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to React App</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This is the about page.</h1>
    </div>
  );
}

function NotFound() {
  return (
    <div style={{ width: "100%", aspectRatio: "1", objectFit: "fill", marginTop:"10em"}}>
      <img src="https://bsmedia.business-standard.com/_media/bs/img/about-page/thumb/464_464/1599716993.jpg" />
    </div>
  );
}

export default App;
