import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import { Header } from '@/components/layout/header'
import { DashboardLayout } from '@/layouts/dashboard-layout'
import { useAuth } from '@/contexts/auth-context'

import { LandingPage } from '@/pages/landing'
import { LoginPage } from '@/pages/login'
import { SignupPage } from '@/pages/signup'
import { VerifyEmailPage } from '@/pages/verify-email'
import { ForgotPasswordPage } from '@/pages/forgot-password'
import { AboutPage } from '@/pages/about'
import { TermsPage } from '@/pages/terms'
import { PrivacyPage } from '@/pages/privacy'
import { SupportPage } from '@/pages/support'
import { NotFoundPage } from '@/pages/not-found'
import { ErrorPage } from '@/pages/error'
import { SettingsPage } from '@/pages/settings'
import { RawPayloadViewerPage } from '@/pages/raw-payload-viewer'

import { DashboardOverview } from '@/pages/dashboard/overview'
import { CompaniesPage } from '@/pages/dashboard/companies'
import { CompanyViewPage } from '@/pages/dashboard/company-view'
import { DrillDownPage } from '@/pages/dashboard/drill-down'

import { AdminOverview } from '@/pages/admin/overview'
import { AdminUsersPage } from '@/pages/admin/users'
import { AuditLogsPage } from '@/pages/admin/audit-logs'
import { DataReplayPage } from '@/pages/admin/data-replay'

const queryClient = new QueryClient()

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth()
  if (isLoading) return null
  if (!isAuthenticated) return <Navigate to="/login" replace />
  return <>{children}</>
}

function LandingLayout() {
  return (
    <>
      <Header variant="landing" />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: 'support', element: <SupportPage /> },
    ],
  },
  { path: 'login', element: <LoginPage /> },
  { path: 'signup', element: <SignupPage /> },
  { path: 'verify-email', element: <VerifyEmailPage /> },
  { path: 'forgot-password', element: <ForgotPasswordPage /> },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashboardOverview /> },
      { path: 'companies', element: <CompaniesPage /> },
      { path: 'companies/:ticker', element: <CompanyViewPage /> },
      { path: 'companies/:ticker/drill-down', element: <DrillDownPage /> },
    ],
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <AdminOverview /> },
      { path: 'users', element: <AdminUsersPage /> },
      { path: 'audit', element: <AuditLogsPage /> },
      { path: 'replay', element: <DataReplayPage /> },
    ],
  },
  {
    path: '/settings',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [{ index: true, element: <SettingsPage /> }],
  },
  {
    path: '/payload/:payloadId',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [{ index: true, element: <RawPayloadViewerPage /> }],
  },
  {
    path: 'error',
    element: (
      <>
        <Header variant="landing" />
        <ErrorPage />
      </>
    ),
  },
  {
    path: '*',
    element: (
      <>
        <Header variant="landing" />
        <NotFoundPage />
      </>
    ),
  },
])

export function Router() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" richColors />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
