import Keycloak from "keycloak-js";

const keycloakConfig = {
  url: "https://sso.com/auth",
  realm: "pncredhat",
  clientId: "pncrest",
};
// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
