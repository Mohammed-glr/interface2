import * as React from "react";

export interface PlatformProps {
  modelPath: string;
  scale: number;
  background?: string;
}

declare const Platform: React.FC<PlatformProps>;
export default Platform;

