import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import debounce from "lodash.debounce";
import { useRouter } from "next/router";

import { getCommunitiesByTerm } from "../../../lib/models/community/queries";
import { Community } from "../../../lib/models/community/Community";

export default function SearchInput() {
  const router = useRouter();

  const [userInput, setUserInput] = useState<string>("");
  const [totalOptions, setTotalOptions] = useState<Community[]>([]);

  const deboucedValue = debounce((value) => {
    if (!value) {
      return;
    }

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

  const onSelect = (e: any, value: string | null) => {
    if (!value) {
      return;
    }

    const community = totalOptions.find(
      (community) => value === community.community_name
    );

    router.push(`/community/${community?.community_id}`);
  };

  return (
    <Stack>
      <Autocomplete
        options={totalOptions.map((option) => option.community_name)}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              value={userInput}
              placeholder="Search Communities"
            />
          );
        }}
        onInputChange={(e: any) => deboucedValue(e?.target.value)}
        noOptionsText="No communities found"
        clearOnEscape={true}
        clearOnBlur={true}
        popupIcon={""}
        // @ts-ignore
        onChange={(e, value) => onSelect(e, value)}
      />
    </Stack>
  );
}
