import React from "react";
import { Container, Button, Grid } from "@mui/material";

const InputComponent = ({ setResult, result, newMenuItem, setNewMenuItem, addMenuItem }) => {
  const handleChange = (valueInput) => {
    setResult(valueInput);
  };

  const handleNewMenuItemChange = (e) => {
    setNewMenuItem(e.target.value);
  };
  return (
    // <div>
    //   <div>Name Input</div>
    //   <input onChange={(e) => handleChange(e.target.value)} value={result} />
    //   <div>
    //     <input type="text" value={newMenuItem} onChange={handleNewMenuItemChange} placeholder="Add new menu item" />
    //     <button onClick={addMenuItem}></button>
    //   </div>
    // </div>
    <Container>
      <Grid container justifyContent="center" direction="column">
        <Grid item>Name Input</Grid>
        <Grid item>
          <input onChange={(e) => handleChange(e.target.value)} value={result} />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" direction="row" spacing={2} sx={{ mt: 1 }}>
        <Grid item>
          <input type="text" value={newMenuItem} onChange={handleNewMenuItemChange} placeholder="Add new menu item" />
        </Grid>
        <Grid item>
          <Button variant="contained" size="small" onClick={addMenuItem}>
            Add Data
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
export default InputComponent;
