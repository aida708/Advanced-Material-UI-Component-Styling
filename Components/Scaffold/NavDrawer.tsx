import React from "react";
import {
  Drawer,
  AppBar,
  Typography,
  Toolbar,
  List,
  ListItem,
} from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ContactForm from "../Form/ContactForm";
import { useTheme, Theme } from "@mui/material/styles";

const drawerWidth = 240;
const styles = {
  //jss --css and css --jss
  drawer: {
    width: drawerWidth,
    "& .MuiDrawer-root": {
      //selecor looking for a child to style ; nested selectors
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "red",
  },
  content: {
    marginLeft: drawerWidth,
    padding: 3,
  },
};

const themedStyles = (theme: Theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  };
};

export default function NavDrawer() {
  const theme = useTheme();
  return (
    <BrowserRouter>
      <div>
        <AppBar position="fixed" sx={themedStyles(theme).appBar}>
          <Toolbar>
            <Typography variant="h4" noWrap>
              Advanced Material UI Styling
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="temporary"
          open={true}
          sx={styles.drawer}
          PaperProps={{
            sx: styles.drawerPaper,
            elevation: 9, //the lower the value, the higher is box shadow
          }}>
          {/* links for routig */}

          <Toolbar />
          <List>
            {[
              { text: "Input Form ", route: "/form" },
              { text: "Contact Card Grid idaaa", route: "./grid" },
              { text: "table", route: "./table" },
            ].map((nav, index) => (
              <ListItem key={nav.text}>
                <Link to={nav.route}>{nav.text}</Link>
              </ListItem>
            ))}
          </List>

          <main style={styles.content}>
            <Toolbar />
            <Routes>
              <Route path={"/"} element={<ContactForm />} />
              <Route path={"/form"} element={<ContactForm />} />
              <Route path="/grid" element={<div>Grid</div>} />
              <Route path="/table" element={<div>Table</div>} />
            </Routes>
          </main>
        </Drawer>
        <main></main>
      </div>
    </BrowserRouter>
  );
}
