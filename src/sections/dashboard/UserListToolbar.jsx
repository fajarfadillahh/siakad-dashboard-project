import React from "react";
import PropTypes from "prop-types";
import { Toolbar, Tooltip, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// import components
import Iconify from "../../components/iconify";

// ------------------------------------

const StyledRoot = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(0, 2),
}));

UserListToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};

export default function UserListToolbar({
  numSelected,
  filterName,
  onFilterName,
}) {
  return (
    <StyledRoot
      sx={{
        ...(numSelected > 0 && {
          color: "primary.main",
          bgcolor: "primary.lighter",
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <label className="relative inline-flex items-center">
          <Iconify
            icon="heroicons-outline:search"
            className="absolute left-4 text-gray-500"
          />
          <input
            type="text"
            value={filterName}
            onChange={onFilterName}
            placeholder="Search user..."
            className="h-[48px] max-w-[210px] rounded-md border-gray-300 bg-transparent pl-12 font-medium text-gray-900 transition-all placeholder:text-gray-500 focus:max-w-[250px] focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <Iconify icon="heroicons-outline:trash" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Add User">
          <IconButton>
            <Iconify icon="heroicons-outline:plus" />
          </IconButton>
        </Tooltip>
      )}
    </StyledRoot>
  );
}
