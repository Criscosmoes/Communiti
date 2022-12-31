import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useState, useEffect } from "react";
import { getCommunitiesByTerm } from "../../../lib/models/community/queries";
import { Community } from "../../../lib/models/community/Community";

export default function SearchInput() {
  const [userInput, setUserInput] = useState<string>("");
  const [totalOptions, setTotalOptions] = useState<Community[]>([]);

  const onInputChange = async (e: any) => {
    if (!e.target.value) {
      return;
    }

    setUserInput(e.target.value);

    // make api call

    const communities = await getCommunitiesByTerm(e.target.value);

    // once succesful, setState for new options

    setTotalOptions(communities);
  };

  return (
    <Stack>
      <Autocomplete
        options={totalOptions.map((option) => option.community_name)}
        renderInput={(params) => {
          return <TextField {...params} />;
        }}
        onInputChange={onInputChange}
        clearOnBlur={false}
        clearOnEscape={false}
        noOptionsText="No Communities found"
        popupIcon={""}
      />
    </Stack>
  );
}
