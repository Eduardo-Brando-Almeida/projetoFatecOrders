import { ListItemText } from "@mui/material";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useRouter } from "next/navigation";

interface CustomListItemProps {
  text: string;
  path: string;
  icon: React.ReactNode;
}

const CustomListItem: React.FC<CustomListItemProps> = ({
  icon,
  path,
  text,
}) => {
  const router = useRouter();

  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={() => {
          router.push(path);
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default CustomListItem;
