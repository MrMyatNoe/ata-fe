import * as React from "react";

import { useMediaQuery } from "@chakra-ui/react";

function useMediaBreakpoints() {
  const [mobile, smallDesktop, desktop, isLargeScreen] = useMediaQuery([
    "(max-width:820px)",
    "(min-width:821px) and (max-width: 1024px)",
    "(min-width:1024px) and (max-width: 1920px)",
    "(min-width: 1921px)",
  ]);
  const [bp, setBp] = React.useState({
    isMobile: false,
    isSmallDesktop: false,
    isDesktop: false,
    isLargeScreen: false,
  });
  React.useEffect(() => {
    setBp({
      isMobile: mobile,
      isSmallDesktop: smallDesktop,
      isDesktop: desktop,
      isLargeScreen: isLargeScreen,
    });
  }, [desktop, isLargeScreen, mobile, smallDesktop]);

  return { ...bp };
}

export { useMediaBreakpoints };
