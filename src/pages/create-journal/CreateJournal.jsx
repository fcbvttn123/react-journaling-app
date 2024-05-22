import { Container, Typography } from "@material-ui/core";
import { Form } from "./Form";

export function CreateJournal() {
  return (
    <Container className="mt-20">
      <Typography variant="h4" component="h1" color="primary" gutterBottom>Create Your Today's Journal</Typography>
      <Form />
    </Container>
  );
}
