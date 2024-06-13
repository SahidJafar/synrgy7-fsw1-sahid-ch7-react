import { Grid, Card, Container } from "@mui/material";
import React from "react";
const ResultComponent = ({ result, menu }) => {
  return (
    // <div>
    //   <div>Result:</div>
    //   <div>{result}</div>
    //   <div>Menus:</div>
    //   <ol>
    //     {menu.map((row, i) => (
    //       <li key={i}>{row}</li>
    //     ))}
    //   </ol>
    // </div>

    <Container>
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {menu
          .filter((row) => row.toLowerCase().includes(result.toLowerCase()))
          .map((row, i) => {
            // Add return statement here
            return (
              <Grid item xs={4} key={i}>
                <Card>{row}</Card>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};
export default ResultComponent;
