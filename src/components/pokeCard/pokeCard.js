import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { OFFICIAL_IMAGE_URL } from "../../config";

function PokeCard({ pokemon }) {
  return (
    <Card sx={{ height: 300 }}>
      <CardActionArea href={"/" + pokemon.id}>
        <CardMedia
          component="img"
          height="140"
          image={OFFICIAL_IMAGE_URL + pokemon.id + ".png"}
          alt=""
        />

        <CardContent>
          <Typography>{pokemon.name}</Typography>
          <Typography>#:{pokemon.id}</Typography>
          {pokemon.types.map((type) => {
            return <Typography>{type.type.name}</Typography>;
          })}
          <Typography>{pokemon.weight}</Typography>
          <Typography>{pokemon.height}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default PokeCard;
