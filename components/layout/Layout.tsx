import React from 'react'
import Head from 'next/head'
import { Box, Text } from '@chakra-ui/react'
import styles from '../../styles/Home.module.css'

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Placementek</title>
                    <meta name="description" content="Craft simple and customizable skill tests." />
                    <link rel="icon" href="/favicon.png" />
                    <meta name="theme-color" content="#ff0080" />
                </Head>

                <main className={styles.main}>
                    {children}
                </main>
                <footer className={styles.footer}>
                    <a
                        href="https://go.santek.dev/me"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <Box display='flex' gap={1}>
                        <Text>Developed by</Text>
                        <Text color='pink.400' fontWeight='bold'>Santek.dev</Text>
                    </Box>
                    </a>
                </footer>
            </div>
        </>
  )
}
