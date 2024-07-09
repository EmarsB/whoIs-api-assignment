import { useState } from "react";
// Internal
// Components
import Select from "./components/Select";
import Button from "./components/Button";
import InputField from "./components/InputField";
import Container from "./components/Container";
import Table, {
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "./components/Table";
// Libraries
import useFetchDomain from "./hooks/useFetchDomain";
// Styles
import "./App.scss";

// Main Component render
function App() {
  const [form, setForm] = useState({
    domain: "",
    type: "domain",
  });

  const { data, fetchDomain, errors, loading } = useFetchDomain({
    domain: form.domain,
  });

  console.warn({ data });
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchDomain();
  };

  const table = {
    domain: {
      headerList: [
        "Domain Name",
        "Registrar",
        "Registration Date",
        "Expiration Date",
        "Estimated Domain Age",
        "Hostnames",
      ],
      data: [
        "domainName",
        "registrarName",
        "registrationData",
        "expirationDate",
        "estimatedDomainAge",
        "hostNames",
      ],
    },
    contact: {
      headerList: [
        "Registrant Name",
        "Technical Contact Name",
        "Administrative Contact Name",
        "Contact Email",
      ],
      data: [
        "registrantName",
        "contactEmail",
        "technicalContactName",
        "administrativeContactName",
      ],
    },
  };
  return (
    <main>
      <section>
        <form onSubmit={handleOnSubmit}>
          <Container flexed>
            <InputField
              id="domain_input"
              name="domain_input"
              type="text"
              onChange={(e) => {
                setForm({
                  ...form,
                  domain: e.target.value,
                });
              }}
              placeHolder="Enter a domain"
            />

            <Select
              id="type"
              name="type"
              onChange={(e) =>
                setForm({
                  ...form,
                  type: e.target.value,
                })
              }
            >
              <Select.Options value="domain">Domain Information</Select.Options>
              <Select.Options value="contact">
                Contact Information
              </Select.Options>
            </Select>

            <Button
              color="dark"
              type="submit"
              size="md"
              variant="primary"
              disabled={!form.domain}
            >
              Submit
            </Button>
          </Container>
          <Container>
            <Table>
              <TableHeader>
                <TableRow>
                  {form.type === "domain"
                    ? table["domain"].headerList.map((item, index) => (
                        <TableCell key={`${form.type}_${index}`}>
                          {item}
                        </TableCell>
                      ))
                    : table["contact"].headerList.map((item, index) => (
                        <TableCell key={`${form.type}_${index}`}>
                          {item}
                        </TableCell>
                      ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  {form.type === "domain"
                    ? table["domain"].data.map((key) => (
                        //@ts-ignore
                        <TableCell>{data[key]}</TableCell>
                      ))
                    : table["contact"].data.map((key) => (
                        //@ts-ignore
                        <TableCell>{data[key]}</TableCell>
                      ))}
                </TableRow>
              </TableBody>
            </Table>
          </Container>
        </form>
      </section>
    </main>
  );
}

export default App;
