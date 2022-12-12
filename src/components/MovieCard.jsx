import {IconButton } from "@mui/material";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import GradeIcon from "@mui/icons-material/Grade";
import CardActions from "@mui/material/CardActions";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";


export default function MovieCard({ movieList }) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return movieList.map((el,index, id={index}) => {
    return (
      <Card sx={{ maxWidth: 345 }} className="movie-card " key={index}>
        <CardMedia
          className="movie-poster pt-4"
          component="img"
          height="400em"
          image={el.poster}
          alt={el.name + " name"}
        />
        <Box>
          <CardContent className="top-section">
            {/* title and toggle button */}
            <Box className="tilte-box" display={"flex"} alignItems="center">
              <Typography component="div" variant="h6" className="title">
                {el.name}
              </Typography>
              <IconButton
                className="summary-toggle"
                color={"primary"}
                aria-label="Movie Summary Toggle"
                onClick={() => {
                  setShow(!show);
                }}
              >
                {show ? (
                  <ArrowDropUpIcon></ArrowDropUpIcon>
                ) : (
                  <ArrowDropDownCircleIcon></ArrowDropDownCircleIcon>
                )}
              </IconButton>
            </Box>

            {/* movie rating */}
            <Typography variant="h8" component="div" display={"flex"}>
              <GradeIcon color="error"></GradeIcon> {el.rating}
            </Typography>
          </CardContent>

          {/* release date */}
          <Box display={"flex"} justifyContent={"space-between"} flexDirection={"row-reverse"} className={"container"}>
            <IconButton onClick={()=> navigate(`/movies/${index}`)} >
              <InfoIcon></InfoIcon>
            </IconButton>
            <Typography variant="h8" component="div" className="release-date">
              {"Release Date: " + el.release}
            </Typography>
          </Box>
        </Box>

        {/* like dislike & summary box */}
        <Box
          display={"flex"}
          flexDirection="column"
          alignItems={"end"}
          my={".5em"}
        >
          {show ? (
            <Typography
              variant="p"
              component="div"
              className="movie-summary"
              textAlign={"start"}
            >
              {el.movieSum}
            </Typography>
          ) : (
            ""
          )}
          <CardActions className="like-dislike-box">
            <IconButton
              color="primary"
              onClick={() => {
                setLike(like + 1);
              }}
            >
              <Badge badgeContent={like} color="secondary">
                <ThumbUpIcon color="primary"></ThumbUpIcon>
              </Badge>
            </IconButton>
            <IconButton
              onClick={() => {
                setDislike(dislike + 1);
              }}
            >
              <Badge badgeContent={dislike} color="secondary">
                <ThumbDownIcon color="error"></ThumbDownIcon>
              </Badge>
            </IconButton>
          </CardActions>
        </Box>
      </Card>
    );
  });

  // <div className="card col movie-card col-lg-4 col-sm-12">
  //   <img
  //     src={posterUrl}
  //     className="card-img-top img-fluid movie-poster"
  //     alt="MovieName"
  //   ></img>
  //   <div className="card-body">
  //     <div className="card-title">
  //       <div className="movie-name">
  //         {name}{" "}
  //         <IconButton color={"#fffac8"} aria-label="ArrowDropDownCircleIcon" onClick={()=>{setShow(!show)}}>
  //           {show?<ArrowDropUpIcon></ArrowDropUpIcon>:<ArrowDropDownCircleIcon></ArrowDropDownCircleIcon>}
  //         </IconButton>
  //       </div>

  //       <div className="movie-rating">
  //         <img
  //           className="starIcon"
  //           src="https://freesvg.org/img/hp_gold_star.png"
  //         ></img>
  //         {movieRating}
  //       </div>
  //     </div>
  //     <div className="release-date">
  //       <p>Release Date: {releaseDate}</p>
  //     </div>
  //     {show ? <div className="card-text">{movieSum}</div> : ""}
  //     <div className="likeDislike">
  // <IconButton
  //   color="primary"
  //   onClick={() => {
  //     setLike(like + 1);
  //   }}
  // >
  //   <Badge badgeContent={like} color="success">
  //     👍
  //   </Badge>
  // </IconButton>
  // <IconButton
  //   onClick={() => {
  //     setDislike(dislike + 1);
  //   }}
  // >
  //   <Badge badgeContent={dislike} color="error">
  //     👎
  //   </Badge>
  // </IconButton>
  //     </div>
  //   </div>
  // </div>
}
