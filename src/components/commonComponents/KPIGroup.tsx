import { Box, Card, Stack } from "@mui/material";

export const KPIDoublet = ({
    title="",
    doubleData,
    direction="row",
    seperator = true,
    fontSize = "36px",
  }: {
    title?:string
    doubleData: {
      data: string | number;
      description: string;
      descriptionTwo?: string;
      whiteText?: string;
      alert?: boolean;
    }[];
    direction?: "row"|"column";
    seperator?: boolean;
    fontSize?: string;
  }) => {
    return (
        <Card sx={{display:"flex",flexDirection:"column",flexGrow:1}}>
            <Box sx={{width:"100%",fontSize:"12px",color:"#6e6e6e",textAlign:"center"}}>
            {title}
            </Box>
      <Box
        className="KPIDoublet"
        style={{
          display: "flex",
          height: "calc(100% - 10px)",
          flexDirection: direction,
          alignItems: "center",
          gap: "10px",
          padding:"5px"

        }}
      >
        {doubleData.map((i, index) => {
          return (
            <>
              <div
                className="KPI-doublet-KPI"
                style={{
                  display: "flex",
                //   height: "50%",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <div
                  className="KPIDoublet-data"
                  style={{
                    fontSize: fontSize,
                    fontWeight: "700",
                    color: i.alert ? "rgba(255, 126, 126, 1)" : "black",
                  }}
                >
                  {parseFloat(i.data.toString()).toLocaleString()}
                </div>
                <div
                  className="KPIDoublet-description"
                  style={{
                    fontWeight: "400",
                    color: "#969696",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "700",
                      color: "rgb(215,215,215)",
                      display: "inline",
                    }}
                  >
                    {i.whiteText}
                  </div>
                  {i.description}
                  <div></div>
                  {i.descriptionTwo}
                </div>
              </div>
              {index != doubleData.length-1 && seperator ? (
                <div
                  className="KPIDoubletDivider"
                  style={{
                    // width: "60%",
                    width:"2px",
                    height:"80%",
                    borderLeft: "0.5px solid rgba(204, 204, 204, 0.5)",
                    alignSelf: "center",
                  }}
                ></div>
              ) : (
                <></>
              )}
            </>
          );
        })}
      </Box>
      </Card>
    );
  };