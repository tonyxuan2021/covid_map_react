import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { IconButton } from "@mui/material";
import { useGlobalContext } from "../contextAPI/Context";
import { Link, useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header() {
  // const [countryName, setCountryName] = React.useState("");

  const { countryName, setCountryName, countryData, setCountryData } =
    useGlobalContext();

  const navigate = useNavigate();

  React.useEffect(() => {}, [countryName]);

  const handleOnChange = (e) => {
    setCountryName(e.target.value);
  };

  const handleSearchCountry = () => {
    const fetchData = async () => {
      const fetchedData = await axios.get(
        `https://disease.sh/v3/covid-19/countries/${countryName}?strict=true`
      );

      console.log(fetchedData);
      setCountryData(fetchedData);
      setCountryName("");
    };
    fetchData();
    navigate("/country");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#092c74" }}>
        <Toolbar>
          <Link
            to="/"
            style={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Typography variant="h6" noWrap component="div">
              COVID Dashboard
            </Typography>
          </Link>
          <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={handleOnChange}
              value={countryName}
            />
            <IconButton
              size="large"
              aria-label="search"
              color="inherit"
              onClick={handleSearchCountry}
            >
              <SearchIcon />
            </IconButton>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
