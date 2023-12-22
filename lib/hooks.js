import { useContext, useEffect } from "react";

import { ActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

export function useSectionInView(sectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useContext(ActiveSectionContext);

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
