import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function AddMovie({ setMovieList, movieList }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [summary, setSummary] = useState("");

  const addMovie = () => {
    const newMovie = {
      name,
      rating,
      poster,
      summary,
    };
    console.log(movieList);
    console.log(newMovie);
    setMovieList([...movieList, newMovie]);

    console.log(movieList);
  };

  return (
    <div className="add-movie-form">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Rating"
          variant="outlined"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Release Year"
          variant="outlined"
          value={releaseDate}
          onChange={(event) => setReleaseDate(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Poster URL"
          variant="outlined"
          value={poster}
          onChange={(event) => setPoster(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Summary"
          variant="outlined"
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
        />
      </Box>

      <Button onClick={addMovie} variant="outlined">
        Add Movie
      </Button>
      
    </div>
  );
}
