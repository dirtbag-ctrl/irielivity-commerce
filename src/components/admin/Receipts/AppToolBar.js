import React from "react";
import { Card, makeStyles, Box } from "@material-ui/core";

//icons
import { CreditCard as ReceiptsIcon } from "react-feather";

const useStyles = makeStyles((theme) => ({
  root: {},
  card: {
    height: "45px",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    borderRadius: "30px",
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "16px",
    color: "black",
  },
}));

export default function AppToolBar() {
  // styles declartion
  const classes = useStyles();

  return (
    <Box maxWidth={230}>
      <Card className={classes.card} elevation={10}>
        <ReceiptsIcon style={styles.icon} /> Payment Receipts
      </Card>
    </Box>
  );
}

const styles = {
  icon: {
    marginTop: "-5px",
    fontSize: "11px",
    marginRight: "5px",
    color: "#383A3F",
  },
};
