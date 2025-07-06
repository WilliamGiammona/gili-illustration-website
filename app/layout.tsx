"use client";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import Image from "next/image";
import { Karla } from "next/font/google";

const karla = Karla({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en" suppressHydrationWarning className={karla.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col items-center w-full">
            {/* Logo Section */}
            <div className="w-full flex justify-center items-center">
              <Link href="/" className="flex items-center">
                <div className="flex items-center justify-center -m-16">
                  <Image
                    src="/images/Logos/GiliLogo.jpg"
                    alt="Gili Giammona Logo"
                    width={200}
                    height={200}
                    className="w-72 h-72 object-contain dark:invert dark:pointer-events-none"
                  />
                </div>
              </Link>
            </div>

            {/* Navigation Section */}
            <div className="w-full relative z-10">
              <nav className="flex justify-center items-center gap-8 pt-4 pb-12">
                <div className="flex items-center gap-2">
                  <Link
                    href="/"
                    className={`px-3 py-1.5 text-base transition-opacity hover:opacity-70 ${
                      pathname === "/"
                        ? "font-bold underline underline-offset-4"
                        : ""
                    }`}
                  >
                    Work
                  </Link>

                  <Link
                    href="/clients"
                    className={`px-3 py-1.5 text-base transition-opacity hover:opacity-70 ${
                      pathname === "/clients"
                        ? "font-bold underline underline-offset-4"
                        : ""
                    }`}
                  >
                    Clients
                  </Link>

                  <Link
                    href="/about"
                    className={`px-3 py-1.5 text-base transition-opacity hover:opacity-70 ${
                      pathname === "/about"
                        ? "font-bold underline underline-offset-4"
                        : ""
                    }`}
                  >
                    About
                  </Link>

                  <Link
                    href="/contact"
                    className={`px-3 py-1.5 text-base transition-opacity hover:opacity-70 ${
                      pathname === "/contact"
                        ? "font-bold underline underline-offset-4"
                        : ""
                    }`}
                  >
                    Contact
                  </Link>

                  {/* Mode Toggle with matching padding */}
                  <div className="px-3 py-1.5">
                    <ModeToggle />
                  </div>
                </div>
              </nav>
            </div>

            {/* Main Content */}
            <main className="w-full">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
