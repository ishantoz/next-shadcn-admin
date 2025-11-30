import ProgressLoader from '@/context/progress-loader.provider'
import { ThemeProvider } from '@/context/theme.provider'
import { Toaster } from '@/components/ui/sonner'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ProgressLoader>
        {children}
        <Toaster duration={5000} />
      </ProgressLoader>
    </ThemeProvider>
  )
}
