export type WhoIsResponse = {
  createdDate: string;
  updatedDate: string;
  expiresDate: string;
  registrant: {
    organization: string;
    state: string;
    country: string;
    countryCode: string;
    rawText: string;
  };
  administrativeContact: {
    organization: string;
    state: string;
    country: string;
    countryCode: string;
    rawText: string;
  };
  technicalContact: {
    organization: string;
    state: string;
    country: string;
    countryCode: string;
    rawText: string;
  };
  domainName: string;
  nameServers: {
    rawText: string;
    hostNames: string[];
    ips: string[];
  };
  status: string;
  rawText: string;
  parseCode: number;
  header: "";
  strippedText: string;
  footer: "";
  audit: {
    createdDate: string;
    updatedDate: string;
  };
  customField1Name: string;
  customField1Value: string;
  registrarName: string;
  registrarIANAID: string;
  createdDateNormalized: string;
  updatedDateNormalized: string;
  expiresDateNormalized: string;
  customField2Name: string;
  customField3Name: string;
  customField2Value: string;
  customField3Value: "http://www.markmonitor.com";
  registryData: {
    createdDate: string;
    updatedDate: string;
    expiresDate: string;
    domainName: string;
    nameServers: {
      rawText: string;
      hostNames: string[];
      ips: [];
    };
    status: string;
    rawText: string;
    parseCode: 251;
    header: string;
    strippedText: string;
    footer: string;
    audit: {
      createdDate: string;
      updatedDate: string;
    };
    customField1Name: string;
    customField1Value: string;
    registrarName: string;
    registrarIANAID: string;
    createdDateNormalized: string;
    updatedDateNormalized: string;
    expiresDateNormalized: string;
    customField2Name: string;
    customField3Name: string;
    customField2Value: string;
    customField3Value: string;
    whoisServer: string;
  };
  domainAvailability: string;
  contactEmail: string;
  domainNameExt: string;
  estimatedDomainAge: number;
  ips: string[];
};
