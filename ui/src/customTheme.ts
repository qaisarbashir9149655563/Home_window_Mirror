export const customTheme = () => {
  let theme: any = {
    colorPrimary: "#18c5ff",
    colorBorder: "var(--primary-color)",
    colorPrimaryTextActive: "var(--primary-color)",
    colorBgTextActive: "var(--text-color-active)",
    controlItemBgActive: "var(--text-color-active)",
    controlOutline: "var(--primary-color)",
    colorPrimaryBorderHover: "var(--primary-color)",
    colorLink: "var(--primary-color)",
    borderRadius: "1px",
  };
  return theme;
};
export type CustomTheme = typeof customTheme;
