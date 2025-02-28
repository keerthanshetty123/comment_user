import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Container,
} from "@mui/material";
import { Usercomments } from "./Comments";
interface Comment {
  id: number;
  user: string;
  text: string;
  timestamp: string;
}

const Home: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [input, setInput] = useState<string>("");
  const [user, setUser] = useState<string>("");

  const addComment = () => {
    if (input.trim() === "" || user.trim() === "") return;

    const newComment: Comment = {
      id: Date.now(),
      user: user,
      text: input,
      timestamp: new Date().toLocaleString(),
    };

    setComments([newComment, ...comments]);
    setInput("");
  };

  return (
    <Container maxWidth="sm">
      <Card sx={{ mt: 4, p: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            User Comments
          </Typography>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Add a comment"
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={addComment}
          >
            Post
          </Button>
        </CardContent>
      </Card>
      <Usercomments commentuser={comments} />
    </Container>
  );
};

export default Home;
