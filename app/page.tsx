'use client'
import { ThemeProvider } from 'next-themes'
import LandingPage from '../components/LandingPage'

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <LandingPage />
    </ThemeProvider>
  )
}

