import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import Image from "next/image";
import { Karla } from "next/font/google";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gili Giammona Illustration",
  description: "Gili Giammona Illustration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
                <Menubar className="border-none bg-transparent">
                  <MenubarMenu>
                    <MenubarTrigger className="font-normal text-base hover:opacity-70 dark:hover:opacity-70 transition-opacity p-0">
                      <Link
                        href="/"
                        className="w-full h-full px-3 py-1.5 inline-block"
                      >
                        Work
                      </Link>
                    </MenubarTrigger>
                  </MenubarMenu>

                  <MenubarMenu>
                    <MenubarTrigger className="font-normal text-base hover:opacity-70 dark:hover:opacity-70 transition-opacity p-0">
                      <Link
                        href="/clients"
                        className="w-full h-full px-3 py-1.5 inline-block"
                      >
                        Clients
                      </Link>
                    </MenubarTrigger>
                  </MenubarMenu>

                  <MenubarMenu>
                    <MenubarTrigger className="font-normal text-base hover:opacity-70 dark:hover:opacity-70 transition-opacity p-0">
                      <Link
                        href="/about"
                        className="w-full h-full px-3 py-1.5 inline-block"
                      >
                        About
                      </Link>
                    </MenubarTrigger>
                  </MenubarMenu>

                  <MenubarMenu>
                    <MenubarTrigger className="font-normal text-base hover:opacity-70 dark:hover:opacity-70 transition-opacity p-0">
                      <Link
                        href="/contact"
                        className="w-full h-full px-3 py-1.5 inline-block"
                      >
                        Contact
                      </Link>
                    </MenubarTrigger>
                  </MenubarMenu>

                  {/* Mode Toggle with matching padding */}
                  <div className="px-3 py-1.5">
                    <ModeToggle />
                  </div>
                </Menubar>
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
