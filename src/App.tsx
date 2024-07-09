// Internal
// Components
import Select from "./components/Select";
import InputField from "./components/InputField";
// Styles
import "./App.scss";
import Button from "./components/Button";
import Container from "./components/Container";

// Main Component render
function App() {
  return (
    <main>
      <section>
        <form>
          <Container flexed>
            <InputField
              id="domain_input"
              name="domain_input"
              type="text"
              onChange={() => {}}
              placeHolder="Search"
            />
            <Select id="type" name="type" onChange={() => {}}>
              <Select.Options value={1}>Domain Information</Select.Options>
              <Select.Options value={2}>Contact Information</Select.Options>
            </Select>
            <Button
              color="dark"
              onClick={() => {}}
              type="submit"
              size="md"
              variant="primary"
            >
              Submit
            </Button>
          </Container>
        </form>
      </section>
    </main>
  );
}

export default App;
