import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useState, useEffect } from "react";
import { getCommunitiesByTerm } from "../../../lib/models/community/queries";
import { Community } from "../../../lib/models/community/Community";
import debounce from "lodash.debounce";

export default function SearchInput() {
  const [userInput, setUserInput] = useState<string>("");
  const [totalOptions, setTotalOptions] = useState<Community[]>([]);

  const deboucedValue = debounce((value) => {
    onInputChange(value);
  }, 400);

  const onInputChange = async (value: string) => {
    if (!value) {
      setTotalOptions([]);
      return;
    }

    setUserInput(value);

    // make api call

    const communities = await getCommunitiesByTerm(value);

    // once succesful, setState for new options

    setTotalOptions(communities);
  };

  return (
    <Stack>
      <Autocomplete
        options={totalOptions.map(
          (option) => `${option.community_name}: ${option.caption}`
        )}
        renderInput={(params) => {
          return <TextField {...params} />;
        }}
        onInputChange={(e: any) => deboucedValue(e.target.value)}
        clearOnBlur={false}
        clearOnEscape={false}
        noOptionsText="No Communities found"
        popupIcon={""}
      />
    </Stack>
  );
}
