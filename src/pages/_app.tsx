import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Head from 'next/head'
import {MantineProvider} from "@mantine/core";
import {mealMartTheme} from "@/theme";
import {RouterTransition} from '@/components/RouterTransition';
import "@/styles/globals.css";
import {NotificationsProvider} from "@mantine/notifications";
import {ModalsProvider} from "@mantine/modals";

export default function App(props: AppProps) {
  const {Component, pageProps} = props;

  return (
    <>
      <Head>
        <title>Meal Mart</title>
        <meta name="description" content="Food delivery application"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={mealMartTheme}
      >
        <NotificationsProvider position="top-right">
          <ModalsProvider>
            <RouterTransition/>
            <Component {...pageProps} />
          </ModalsProvider>
        </NotificationsProvider>
      </MantineProvider>
    </>
  )
}
