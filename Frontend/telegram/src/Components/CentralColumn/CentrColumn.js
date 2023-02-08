import { CentralHeader } from "./CentralHeader";

import { MainChat } from "./MainChat";


export function CentrColumn() {
  return (
    <div className="w-3/4 max-h-screen min-w-[600px]">
      <CentralHeader />
      <MainChat />      
    </div>
  );
}
