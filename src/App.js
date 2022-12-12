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
import { Routes, Route, Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import { Button } from "@mui/material";

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

  const navigate = useNavigate();
  return (
    <div className="App">
      {/* Navigation Bar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Advait's Movie App
            </Typography> */}
            <Button
              style={{
                backgroundColor: "#3b8ad9",
                color: "white",
                fontWeight: "700",
                boxShadow: "2px 2px 3px #EDF2F6",
                margin: "0 .1em",
              }}
              onClick={() => navigate("/movies-section")}
            >
              Movies List
            </Button>
            <Button
              style={{
                backgroundColor: "#3b8ad9",
                color: "white",
                fontWeight: "700",
                boxShadow: "2px 2px 3px #EDF2F6",
                margin: "0 2em",
              }}
              onClick={() => navigate("/add-movies")}
            >
              Add Movie
            </Button>

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
        {/* <Route path="404" element={<NotFound />} /> */}
        {/* <Route path="*" element={<Navigate replace to="/404" />} /> */}


        <Route path="/movie/:id" element={<MovieDetails movieList={movieList}/>}></Route>
      </Routes>

    </div>
  );
}

function MovieDetails({movieList}){
  const {id} = useParams();
  console.log(id);
  const movie = movieList[id];
  console.log(movie)
  return(<div>
    <h1>Movie Details Page.{movie.name} </h1>
  </div>)
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
    <div
      style={{
        width: "100%",
        aspectRatio: "1",
        objectFit: "fill",
        marginTop: "10em",
      }}
    >
      <img src="https://bsmedia.business-standard.com/_media/bs/img/about-page/thumb/464_464/1599716993.jpg" />
    </div>
  );
}

export default App;
