import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const users = [
  { id: '1', email: 'admin@acme.com', role: 'admin', lastLogin: '2025-03-06' },
  { id: '2', email: 'analyst@acme.com', role: 'analyst', lastLogin: '2025-03-05' },
]

export function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">User management</h1>
          <p className="mt-1 text-muted-foreground">
            Manage tenant users, roles, and invites
          </p>
        </div>
        <Button>Invite user</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left text-sm font-medium">Email</th>
                  <th className="pb-3 text-left text-sm font-medium">Role</th>
                  <th className="pb-3 text-left text-sm font-medium">Last login</th>
                  <th className="pb-3 text-right text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b border-border hover:bg-muted/30">
                    <td className="py-3 text-sm">{u.email}</td>
                    <td className="py-3 text-sm">{u.role}</td>
                    <td className="py-3 text-sm">{u.lastLogin}</td>
                    <td className="py-3 text-right">
                      <Button variant="ghost" size="sm">
                        Reset password
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
