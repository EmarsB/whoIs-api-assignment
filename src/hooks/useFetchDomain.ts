import React, { useCallback, useMemo, useState } from "react";

// Internal Component
// Utilities
import { WHO_IS_BASE_URL } from "../utils/constants";

type fetchDomain = {
  domain: string;
};

/**
 * ------------------------------------------------------------------------
 * Component Definition
 * Fetches from WHO Is API and returns structured data
 * ------------------------------------------------------------------------
 */
function useFetchDomain({ domain }: fetchDomain) {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  const memoizedDomain = useMemo(() => domain, [domain]);

  const APPENDED_END_POINT = `${WHO_IS_BASE_URL}&domainName=${domain}`;

  // Fetch from WHO IS API
  // Will be executed when domain is different
  const fetchDomain = useCallback(() => {
    setLoading(true);

    fetch(APPENDED_END_POINT)
      .then((response) => response.json())
      .then((data) => {
        if (Object.keys(data).includes("ErrorMessage")) {
          // Will be the basis of validity of error
          setData({});
          setErrors(data.ErrorMessage.msg);
        } else {
          // Re-structure how the data will be received in the table
          const {
            domainName,
            registrarName,
            registryData,
            estimatedDomainAge,
            registrant,
            contactEmail,
            technicalContact,
            administrativeContact,
            nameServers,
          } = data.WhoisRecord;

          const extractedData = {
            domainName,
            registrarName,
            registrationData: new Date(
              registryData.createdDate
            ).toLocaleDateString("en-CA"),
            expirationDate: new Date(
              registryData.expiresDate
            ).toLocaleDateString("en-CA"),
            estimatedDomainAge,
            hostNames: nameServers.hostNames.join(","),
            registrantName: registrant.rawText,
            contactEmail,
            technicalContactName: technicalContact.rawText,
            administrativeContactName: administrativeContact.rawText,
          };

          setData(extractedData);
          setErrors("");
        }
      })
      .catch((e) => {
        setErrors(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [memoizedDomain]);

  return {
    data,
    errors,
    loading,
    fetchDomain,
  };
}

export default useFetchDomain;
