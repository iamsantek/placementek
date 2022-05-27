import React from 'react'
import Head from 'next/head'
import { Box, Text } from '@chakra-ui/react'
import { BiLinkExternal } from 'react-icons/bi'
import styles from '../../styles/Home.module.css'

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Placementek</title>
                    <meta name="description" content="Craft simple and customizable skill tests." />
                    <link rel="icon" href="/favicon.png" />
                    <meta name="theme-color" content="#1EC276" />
                    <meta
                        property="og:image"
                        content="/logo.png"
                    />
                </Head>

                <main className={styles.main}>
                    {children}
                </main>
                <footer className={styles.footer}>
                    <Box display='flex' gap={1}>
                        <Text>Developed by</Text>
                        <a
                            href="https://go.santek.dev/me"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Text
                                bgGradient='radial(#3cb371,#59da6b)'
                                bgClip='text'
                                fontWeight='bold'
                            >
                                Santek.dev
                            </Text>
                        </a>
                        -
                        <a
                            href="https://go.santek.dev/placementek-repo"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Box
                                alignItems='center'
                                display='flex'
                                flexDirection='row'
                                gap={1}
                            >
                                <BiLinkExternal />
                                <Text color='blue.900'>GitHub repo</Text>
                            </Box>
                        </a>

                    </Box>

                </footer>
            </div>
        </>
  )
}
