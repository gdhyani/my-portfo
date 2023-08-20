import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";
import {Providers} from "./providers";

export const metadata = {
    title: "GD",
    description: "GD - Portfolio",
};

export default function RootLayout( {children} ) {
    return (
        <html lang="en" className="light">
            <body className="px-4 md:px-10 py-3">
                <Providers>
                  <Navbar/>
                  {children}
                  </Providers>
                  <Footer/>
            </body>
        </html>
    );
}
