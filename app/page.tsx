"use client";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { ThemeContext } from "@/context/theme";
import Sidebar from "@/components/layouts/sidebar";

export default function Home() {
  const [color, setColor] = useState("dark");

  const springs = useSpring({
    from: { x: 0, y: 0 },
    to: { x: 50, y: 50 },
  });

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      <div className={"h-screen flex flex-col flex-1 " + color}>
        <Header />
        <main className="flex h-full grow">
          <Sidebar />
          <section className="w-full h-full bg-vsgray-40 dark:bg-vsgray-800">
            <article>
              <animated.div
                style={{
                  width: 80,
                  height: 80,
                  background: "#ff6d6d",
                  borderRadius: 8,
                  ...springs,
                }}
              />
            </article>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
