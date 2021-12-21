import React from "react";
import { NetworkConfig } from "./types";
interface Props {
    walletConfig: NetworkConfig;
    onDismiss: () => void;
    mb: string;
}
declare const NetworkCard: React.FC<Props>;
export default NetworkCard;
