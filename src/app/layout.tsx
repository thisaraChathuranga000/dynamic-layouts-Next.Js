import "./globals.css";
import { Providers } from "@/redux/provider";
import { Open_Sans } from "next/font/google"
import { Box, Grid, Link } from '@mui/material';
import Header from "@/components/Layouts/Header";
import Header2 from "@/components/Layouts/Header2";

const openSans = Open_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
})

interface RootLayoutProps{
  children:React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Providers>
          <Header/>
          {/* <Header2/> */}
            <Box sx={{ display: 'flex' }}>
              <Grid container>
                <Grid 
                  lg={3} 
                  sx={{
                    borderRight:"solid 1px black", 
                    display:"flex", 
                    flexDirection:"column", 
                    minHeight:"600px"
                  }}>
                  <Link href="/">Home</Link>
                  <Link href="/table1">Table1</Link>
                  <Link href="/table2">Table2</Link>
                  <Link href="/table3">Table3</Link>
                  <Link href="/table4">Table4</Link>
                </Grid>
                <Grid lg={9}>
                  {children}
                </Grid>
              </Grid>
            </Box>
        </Providers>
      </body>
    </html>
  );
}
