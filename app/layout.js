import { Inter} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, shadesOfPurple } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ascenda",
  description: "AI CAREER GENARATOR",
  icons:{
    icon:[
      {
        url:'ResumX.png',
        
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{baseTheme:[ shadesOfPurple]}}>
    <html lang="en" suppressHydrationWarning>
    <body className={`${inter.className}`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
             <Header/>
            <main className="min-h-screen">{children}</main>
            <Toaster richColors/>
            

            
          </ThemeProvider>
          <Analytics />
        
      </body>
    </html>
    </ClerkProvider>
  );
}
