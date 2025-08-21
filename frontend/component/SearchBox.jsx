import { Close, Search } from "@mui/icons-material";
import { Button, Card, CardContent, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import React, { useState } from "react";

export default function SearchBox({ data }) {
  const [searchText, setSearchText] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const handleFilter = (e) => {
    e?.preventDefault();
    const searchword = e.target.value;
    setSearchText(searchword);
    // console.log("data", data);
    const newfilter = data.filter((value) => {
      const a = Object.values(value)
        .join(" ")
        .toLowerCase()
        .includes(searchword.toLowerCase());
      return a;
    });
    // console.log("newFILTER", newfilter);
    if (searchword === "") {
      setFilterData([]);
    } else {
      setFilterData(newfilter);
    }
  };
  return (
    <>
      <Card className="mb-4 overflow-visible">
        <CardContent className="d-flex gap-3 position-relative">
         <OutlinedInput
          name="search"
          placeholder="Search...."
          value={searchText || ""}
          onChange={handleFilter}
          startAdornment={
            <InputAdornment position="start">
              <IconButton edge="start">
                {
                  searchText.length !== 0 ? <><Close onClick={()=>{
                    setSearchText([]);
                    setFilterData([]);
                  }}></Close></> : <Search></Search>
                }
               
              </IconButton>
            </InputAdornment>
          }
          aria-describedby="search-text"
          sx={{borderRadius:'8px',width:"85%",'& .MuiInputBase-input':{height:"1em"}}}
         >
         </OutlinedInput>
          {/* <input
            className="form-control w-75"
            name="search"
            placeholder="Search..."
            value={searchText || ""}
            onChange={handleFilter}
          ></input> */}
          {searchText.length > 0 ? (
            <>
              {filterData.length > 0 ? (
                <>
                  <div className="suggestionBox" >
                    {filterData.map((item, index) => {
                      if(item?.title){
                         return <a key={index} href={item?.slug} onClick={()=>setSearchText([])}>{item?.title}</a>;
                      }else{
                         return <a key={index} href={item?.category_slug} onClick={()=>setSearchText([])}>{item?.category_name}</a>;
                      }
                    })}
                  </div>
                </>
              ) : (
                <>
                  <div className="suggestionBox h-100 align-content-center">
                    <p className="mb-0 fw-bold text-center">No Blog Data Found!</p>
                  </div>
                </>
              )}
            </>
          ) : (
            <></>
          )}
          <Button variant="outlined" className="fw-bold" sx={{minWidth:"105px",fontSize:"1rem",padding:"0px 15px"}}>search</Button>
        </CardContent>
      </Card>
    </>
  );
}
