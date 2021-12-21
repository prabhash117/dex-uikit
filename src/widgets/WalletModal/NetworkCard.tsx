import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { localStorageKey } from "./config";
import { Login, NetworkConfig } from "./types";

interface Props {
  walletConfig: NetworkConfig;
  onDismiss: () => void;
  mb: string;
}

const NetworkCard: React.FC<Props> = ({ walletConfig, onDismiss, mb }) => {
  const { label, icon: Icon } = walletConfig;
  return (
    <Button
      fullWidth
      variant="tertiary"
      onClick={() => {
        window.localStorage.setItem(localStorageKey, "1");
        window.open(walletConfig.href, "_blank")
        onDismiss();
      }}
      style={{ justifyContent: "space-between" }}
      mb={mb}
      id={`wallet-connect-${label.toLocaleLowerCase()}`}
    >
      <Text bold color="primary" mr="16px">
        {label}
      </Text>
      <Icon width="32px" />
    </Button>
  );
};

export default NetworkCard;
