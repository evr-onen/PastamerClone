// ** CSS
import "../styles/globals.css"
import { EmotionCache } from "@emotion/react"

// ** Types
import type { AppProps } from "next/app"
import { FC, useEffect, useState } from "react"

// ** MUI imports
import { Grid } from "@mui/material"

// ** Create Theme
import PageProvider from "src/theme/helpers/PageProvider"

// ** Components Imports
import Header from "src/components/Header"

// ** Context API
import { GlobalContextProvider } from "src/contexts/globalContext"

// ** Lang
import "src/config/i18n"

import SideNav from "src/components/SideNav"
export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache
}
import { useRouter } from "next/router"
const App: FC<MUIAppProps> = ({ Component, pageProps, emotionCache }) => {
  const [firstRoute, setFirstRoute] = useState<string | null>(null)
  let router = useRouter()
  const { asPath } = useRouter()

  useEffect(() => {
    setFirstRoute(asPath.split("/")[1])
  }, [asPath])

  return (
    <PageProvider emotionCache={emotionCache}>
      <GlobalContextProvider>
        <Grid container rowSpacing={4}>
          {router.pathname !== "/" && (
            <Grid item xs={12}>
              <Header />
            </Grid>
          )}
          {firstRoute === "admin-panel" ? (
            <Grid item xs={12}>
              <SideNav>
                <Component {...pageProps} />
              </SideNav>
            </Grid>
          ) : (
            <Grid item xs={12}>
              <Component {...pageProps} />
            </Grid>
          )}
        </Grid>
      </GlobalContextProvider>
    </PageProvider>
  )
}

export default App
