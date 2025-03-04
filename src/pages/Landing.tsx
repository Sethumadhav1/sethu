import { CardGiftcard, GifBoxTwoTone } from "@mui/icons-material";
import { Box, Card, CardActionArea, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const row1 = [
  {
    title: "Eyes on Glass",
    body: "Monitoring Dashboard for platforms and pipelines",
    link: "/Location-1",
  },
  {
    title: "Submit your ticket",
    body: "Create Service Now incidents",
    link: "/Location-3",
  },
  {
    title: "Find Me & Serve yourself!",
    body: "KEDB portal to find Knowledge articles and resolve issues",
    link: "",
  },
];
const row2 = [
  { title: "Gate-keepers Hub", body: "L1 Support", link: "/Location-4" },
  { title: "Mechanics Hub", body: " L2 Support", link: "/Location-5" },
  { title: "Genie", body: "Log Genius", link: "/Location-6" },
];

export function Landing() {
  const navigate = useNavigate();

  return (
    <Stack
      direction={"column"}
      gap="40px"
      minHeight={"80vh"}
      justifyContent={"space-evenly"}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        gap={"10%"}
        px={"10%"}
      >
        {row1.map((i) => (
          <Card
            key={i.title}
            sx={{ cursor: "pointer", flexGrow: 1, flexBasis: "100px" }}
          >
            <CardActionArea
              onClick={() => navigate(i.link)}
              sx={{ padding: "10px", height: "100%" }}
            >
              <Stack direction={"column"} gap="20px">
                <CardGiftcard />
                <Box fontSize={"20px"} fontWeight={700}>
                  {i.title}
                </Box>
                <Box fontSize={"12px"} color={"grey"}>
                  {i.body}{" "}
                </Box>
              </Stack>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        gap={"10%"}
        px={"10%"}
      >
        {row2.map((i) => (
          <Card
            key={i.title}
            sx={{ cursor: "pointer", flexGrow: 1, flexBasis: "100px" }}
          >
            <CardActionArea
              onClick={() => navigate(i.link)}
              sx={{ padding: "10px" }}
            >
              <Stack direction={"column"} gap="20px">
                <CardGiftcard />
                <Box fontSize={"20px"} fontWeight={700}>
                  {i.title}
                </Box>
                <Box fontSize={"12px"} color={"grey"}>
                  {i.body}{" "}
                </Box>
              </Stack>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
}
