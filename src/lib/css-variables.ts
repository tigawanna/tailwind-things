
export function listAllCssVariables(): [string, string][] {
  const res: Record<string, string> = {};
  const elem = document.querySelector("html");
  if (!elem) {
    return []
  }
  if ("computedStyleMap" in elem) {
    // Chrome
    const styles = elem.computedStyleMap();
    Array.from(styles).forEach(([prop, val]) => {
      if (prop.startsWith("--")) {
        res[prop] = val.toString();
      }
    });
  } else {
    // Firefox
    const styles = getComputedStyle(elem);
    for (let i = 0; i < styles.length; i++) {
      const propertyName = styles[i];
      if (propertyName?.startsWith("--")) {
        const value = styles.getPropertyValue(propertyName);
        res[propertyName] = value;
      }
    }
  }
  return Object.entries(res).sort()
}

