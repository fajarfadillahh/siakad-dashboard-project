//
import Card from "./Card";
import Paper from "./Paper";
import Input from "./Input";
import Table from "./Table";
import Tooltip from "./Tooltip";
import Typography from "./Typography";
import Autocomplete from "./Autocomplete";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Card(theme),
    Table(theme),
    Input(theme),
    Paper(theme),
    Tooltip(theme),
    Typography(theme),
    Autocomplete(theme)
  );
}
