import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { model } from "./model";
interface Props {
  commentuser: model[];
}
export const Usercomments: React.FC<Props> = ({ commentuser }:Props) => {
  return (
    <div>
      <List sx={{ mt: 2 }}>
        {commentuser.map((comment) => (
          <ListItem key={comment.id} divider>
            <ListItemText
              primary={`${comment.user}: ${comment.text}`}
              secondary={comment.timestamp}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
