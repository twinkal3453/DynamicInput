import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

const InputComponent = () => {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };

  console.log(inputList);

  return (
    <div>
      {inputList.map((item, index) => {
        return (
          <div key={index} className="container__text">
            <input
              className="text__inputs"
              name="firstName"
              placeholder="Enter First Name"
              value={item.firstName}
              onChange={(event) => handleInputChange(event, index)}
            />
            <input
              className="text__inputs"
              name="lastName"
              placeholder="Enter Last Name"
              value={item.lastName}
              onChange={(event) => handleInputChange(event, index)}
            />
            {inputList.length !== 1 && (
              <Box sx={{ "& > :not(style)": { mr: 1 } }}>
                <Fab
                  onClick={() => handleRemoveClick(index)}
                  size="small"
                  color="error"
                  aria-label="add"
                >
                  <RemoveRoundedIcon />
                </Fab>
              </Box>
            )}
            {inputList.length - 1 === index && (
              <Box sx={{ "& > :not(style)": { mr: 1 } }}>
                <Fab
                  onClick={handleAddClick}
                  size="small"
                  color="primary"
                  aria-label="add"
                >
                  <AddIcon />
                </Fab>
              </Box>
            )}
          </div>
        );
      })}
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  );
};

export default InputComponent;
