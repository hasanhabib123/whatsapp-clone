import { useState } from "react";

import { Box } from "@mui/material";

//components
import Conversations from "./Conversations";
import Header from "./Header";
import Search from "./Search";

const Menu = () => {
  const [text, setText] = useState("");

  return (
    <Box>
      <Header />
      <Search setText={setText} />
      <Conversations text={text} />
    </Box>
  );
};

export default Menu;
