import Link from "next/link";
import { useThemeContext } from "@/context/theme";

export default function Header() {
  const { color, setColor } = useThemeContext();
  return (
    <header>
      <div className="bg-vsgray-400 px-3 py-2 text-vsgray-75 text-sm flex items-center justify-between">
        <div className="flex gap-x-6">
          <div>LOGO</div>

          <nav>
            <ul className="flex gap-x-4">
              <li>
                <Link href="/">File</Link>
              </li>
              <li>Edit</li>
              <li>Selection</li>
            </ul>
          </nav>
        </div>

        <div>
          <div className="cursor-pointer" onClick={() => setColor( cur => cur === 'dark' ? 'light' : 'dark')}>
            {color}
          </div>
        </div>
      </div>
    </header>
  );
}
