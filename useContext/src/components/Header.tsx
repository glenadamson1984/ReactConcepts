import { useTheme } from "../context/ThemeContext";
export function Header() {
  const { theme } = useTheme();
  return <div>Header sees theme: {theme}</div>;
}
