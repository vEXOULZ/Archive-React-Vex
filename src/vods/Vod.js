import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import CustomLink from "../utils/CustomLink";
import sadge from "../assets/sadge.jpg";
import Chapters from "./ChaptersMenu";
import CustomWidthTooltip from "../utils/CustomToolTip";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
dayjs.extend(localizedFormat);

export default function Vod(props) {
  const { vod, gridSize } = props;
  const DEFAULT_VOD = vod.youtube.length > 0 ? `/youtube/${vod.id}` : vod.games.length > 0 ? `/games/${vod.id}` : `#`;
  const DEFAULT_THUMBNAIL = vod.thumbnail_url ? vod.thumbnail_url : vod.games.length > 0 ? vod.games[0].thumbnail_url : sadge;

  return (
    <Grid item xs={gridSize} sx={{ maxWidth: "18rem", flexBasis: "18rem" }}>
      <Box
        sx={{
          overflow: "hidden",
          height: 0,
          paddingTop: "56.25%",
          position: "relative",
          "&:hover": {
            boxShadow: "0 0 8px #fff",
          },
        }}
      >
        <Link href={DEFAULT_VOD}>
          <img className="thumbnail" alt="" src={DEFAULT_THUMBNAIL} />
        </Link>
        <Box sx={{ pointerEvents: "none", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
          <Box sx={{ position: "absolute", bottom: 0, left: 0 }}>
            <Typography variant="caption" sx={{ p: 0.3, backgroundColor: "rgba(0,0,0,.6)" }}>
              {`${dayjs(vod.createdAt).format("LL")}`}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ pointerEvents: "none", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
          <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
            <Typography variant="caption" sx={{ p: 0.3, backgroundColor: "rgba(0,0,0,.6)" }}>
              {`${vod.duration}`}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 1, mb: 1, display: "flex" }}>
        {vod.chapters && vod.chapters.length > 0 && <Chapters vod={vod} />}
        <Box sx={{ minWidth: 0, width: "100%" }}>
          <Box sx={{ p: 0.5 , "line-height": "0.8"}}>
            <CustomWidthTooltip title={vod.title} placement="top">
              <span>
                <CustomLink href={DEFAULT_VOD}>
                  <Typography variant="caption" color="primary" sx={{ fontWeight: "550"}}>
                    {vod.title}
                  </Typography>
                </CustomLink>
              </span>
            </CustomWidthTooltip>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
