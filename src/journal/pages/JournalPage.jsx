import { AddOutlined } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        {/*  <Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
          asperiores impedit repellendus, alias est praesentium. Sed, voluptatem
          enim suscipit voluptatum praesentium, ullam nisi architecto quis
          quaerat amet asperiores. Nostrum, in?
        </Typography> */}
        {/* <NothingSelectedView /> */}
        {<NoteView />}
        <IconButton
          size="large"
          sx={{
            color: "white",
            backgroundColor: "error.main",
            ":hover": { backgroundColor: "error.main", opacity: 0.9 },
            position: "fixed",
            right: 50,
            bottom: 50,
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
      </JournalLayout>
    </>
  );
};
