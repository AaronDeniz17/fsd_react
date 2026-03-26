import { createContext, useEffect, useMemo, useState } from "react";

export const UIContext = createContext(null);

export function UIProvider({ children }) {
  const [viewMode, setViewMode] = useState(() => {
    const saved = localStorage.getItem("shop-view-mode");
    return saved === "list" ? "list" : "grid";
  });
  const [showTips, setShowTips] = useState(true);

  useEffect(() => {
    localStorage.setItem("shop-view-mode", viewMode);
  }, [viewMode]);

  const value = useMemo(
    () => ({
      viewMode,
      setViewMode,
      showTips,
      setShowTips,
    }),
    [viewMode, showTips]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
